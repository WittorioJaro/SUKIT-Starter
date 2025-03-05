<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { Loader2 } from 'lucide-svelte';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Switch } from '$lib/components/ui/switch';
	import { Input } from '$lib/components/ui/input';
	import { cn } from '$lib/utils';

	interface Message {
		id: string;
		content: string;
		isStreaming?: boolean;
		isToolCall?: boolean;
		toolName?: string;
	}

	let messages = $state<Message[]>([]);
	let isStreaming = $state(false);
	let autopilot = $state(false);
	let userInput = $state('');
	let inputRef: HTMLInputElement | null;
	let showInput = $state(false);
	let initComplete = $state(false);
	let isExpanded = $state(false);

	$effect(() => {
		console.log('State changed:', { messages, isStreaming, autopilot, showInput, initComplete });
	});

	// Add effect to handle autopilot toggle
	$effect(() => {
		if (initComplete && !isStreaming && !autopilot) {
			isExpanded = true;
		}
	});

	function handleUserInput(e: KeyboardEvent) {
		if (e.key === 'Enter' && userInput.trim()) {
			isExpanded = true;
			messages = [
				...messages,
				{
					id: crypto.randomUUID(),
					content: userInput,
					isStreaming: false
				}
			];
			userInput = '';
		}
	}

	// Simulate streaming text for the greeting
	onMount(() => {
		console.log('Component mounted');
		const greetingText =
			'Welcome to ContentNexus AI. Your personal content creation assistant is ready to help with newsletters and Twitter threads.';
		let currentText = '';
		let index = 0;

		isStreaming = true;
		messages = [{ id: 'greeting', content: '', isStreaming: true }];

		const streamingInterval = setInterval(() => {
			if (index < greetingText.length) {
				currentText += greetingText[index];
				messages = [{ id: 'greeting', content: currentText, isStreaming: true }];
				index++;
			} else {
				clearInterval(streamingInterval);
				isStreaming = false;
				messages = [{ id: 'greeting', content: currentText, isStreaming: false }];

				// After greeting, simulate a tool call
				setTimeout(() => {
					messages = [
						...messages,
						{
							id: 'tool-call',
							content: '',
							isToolCall: true,
							toolName: 'content.initialize'
						}
					];

					// After 2 seconds, complete the tool call and add a new message
					setTimeout(() => {
						const systemMessage = {
							id: 'system-message',
							content: '',
							isStreaming: true
						};

						messages = [...messages.filter((m) => m.id !== 'tool-call'), systemMessage];

						const systemText =
							'Content engine initialized. Ready to create newsletters and Twitter threads. What would you like to create today?';
						let sysIndex = 0;
						let sysCurrentText = '';

						const sysStreamingInterval = setInterval(() => {
							if (sysIndex < systemText.length) {
								sysCurrentText += systemText[sysIndex];
								messages = messages.map((m) =>
									m.id === 'system-message' ? { ...m, content: sysCurrentText } : m
								);
								sysIndex++;
							} else {
								clearInterval(sysStreamingInterval);
								messages = messages.map((m) =>
									m.id === 'system-message' ? { ...m, isStreaming: false } : m
								);
								showInput = true;
								initComplete = true;
							}
						}, 30);
					}, 2000);
				}, 1000);
			}
		}, 30);

		return () => clearInterval(streamingInterval);
	});

	$effect(() => {
		if (!autopilot && showInput && inputRef && initComplete) {
			inputRef.focus();
		}
	});
</script>

<Card class="overflow-hidden border-slate-800 bg-black">
	<CardHeader
		class="flex flex-row items-center justify-between border-b border-slate-800 bg-slate-900 px-4 py-3"
	>
		<CardTitle class="flex items-center text-sm font-medium text-slate-200">
			<div class="mr-2 h-3 w-3 rounded-full bg-green-500"></div>
			Terminal
		</CardTitle>
		{#if initComplete}
			<div class="flex items-center gap-2">
				<span class="text-xs text-slate-400">Autopilot</span>
				<Switch bind:checked={autopilot} />
			</div>
		{/if}
	</CardHeader>
	<CardContent class="p-0">
		<div
			class={cn(
				'overflow-auto rounded-b-lg bg-black p-4 font-mono text-sm text-green-400 transition-[height] duration-500 ease-in-out',
				isExpanded ? 'h-[500px]' : 'h-[300px]'
			)}
		>
			{#each messages as message (message.id)}
				<div class="mb-2">
					{#if message.isToolCall}
						<div class="flex items-center text-yellow-400">
							<span class="mr-2 text-cyan-400">[contentbot]</span>
							<Loader2 class="mr-2 h-4 w-4 animate-spin" />
							<span>Calling tool: {message.toolName}</span>
						</div>
					{:else}
						<div
							class={cn(
								'flex',
								message.isStreaming &&
									'after:animate-blink after:inline-block after:h-4 after:w-2 after:bg-green-400 after:content-[""]'
							)}
						>
							<span class="mr-2 text-cyan-400"
								>[{message.id === 'greeting' || message.id === 'system-message'
									? 'contentbot'
									: 'user'}]</span
							>
							<span class="text-green-400">
								{message.id === 'greeting' || message.id === 'system-message' ? '$' : '>'}
								{message.content}
							</span>
						</div>
					{/if}
				</div>
			{/each}
			{#if showInput && !autopilot && initComplete}
				<div class="flex items-center">
					<span class="mr-2 text-cyan-400">[user]</span>
					<span class="text-green-400">{'>'}</span>
					<input
						bind:this={inputRef}
						bind:value={userInput}
						onkeydown={handleUserInput}
						class="ml-2 w-full border-none bg-transparent text-green-400 focus:outline-none"
						placeholder="Type your message..."
					/>
				</div>
			{/if}
		</div>
	</CardContent>
</Card>
