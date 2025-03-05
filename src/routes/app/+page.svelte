<script lang="ts">
	import {
		Card,
		CardContent,
		CardDescription,
		CardFooter,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Avatar } from '$lib/components/ui/avatar';
	import { goto } from '$app/navigation';
	import { cn } from '$lib/utils';
	import Terminal from '$lib/components/Terminal.svelte';

	// Mock data for dashboard
	const stats = [
		{ title: 'Active Sessions', value: '1', change: '+0%', status: 'neutral' },
		{ title: 'Content Generated', value: '12', change: '+24%', status: 'positive' },
		{ title: 'API Calls', value: '1,234', change: '+10%', status: 'positive' }
	];

	const recentActivity = [
		{
			id: 1,
			title: 'Video Repurposing',
			timestamp: new Date(Date.now() - 1000 * 60 * 30),
			status: 'completed',
			description: 'Converted YouTube video to Twitter thread and newsletter'
		},
		{
			id: 2,
			title: 'Content Analysis',
			timestamp: new Date(Date.now() - 1000 * 60 * 120),
			status: 'completed',
			description: 'Analyzed blog post for key insights and SEO opportunities'
		},
		{
			id: 3,
			title: 'Newsletter Draft',
			timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5),
			status: 'completed',
			description: 'Generated newsletter from podcast transcript'
		}
	];

	function formatTimeAgo(date: Date) {
		const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);

		let interval = seconds / 31536000;
		if (interval > 1) return Math.floor(interval) + ' years ago';

		interval = seconds / 2592000;
		if (interval > 1) return Math.floor(interval) + ' months ago';

		interval = seconds / 86400;
		if (interval > 1) return Math.floor(interval) + ' days ago';

		interval = seconds / 3600;
		if (interval > 1) return Math.floor(interval) + ' hours ago';

		interval = seconds / 60;
		if (interval > 1) return Math.floor(interval) + ' minutes ago';

		return Math.floor(seconds) + ' seconds ago';
	}

	function navigateToConsole() {
		goto('/app/console');
	}
</script>

<div class="container mx-auto space-y-8 p-6">
	<header class="mb-8 flex items-center justify-between">
		<div>
			<h1 class="text-3xl font-bold">Repurpose Bot Dashboard</h1>
			<p class="text-muted-foreground">Manage your content repurposing workflows</p>
		</div>
		<Button onclick={navigateToConsole} class="bg-primary hover:bg-primary/90">Open Console</Button>
	</header>

	<!-- Terminal Component -->
	<Terminal />

	<section class="grid gap-6 md:grid-cols-3">
		{#each stats as stat}
			<Card>
				<CardHeader class="pb-2">
					<CardTitle class="text-sm font-medium">{stat.title}</CardTitle>
				</CardHeader>
				<CardContent>
					<div class="text-3xl font-bold">{stat.value}</div>
					<p
						class={cn(
							'mt-1 text-xs',
							stat.status === 'positive' && 'text-green-500',
							stat.status === 'negative' && 'text-red-500',
							stat.status === 'neutral' && 'text-gray-500'
						)}
					>
						{stat.change} from last month
					</p>
				</CardContent>
			</Card>
		{/each}
	</section>

	<section class="mt-8">
		<div class="mb-4 flex items-center justify-between">
			<h2 class="text-xl font-semibold">Recent Activity</h2>
			<Button variant="outline" size="sm">View All</Button>
		</div>

		<div class="space-y-4">
			{#each recentActivity as activity}
				<Card class="overflow-hidden">
					<div class="flex items-start gap-4 p-6">
						<div
							class={cn(
								'h-full w-2 self-stretch rounded-full',
								activity.status === 'completed' && 'bg-green-500',
								activity.status === 'in-progress' && 'bg-blue-500',
								activity.status === 'failed' && 'bg-red-500'
							)}
						></div>

						<div class="flex-1">
							<div class="flex items-start justify-between">
								<div>
									<h3 class="font-medium">{activity.title}</h3>
									<p class="text-sm text-muted-foreground">{activity.description}</p>
								</div>
								<span class="text-xs text-muted-foreground"
									>{formatTimeAgo(activity.timestamp)}</span
								>
							</div>
						</div>
					</div>
				</Card>
			{/each}
		</div>
	</section>

	<section class="mt-8 grid gap-6 md:grid-cols-2">
		<Card>
			<CardHeader>
				<CardTitle>Quick Actions</CardTitle>
				<CardDescription>Start a new content repurposing task</CardDescription>
			</CardHeader>
			<CardContent class="space-y-4">
				<Button class="w-full justify-start" variant="outline">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="mr-2 h-5 w-5"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<polygon points="23 7 16 12 23 17 23 7"></polygon>
						<rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
					</svg>
					Repurpose Video
				</Button>
				<Button class="w-full justify-start" variant="outline">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="mr-2 h-5 w-5"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
						<polyline points="14 2 14 8 20 8"></polyline>
						<line x1="16" y1="13" x2="8" y2="13"></line>
						<line x1="16" y1="17" x2="8" y2="17"></line>
						<polyline points="10 9 9 9 8 9"></polyline>
					</svg>
					Generate Newsletter
				</Button>
				<Button class="w-full justify-start" variant="outline">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="mr-2 h-5 w-5"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path
							d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
						></path>
					</svg>
					Create Twitter Thread
				</Button>
			</CardContent>
		</Card>

		<Card>
			<CardHeader>
				<CardTitle>API Usage</CardTitle>
				<CardDescription>Monitor your API consumption</CardDescription>
			</CardHeader>
			<CardContent>
				<div class="space-y-4">
					<div>
						<div class="mb-1 flex justify-between text-sm">
							<span>OpenAI</span>
							<span>75%</span>
						</div>
						<div class="h-2 w-full rounded-full bg-secondary">
							<div class="h-2 rounded-full bg-primary" style="width: 75%"></div>
						</div>
					</div>
					<div>
						<div class="mb-1 flex justify-between text-sm">
							<span>Anthropic</span>
							<span>45%</span>
						</div>
						<div class="h-2 w-full rounded-full bg-secondary">
							<div class="h-2 rounded-full bg-primary" style="width: 45%"></div>
						</div>
					</div>
					<div>
						<div class="mb-1 flex justify-between text-sm">
							<span>Stability AI</span>
							<span>20%</span>
						</div>
						<div class="h-2 w-full rounded-full bg-secondary">
							<div class="h-2 rounded-full bg-primary" style="width: 20%"></div>
						</div>
					</div>
				</div>
			</CardContent>
			<CardFooter>
				<Button variant="outline" size="sm" class="w-full">View Detailed Usage</Button>
			</CardFooter>
		</Card>
	</section>
</div>
