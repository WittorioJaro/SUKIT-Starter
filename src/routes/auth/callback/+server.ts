import { getOrCreateUserProfile } from '@/auth';
import { db } from '@/server/db';
import { profileTable } from '@/server/db/schema';
import { redirect } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';

export const GET = async (event) => {
	const {
		url,
		locals: { supabase }
	} = event;
	const code = url.searchParams.get('code') as string;
	const next = url.searchParams.get('next') ?? '/';

  if (code) {
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (!error) {
      // Create profile immediately after authentication
      await getOrCreateUserProfile(event.locals);
      const { user } = await event.locals.safeGetSession();
      
      if (!user) {
        throw redirect(303, '/auth/auth-code-error');
      }
      // Check if user has an active subscription
      const profile = await db.query.profileTable.findFirst({
        where: eq(profileTable.id, user.id)
      });

      if (!profile?.planActive) {
        // Redirect to payment page if no active subscription
        throw redirect(303, '/pay');
      }

      throw redirect(303, `/${next.slice(1)}`);

    }
  }

  // return the user to an error page with instructions
  throw redirect(303, '/auth/auth-code-error');
};