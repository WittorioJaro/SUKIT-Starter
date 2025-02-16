import { json, type RequestHandler } from '@sveltejs/kit';
import { stripe } from '$lib/server/stripe';
import { BASE_URL } from '$env/static/private';
export const POST: RequestHandler = async ({ request }) => {
  const { customerId } = await request.json();

  try {
    const portalSession = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: `${BASE_URL}/profile`,
    });

    return json({ id: portalSession.id, url: portalSession.url });
  } catch (error: any) {
    console.error('Failed to create billing portal session:', error.message);
    return json({ error: error.message }, { status: 500 });
  }
};
