<script lang="ts">
	import '../app.css';
	import { invalidate } from '$app/navigation';
	import { Toaster } from 'svelte-5-french-toast';
	import { auth } from '$lib/stores/auth';
	import { onMount } from 'svelte';
	import { jwtFromSession } from '$lib/utils/jwt';

	let { data, children } = $props();
	let { session, supabase } = $derived(data);

	// Initialize auth store with session data
	$effect(() => {
		if (session) {
			// Generate JWT token from session
			const token = jwtFromSession(session);
			auth.setAuth(session.user, token);
		} else {
			auth.clearAuth();
		}
	});

	onMount(() => {
		// Initialize auth from localStorage
		auth.initialize();

		// Force dark mode
		document.documentElement.classList.add('dark');
	});

	$effect(() => {
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<Toaster />
{@render children()}
