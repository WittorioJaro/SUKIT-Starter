<script lang="ts">
	import { Check } from 'lucide-svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import type { PageData } from './$types';

	let { data } = $props();
</script>

<div class="flex min-h-screen flex-col items-center justify-center p-4">
	<div class="mx-auto max-w-md text-center">
		<div class="mb-4 inline-block rounded-full bg-primary/10 p-3 text-primary">
			<Check class="h-8 w-8" />
		</div>
		<h1 class="mb-2 text-2xl font-bold">Thank you for your subscription!</h1>
		<p class="mb-4 text-muted-foreground">
			You now have access to all {data.planName} features.
		</p>
		<Button href="/app">Go to Dashboard</Button>
	</div>
</div>
