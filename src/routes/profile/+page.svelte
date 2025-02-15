<script lang="ts">
	import Button from '@/components/ui/button/button.svelte';
	import type { PageData } from './$types';
	import Card from '@/components/ui/card/card.svelte';
	import CardHeader from '@/components/ui/card/card-header.svelte';
	import CardTitle from '@/components/ui/card/card-title.svelte';
	import CardContent from '@/components/ui/card/card-content.svelte';
	import Label from '@/components/ui/label/label.svelte';
	import Input from '@/components/ui/input/input.svelte';
	import { enhance } from '$app/forms';
	import { formData } from 'zod-form-data';
	import { invalidate } from '$app/navigation';
	import { toast } from 'svelte-5-french-toast';
	import Sun from 'lucide-svelte/icons/sun';
	import Moon from 'lucide-svelte/icons/moon';
	import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

	import { toggleMode } from 'mode-watcher';
	let { data }: { data: PageData } = $props();

	const { userProfile } = data;

	let firstName = $state('');
	let lastName = $state('');
	let email = $state('');

	$effect(() => {
		if (userProfile && !Array.isArray(userProfile)) {
			firstName = userProfile.firstName;
			lastName = userProfile.lastName;
			email = userProfile.email;
		}
	});

	$effect(() => {
		console.log('Profile Picture URL:', userProfile?.profilePictureUrl);
	});
</script>

<Button onclick={toggleMode} variant="outline" size="icon">
	<Sun
		class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
	/>
	<Moon
		class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
	/>
	<span class="sr-only">Toggle theme</span>
</Button>

{#if userProfile}
	<div class="flex min-h-screen items-center justify-center bg-background p-4">
		<Card class="w-full max-w-lg">
			<CardHeader>
				<CardTitle>Profile</CardTitle>
			</CardHeader>
			<CardContent>
				<div class="flex flex-col items-center space-y-4">
					<Avatar class="size-24">
						<AvatarImage
							src={userProfile?.profilePictureUrl?.replace('=s96-c', '=s192-c')}
							alt={`${firstName} ${lastName}`}
							referrerpolicy="no-referrer"
							crossorigin="anonymous"
						/>
						<AvatarFallback class="text-lg">
							{userProfile?.firstName?.[0] + userProfile?.lastName?.[0]}
						</AvatarFallback>
					</Avatar>
					<div class="space-y-1 text-center">
						<Label class="text-muted-foreground">Email</Label>
						<p class="font-medium">{email}</p>
					</div>
				</div>
				<form
					class="space-y-6"
					method="post"
					use:enhance={({ formData }) => {
						formData.set('firstName', firstName);
						formData.set('lastName', lastName);
						return ({ result }) => {
							if (result.type === 'success') {
								invalidate('/profile');
								toast.success('Profile updated successfully');
							}
						};
					}}
				>
					<div class="mt-6 grid gap-4 sm:grid-cols-2">
						<div class="space-y-2">
							<Label>First Name</Label>
							<Input bind:value={firstName} type="text" />
						</div>
						<div class="space-y-2">
							<Label>Last Name</Label>
							<Input bind:value={lastName} type="text" />
						</div>
					</div>
					<Button class="w-full" type="submit">Update</Button>
				</form>
				<Button class="mt-4 w-full" variant="outline" href="/auth/logout">Logout</Button>
			</CardContent>
		</Card>
	</div>
{/if}
