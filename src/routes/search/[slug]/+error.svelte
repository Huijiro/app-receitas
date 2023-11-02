<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="flex justify-center">
	<h1 class="h1">Meal <span class="text-primary-500">{$page.error?.cause}</span> not found.</h1>
</div>
