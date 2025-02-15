import { redirect } from "@sveltejs/kit"

export const GET = async ({ locals: { supabase }, url }) => {
  const { data} = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: url.origin + '/auth/callback?next=/app'
    }
  })
  if (data.url) {
    return redirect(307, data.url)
  }
  redirect(307, '/auth/error')
}