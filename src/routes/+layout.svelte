<script lang="ts">
	import '../app.postcss';
	import Navigation from '$lib/Navigation/Navigation.svelte';
	import NavigationButton from '$lib/Navigation/NavigationButton.svelte';
	import { AppBar, AppShell, LightSwitch, initializeStores } from '@skeletonlabs/skeleton';
	import { afterNavigate } from '$app/navigation';

	afterNavigate((params) => {
		const isNewPage: boolean = params.from?.route.id !== params.to?.route.id;
		const elemPage = document.querySelector('#page');
		if (isNewPage && elemPage !== null) {
			elemPage.scrollTop = 0;
		}
	});

	initializeStores();
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
			<svelte:fragment slot="lead">
				<NavigationButton />
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch />
			</svelte:fragment>
			<h1 class="h1 font-bold light:gradient-heading dark:gradient-heading-dark">Recipe App</h1>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<Navigation />
	</svelte:fragment>
	<div class="p-4">
		<slot />
	</div>
</AppShell>
