<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
	let mobileMenuOpen = $state(false);

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-screen bg-neutral-50">
	<nav class="bg-white shadow-sm border-b border-neutral-200">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between items-center h-16">
				<div class="flex-shrink-0">
					<h1 class="text-xl sm:text-2xl font-bold text-primary-600">Bodies by Gaby</h1>
					<p class="text-xs sm:text-sm text-neutral-500">Building cores</p>
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
					<button 
						onclick={toggleMobileMenu}
						class="text-neutral-400 hover:text-neutral-500 focus:outline-none focus:text-neutral-500 p-2" 
						aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
					>
						{#if mobileMenuOpen}
							<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
							</svg>
						{:else}
							<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						{/if}
					</button>
				</div>
			</div>
		</div>

		<!-- Mobile menu -->
		{#if mobileMenuOpen}
			<div class="md:hidden bg-white border-t border-neutral-200">
				<div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
					<a 
						href="/" 
						onclick={closeMobileMenu}
						class="text-primary-600 hover:text-primary-700 block px-3 py-2 rounded-md text-base font-medium"
					>
						Home
					</a>
					<a 
						href="/about" 
						onclick={closeMobileMenu}
						class="text-neutral-600 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium"
					>
						About Me
					</a>
					<a 
						href="/vlog" 
						onclick={closeMobileMenu}
						class="text-neutral-600 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium"
					>
						Vlog
					</a>
					<a 
						href="/contact" 
						onclick={closeMobileMenu}
						class="text-neutral-600 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium"
					>
						Contact
					</a>
				</div>
			</div>
		{/if}
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
