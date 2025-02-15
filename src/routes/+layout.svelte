<script lang="ts">
	import '../app.css';
	import { invalidate } from '$app/navigation';
	import { Toaster } from 'svelte-5-french-toast';
	import { ModeWatcher } from 'mode-watcher';
	let { data, children } = $props();
	let { session, supabase } = $derived(data);

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
<ModeWatcher />
{@render children()}
