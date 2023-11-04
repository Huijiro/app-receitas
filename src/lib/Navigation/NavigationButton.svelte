<script>
	import { getDrawerStore } from '@skeletonlabs/skeleton';

	const navigationStore = getDrawerStore();
</script>

<button
	aria-label="Navigation Hamburguer Button"
	class="btn btn-sm"
	on:click={() => navigationStore.open()}
>
	<span>
		<svg viewBox="0 0 100 80" class="fill-token w-8 h-8">
			<rect width="100" height="20" />
			<rect y="30" width="100" height="20" />
			<rect y="60" width="100" height="20" />
		</svg>
	</span>
</button>
