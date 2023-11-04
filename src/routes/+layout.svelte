<script lang="ts">
	import '../app.postcss';
	import Navigation from '$lib/Navigation/Navigation.svelte';
	import NavigationButton from '$lib/Navigation/NavigationButton.svelte';
	import { AppBar, AppShell, LightSwitch, initializeStores } from '@skeletonlabs/skeleton';
	import { afterNavigate, goto } from '$app/navigation';
	import Search from '$lib/Search/Search.svelte';

	afterNavigate((params) => {
		const isNewPage: boolean = params.from?.route.id !== params.to?.route.id;
		const elemPage = document.querySelector('#page');
		if (isNewPage && elemPage !== null) {
			elemPage.scrollTop = 0;
		}
	});

	initializeStores();
</script>

<svelte:head>
	<title>Recipe App</title>
	<meta property="description" content="Recipe App made by Huijiro" />
</svelte:head>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
			<svelte:fragment slot="lead">
				<div class="flex">
					<NavigationButton />
					<nobr class="h1 font-bold light:gradient-heading dark:gradient-heading-dark"
						><a href="/"> Recipe App </a></nobr
					>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch />
			</svelte:fragment>
			<Search />
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<Navigation />
	</svelte:fragment>
	<div class="p-4">
		<slot />
	</div>
</AppShell>
