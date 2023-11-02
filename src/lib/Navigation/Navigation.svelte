<script>
	import { Drawer, getDrawerStore } from '@skeletonlabs/skeleton';

	const navigationStore = getDrawerStore();
</script>

<Drawer width="max-content">
	<div class="flex justify-end px-4 pt-4">
		<button
			class="btn btn-sm variant-filled font-extrabold"
			on:click={() => navigationStore.close()}>✕</button
		>
	</div>
	<nav class="list-nav p-4 w-64">
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/about">About</a></li>
		</ul>
	</nav>
</Drawer>
