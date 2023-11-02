<script lang="ts">
	import { goto } from '$app/navigation';

	export let placeholder = 'Yummy food...';

	let search: string = '';
</script>

<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
	<input
		bind:value={search}
		type="text"
		{placeholder}
		on:keydown={(e) => {
			if (e.key === 'Enter') {
				if (search) goto(`/search/${search}`);
			}
		}}
	/>
	<button
		class="variant-filled-primary"
		on:click={() => {
			if (search) goto(`/search/${search}`);
		}}>Search</button
	>
</div>
