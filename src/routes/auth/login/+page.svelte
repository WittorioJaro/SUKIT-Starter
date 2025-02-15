<script lang="ts">
	import Card from '@/components/ui/card/card.svelte';
	import type { PageData } from './$types';
	import CardHeader from '@/components/ui/card/card-header.svelte';
	import CardTitle from '@/components/ui/card/card-title.svelte';
	import CardContent from '@/components/ui/card/card-content.svelte';
	import Input from '@/components/ui/input/input.svelte';
	import Button from '@/components/ui/button/button.svelte';

	let { data }: { data: PageData } = $props();
</script>

<Card>
	<CardHeader>
		<CardTitle>Login</CardTitle>
	</CardHeader>
	<CardContent>
		<Button href="/auth/login/google" type="submit">Login with Google</Button>
	</CardContent>
</Card>
