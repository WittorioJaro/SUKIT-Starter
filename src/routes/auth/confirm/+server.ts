import { redirect } from '@sveltejs/kit';

export const GET = async ({ url, locals: { supabase } }) => {
  const token_hash = url.searchParams.get('token_hash');
  const type = url.searchParams.get('type');
  const next = url.searchParams.get('next') ?? '/app';

  if (token_hash && type) {
    const { error } = await supabase.auth.verifyOtp({
      token_hash,
      type: 'email',
    });
    if (!error) {
      throw redirect(303, next);
    }
  }

  // return the user to an error page with instructions
  throw redirect(303, '/auth/error');
};

