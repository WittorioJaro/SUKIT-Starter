import { json, type RequestHandler } from '@sveltejs/kit';
import { stripe } from '$lib/server/stripe';
import { db } from '@/server/db';
import { profileTable } from '@/server/db/schema';
import { eq } from 'drizzle-orm';
import Stripe from 'stripe';
import { STRIPE_WEBHOOK_SECRET } from '$env/static/private';
import { resend } from '$lib/server/resend';
import { purchaseConfirmationEmail } from '@/email/confirmPurchase';
import { goodbyeEmail } from '@/email/goodbye';
import { updateEmail } from '@/email/update';

export const POST: RequestHandler = async ({ request }) => {
    try {
        const rawBody = await request.text();
        const signature = request.headers.get('stripe-signature');

        if (!signature) {
            return json({ error: 'No signature' }, { status: 400 });
        }

        let event;
        try {
            event = stripe.webhooks.constructEvent(
                rawBody,
                signature,
                STRIPE_WEBHOOK_SECRET
            );
        } catch (error: any) {
            console.error(`Webhook signature verification failed: ${error.message}`);
            return json({ error: 'Webhook Error' }, { status: 400 });
        }

        // Handle the checkout.session.completed event
        if (event.type === 'checkout.session.completed') {
            const session = event.data.object as Stripe.Checkout.Session;
            const userId = session.metadata?.userId;
            const customerEmail = session.customer_details?.email;

            if (!userId) {
                throw new Error('No userId in session metadata');
            }

            // Get user profile for the name
            const userProfile = await db.query.profileTable.findFirst({
                where: eq(profileTable.id, userId)
            });

            // Update user's profile with subscription info
            await db.update(profileTable)
                .set({
                    customerId: session.customer as string,
                    subscriptionId: session.subscription as string,
                    planType: session.metadata?.planType?.toLowerCase() ?? 'free',
                    planActive: true,
                    planExpires: 0, // Reset any expiration
                })
                .where(eq(profileTable.id, userId));
            
            if (customerEmail) {
                await resend.emails.send({
                    from: 'Victor Jaro <victor@victorjaro.com>',
                    to: customerEmail,
                    subject: 'Welcome to SUKIT Starter',
                    html: await purchaseConfirmationEmail(userProfile)
                });
            }
        }

        // Handle subscription updates
        if (event.type === 'customer.subscription.updated') {
            const subscription = event.data.object as Stripe.Subscription;
            
            // Find user by customer ID
            const profile = await db.query.profileTable.findFirst({
                where: eq(profileTable.customerId, subscription.customer as string)
            });

            if (!profile) {
                return json({ error: 'User not found' }, { status: 400 });
            }

            await db.update(profileTable)
                .set({
                    planActive: subscription.status === 'active',
                    planType: subscription.metadata?.planType?.toLowerCase() ?? 'free',
                    planExpires: subscription.cancel_at ?? 0
                })
                .where(eq(profileTable.id, profile.id));

            // Send update email
            if (profile.email) {
                await resend.emails.send({
                    from: 'Victor Jaro <victor@victorjaro.com>',
                    to: profile.email,
                    subject: 'Your subscription has been updated',
                    html: await updateEmail(profile)
                });
            }
        }

        // Handle subscription deletions
        if (event.type === 'customer.subscription.deleted') {
            const subscription = event.data.object as Stripe.Subscription;
            
            // Find user by customer ID
            const userProfile = await db.query.profileTable.findFirst({
                where: eq(profileTable.customerId, subscription.customer as string)
            });

            if (!userProfile) {
                return json({ error: 'User not found' }, { status: 400 });
            }

            await db.update(profileTable)
                .set({
                    planActive: false,
                    planType: 'free',
                    subscriptionId: '',
                    planExpires: 0
                })
                .where(eq(profileTable.id, userProfile.id));
            
            if (userProfile.email) {
                await resend.emails.send({
                    from: 'Victor Jaro <victor@victorjaro.com>',
                    to: userProfile.email,
                    subject: 'Sorry to see you go',
                    html: await goodbyeEmail(userProfile)
                });
            }
        }

        return json({ received: true });
    } catch (error: any) {
        console.error('Webhook error:', error);
        return json({ error: error.message }, { status: 500 });
    }
};
