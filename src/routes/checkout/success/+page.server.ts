import { stripe } from '$lib/server/stripe';
import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url, locals }) => {
    const sessionId = url.searchParams.get('session_id');
    const { user } = await locals.safeGetSession();

    if (!sessionId || !user) {
        throw redirect(303, '/checkout');
    }

    try {
        const session = await stripe.checkout.sessions.retrieve(sessionId);
        
        if (session.payment_status === 'paid') {
            return {
                success: true,
                planName: session.metadata?.planName,
                user
            };
        }
    } catch (err) {
        console.error('Error verifying checkout session:', err);
        throw error(500, 'Failed to verify checkout session');
    }

    throw redirect(303, '/checkout');
}; 