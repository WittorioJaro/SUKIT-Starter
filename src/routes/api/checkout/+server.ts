import type { RequestHandler } from './$types';
import { stripe } from '$lib/server/stripe';
import 'dotenv/config';
import { BASE_URL } from '$env/static/private';
import { json } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request, locals, url }) => {

   const { user } = await locals.safeGetSession();
   
  if (!user) {
    return json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Define your success and cancel URLs. These can be SvelteKit pages.
  const successUrl = BASE_URL + '/welcome';
  const cancelUrl = BASE_URL + '/cancel';

    try {
        const { priceId, email, userId } = await request.json();
        const session = await stripe.checkout.sessions.create({
            metadata: { userId: userId },
            customer_email: email,
            payment_method_types: ['card'],
            automatic_tax: { enabled: true },
            line_items: [
                {
                    price: priceId,
                    quantity: 1,
                },
            ],
            mode: 'subscription',
            success_url: successUrl,
            cancel_url: cancelUrl,
    });
        return json({ id: session.id }, { status: 200 });
    } catch (error: any) {
        console.error(error);
        return json({ message: error.message }, { status: 500 });
    }
};