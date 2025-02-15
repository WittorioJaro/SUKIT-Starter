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
	<Card>
		<CardHeader>
			<CardTitle>Profile</CardTitle>
		</CardHeader>
		<CardContent>
			<form
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
				<div>
					<Label>Email:</Label>
					<Label>{email}</Label>
				</div>
				<div>
					<Label>First Name</Label>
					<Input bind:value={firstName} type="text" />
				</div>
				<div>
					<Label>Last Name</Label>
					<Input bind:value={lastName} type="text" />
				</div>
				<Button type="submit">Update</Button>
			</form>
		</CardContent>
	</Card>
{/if}
