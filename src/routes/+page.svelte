<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';

	const { data } = $props();
	$inspect(data.user);
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

{#if data.user}
	<Button href="/auth/l">Logout</Button>
{:else}
	<Button href="/auth/login">Login</Button>
{/if}
