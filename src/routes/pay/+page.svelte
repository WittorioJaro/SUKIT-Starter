<script lang="ts">
	import { Check } from 'lucide-svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import {
		Card,
		CardContent,
		CardDescription,
		CardFooter,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card';
	import Switch from '@/components/ui/switch/switch.svelte';

	let isAnnual: boolean = false;

	interface Plan {
		name: string;
		description: string;
		monthlyPrice: number;
		annualPrice: number;
		features: string[];
		popular?: boolean;
	}

	const plans: Plan[] = [
		{
			name: 'Basic',
			description: 'Essential features for individuals',
			monthlyPrice: 9,
			annualPrice: 90,
			features: ['1 user', 'Up to 10 projects', '5GB storage', 'Basic support', 'Core features']
		},
		{
			name: 'Pro',
			description: 'Perfect for small teams',
			monthlyPrice: 29,
			annualPrice: 290,
			features: [
				'5 users',
				'Up to 50 projects',
				'50GB storage',
				'Priority support',
				'Advanced features',
				'Custom integrations'
			],
			popular: true
		},
		{
			name: 'Enterprise',
			description: 'For large organizations',
			monthlyPrice: 99,
			annualPrice: 990,
			features: [
				'Unlimited users',
				'Unlimited projects',
				'500GB storage',
				'24/7 support',
				'Advanced features',
				'Custom integrations',
				'Advanced security',
				'Custom reporting'
			]
		}
	];
</script>

<section class="mx-auto w-full max-w-6xl px-4 py-16">
	<div class="mb-12 text-center">
		<h2 class="mb-4 text-3xl font-bold tracking-tight">Simple, Transparent Pricing</h2>
		<p class="mb-4 mt-2 text-muted-foreground">Choose the plan that's right for you</p>
		<div class="mb-4 mt-6 flex items-center justify-center gap-2">
			<span class={isAnnual ? 'text-muted-foreground' : ''}>Monthly</span>
			<Switch bind:checked={isAnnual} aria-label="Toggle annual pricing" />
			<span class={!isAnnual ? 'text-muted-foreground' : ''}>
				Annual <span class="text-sm text-primary">(Save 20%)</span>
			</span>
		</div>
	</div>

	<div class="mt-24 grid gap-6 md:grid-cols-3">
		{#each plans as plan (plan.name)}
			<Card
				class="relative flex flex-col {plan.popular ? 'scale-105 border-primary shadow-lg' : ''}"
			>
				{#if plan.popular}
					<span
						class="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-sm text-primary-foreground"
					>
						Most Popular
					</span>
				{/if}
				<CardHeader>
					<CardTitle>{plan.name}</CardTitle>
					<CardDescription>{plan.description}</CardDescription>
				</CardHeader>
				<CardContent class="grid gap-4">
					<div class="text-3xl font-bold">
						${isAnnual ? plan.annualPrice : plan.monthlyPrice}
						<span class="text-sm font-normal text-muted-foreground">
							/{isAnnual ? 'year' : 'month'}
						</span>
					</div>
					<ul class="grid gap-2 text-sm">
						{#each plan.features as feature}
							<li class="flex items-center gap-2">
								<Check class="h-4 w-4 text-primary" />
								{feature}
							</li>
						{/each}
					</ul>
				</CardContent>
				<CardFooter class="mt-auto pt-4">
					<Button variant={plan.popular ? 'default' : 'outline'} class="w-full">Get Started</Button>
				</CardFooter>
			</Card>
		{/each}
	</div>
</section>
