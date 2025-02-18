import { json, type RequestHandler } from '@sveltejs/kit';
import { stripe } from '$lib/server/stripe';
import { db } from '@/server/db';
import { profileTable } from '@/server/db/schema';
import { eq } from 'drizzle-orm';
import Stripe from 'stripe';
import { STRIPE_WEBHOOK_SECRET } from '$env/static/private';

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

            if (!userId) {
                throw new Error('No userId in session metadata');
            }

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
                    planExpires: subscription.cancel_at ?? 0
                })
                .where(eq(profileTable.id, profile.id));
        }

        // Handle subscription deletions
        if (event.type === 'customer.subscription.deleted') {
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
                    planActive: false,
                    planType: 'free',
                    subscriptionId: '',
                    planExpires: 0
                })
                .where(eq(profileTable.id, profile.id));
        }

        return json({ received: true });
    } catch (error: any) {
        console.error('Webhook error:', error);
        return json({ error: error.message }, { status: 500 });
    }
};
