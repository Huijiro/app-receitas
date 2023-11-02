<script lang="ts">
	import Card from '$lib/Card/Card.svelte';

	export let data;
</script>

<div class="flex flex-wrap gap-3 lg:justify-center">
	{#each data.meals as meal}
		<Card {meal} />
	{/each}
</div>
