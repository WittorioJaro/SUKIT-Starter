import { stripe } from '$lib/server/stripe';
import { error, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

const PLANS = {
    Basic: {
        monthly: { priceId: "price_1PiNROJOCm0kYvDpQK1Sr60k", name: 'Basic Monthly' },
        annual: { priceId: "price_1PiNROJOCm0kYvDpQK1Sr60k", name: 'Basic Annual' }
    },
    Pro: {
        monthly: { priceId: "price_1PiNROJOCm0kYvDpQK1Sr60k", name: 'Pro Monthly' },
        annual: { priceId: "price_1PiNROJOCm0kYvDpQK1Sr60k", name: 'Pro Annual' }
    },
    Enterprise: {
        monthly: { priceId: "price_1PiNROJOCm0kYvDpQK1Sr60k", name: 'Enterprise Monthly' },
        annual: { priceId: "price_1PiNROJOCm0kYvDpQK1Sr60k", name: 'Enterprise Annual' }
    }
} as const;

type PlanType = keyof typeof PLANS;
type BillingInterval = keyof typeof PLANS[PlanType];

export const actions: Actions = {
    default: async ({ locals, request, url }) => {
        const { user } = await locals.safeGetSession();


        if (!user) {
            throw error(401, 'Unauthorized');
        }

        const formData = await request.formData();
        const planName = formData.get('planName') as PlanType;
        const isAnnual = formData.get('isAnnual') === 'true';
        const interval: BillingInterval = isAnnual ? 'annual' : 'monthly';

        if (!planName || !(planName in PLANS)) {
            throw error(400, 'Invalid plan selected');
        }

        const plan = PLANS[planName][interval];

        const session = await stripe.checkout.sessions.create({
            metadata: { userId: user.id },
            customer_email: user.email,
            payment_method_types: ['card'],
            automatic_tax: { enabled: true },
            line_items: [
                {
                    price: plan.priceId,
                    quantity: 1,
                },
            ],
            mode: 'subscription',
            success_url: `${url.origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${url.origin}/checkout`,
        });

        if (!session.url) {
            throw error(500, 'Failed to create checkout session');
        }

        throw redirect(303, session.url);
    }
};
