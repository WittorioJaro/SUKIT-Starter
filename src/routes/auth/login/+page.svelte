<script lang="ts">
	import Card from '@/components/ui/card/card.svelte';
	import type { PageData } from './$types';
	import type { ActionData } from './$types.js';
	import CardHeader from '@/components/ui/card/card-header.svelte';
	import CardTitle from '@/components/ui/card/card-title.svelte';
	import CardContent from '@/components/ui/card/card-content.svelte';
	import Input from '@/components/ui/input/input.svelte';
	import Button from '@/components/ui/button/button.svelte';
	import { enhance } from '$app/forms';
	import { cn } from '@/utils';

	let { form }: { form: ActionData } = $props();
	let loading = $state(false);

	function handleSubmit() {
		loading = true;
		return async ({ update }: { update: () => Promise<void> }) => {
			await update();
			loading = false;
		};
	}
</script>

<div class="flex h-screen items-center justify-center">
	<Card class="w-[400px]">
		<CardHeader>
			<CardTitle>Login</CardTitle>
		</CardHeader>
		<CardContent>
			<Button variant="outline" class="w-full" href="/auth/login/google" type="submit">
				<img src="/google.png" alt="Google" class="h-4 w-4" />
				Sign in with Google
			</Button>
			<div class="relative mt-4">
				<div class="absolute inset-0 flex items-center">
					<span class="w-full border-t" />
				</div>
				<div class="relative flex justify-center text-xs uppercase">
					<span class="bg-card px-2 text-muted-foreground"> Or </span>
				</div>
			</div>
			<form method="POST" use:enhance={handleSubmit} class="space-y-4">
				<div class="space-y-2">
					<label for="email" class="text-sm font-medium">Email address</label>
					<Input
						id="email"
						name="email"
						type="email"
						placeholder="Your email"
						value={form?.email ?? ''}
					/>
					{#if form?.errors?.email}
						<span class="text-sm text-destructive">
							{form.errors.email}
						</span>
					{/if}
					{#if form?.message}
						<div
							class={cn('rounded-md p-3 text-sm', {
								'bg-red/15 text-destructive': !form?.success,
								'bg-success/15 text-success': form?.success
							})}
						>
							{form.message}
						</div>
					{/if}
				</div>

				<Button type="submit" class="w-full" disabled={loading}>
					{loading ? 'Loading...' : 'Send magic link'}
				</Button>
			</form>
		</CardContent>
	</Card>
</div>
