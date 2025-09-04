<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-screen bg-neutral-50">
	<nav class="bg-white shadow-sm border-b border-neutral-200">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between items-center h-16">
				<div class="flex-shrink-0">
					<h1 class="text-2xl font-bold text-primary-600">Bodies by Gaby</h1>
					<p class="text-sm text-neutral-500">Building cores</p>
				</div>
				<div class="hidden md:block">
					<div class="ml-10 flex items-baseline space-x-4">
						<a href="/" class="text-primary-600 hover:text-primary-700 px-3 py-2 rounded-md text-sm font-medium">Home</a>
						<a href="/about" class="text-neutral-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">About Me</a>
						<a href="/vlog" class="text-neutral-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">Vlog</a>
						<a href="/contact" class="text-neutral-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
					</div>
				</div>
				<div class="md:hidden">
					<button class="text-neutral-400 hover:text-neutral-500 focus:outline-none focus:text-neutral-500" aria-label="Open mobile menu">
						<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</button>
				</div>
			</div>
		</div>
	</nav>

	<main>
		{@render children?.()}
	</main>

	<footer class="bg-neutral-800 text-neutral-300 py-8">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
			<p>&copy; 2024 Bodies by Gaby. Empowering mothers through core recovery.</p>
		</div>
	</footer>
</div>
