<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { Card } from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';
	import { createAuthenticatedEventSource } from '$lib/api';
	import { auth } from '$lib/stores/auth';
	import { goto } from '$app/navigation';

	interface Message {
		role: 'system' | 'user';
		content: string;
		timestamp: Date;
		isStreaming?: boolean;
	}

	let messages: Message[] = [
		{
			role: 'system',
			content: 'Welcome to AI Console v1.0.0',
			timestamp: new Date()
		},
		{
			role: 'system',
			content: 'Initializing systems...',
			timestamp: new Date()
		},
		{
			role: 'system',
			content: 'AI agent ready. How can I assist you today?',
			timestamp: new Date()
		}
	];

	let userInput = '';
	let consoleRef: HTMLDivElement | null = null;
	let eventSource: EventSource | null = null;
	let isFirstStreamMessage = true;
	let isAuthenticated = false;

	onMount(() => {
		// Check if user is authenticated
		const unsubscribe = auth.subscribe((state) => {
			isAuthenticated = state.isAuthenticated;
			if (!isAuthenticated) {
				goto('/auth/login');
			}
		});

		return unsubscribe;
	});

	function handleSubmit() {
		if (!userInput.trim() || !isAuthenticated) return;

		// Append the user's message to the console
		messages = [
			...messages,
			{
				role: 'user',
				content: userInput,
				timestamp: new Date()
			}
		];

		// Close existing connection if any
		if (eventSource) {
			eventSource.close();
		}

		isFirstStreamMessage = true;

		// Create an authenticated EventSource connection
		const apiUrl = `/api/stream?message=${encodeURIComponent(userInput)}`;
		eventSource = createAuthenticatedEventSource(apiUrl);

		// Listen for incoming messages
		eventSource.onmessage = (event) => {
			const data = JSON.parse(event.data);

			if (isFirstStreamMessage) {
				// Add a new message for the first response
				messages = [
					...messages,
					{
						role: 'system',
						content: data.step,
						timestamp: new Date(data.timestamp * 1000),
						isStreaming: true
					}
				];
				isFirstStreamMessage = false;
			} else {
				// Update the last message for subsequent responses
				const lastMessageIndex = messages.length - 1;
				if (lastMessageIndex >= 0 && messages[lastMessageIndex].isStreaming) {
					const updatedMessages = [...messages];
					updatedMessages[lastMessageIndex] = {
						...updatedMessages[lastMessageIndex],
						content: data.step
					};
					messages = updatedMessages;
				}
			}
		};

		// If there's an error, log it and close the connection
		eventSource.onerror = (err) => {
			console.error('EventSource failed:', err);

			// Check if it's an authentication error
			if (err instanceof Event && (err.target as EventSource).readyState === EventSource.CLOSED) {
				// Add authentication error message
				messages = [
					...messages,
					{
						role: 'system',
						content: 'Authentication failed. Please log in again.',
						timestamp: new Date()
					}
				];

				// Redirect to login page after a short delay
				setTimeout(() => {
					goto('/auth/login');
				}, 2000);
			}

			// Mark the last message as no longer streaming
			if (messages.length > 0) {
				const lastMessageIndex = messages.length - 1;
				if (messages[lastMessageIndex].isStreaming) {
					const updatedMessages = [...messages];
					updatedMessages[lastMessageIndex] = {
						...updatedMessages[lastMessageIndex],
						isStreaming: false
					};
					messages = updatedMessages;
				}
			}

			eventSource?.close();
		};

		// Clear the input
		userInput = '';
	}

	// Optional: Cleanup the EventSource when the component is destroyed
	onDestroy(() => {
		eventSource?.close();
	});

	// Scroll the console to the bottom on new messages
	$: if (consoleRef) {
		consoleRef.scrollTop = consoleRef.scrollHeight;
	}
</script>

<div class="flex h-screen flex-col bg-black p-4">
	<Card class="flex-1 overflow-hidden bg-zinc-900 text-white">
		<div bind:this={consoleRef} class="h-full overflow-y-auto p-4 font-mono">
			{#each messages as message}
				<div class="mb-2">
					<span class={cn('mr-2', message.role === 'system' ? 'text-green-400' : 'text-blue-400')}>
						{message.role === 'system' ? '>' : '$'}
					</span>
					<span class="text-sm text-gray-400">
						[{message.timestamp.toLocaleTimeString()}]
					</span>
					<span class="ml-2 text-white">
						{message.content}{message.isStreaming ? '▋' : ''}
					</span>
				</div>
			{/each}
		</div>
	</Card>

	<div class="mt-4">
		<form on:submit|preventDefault={handleSubmit} class="flex gap-2">
			<Input
				bind:value={userInput}
				placeholder="Type your message..."
				class="bg-zinc-900 text-white placeholder:text-gray-500"
			/>
			<Button type="submit" variant="outline" class="bg-zinc-800 text-white hover:bg-zinc-700">
				Send
			</Button>
		</form>
	</div>
</div>
