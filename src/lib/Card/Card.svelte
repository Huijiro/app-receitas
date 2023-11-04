<script lang="ts">
	import type { FormatedMeal } from '$lib/API/TheMealDB';

	export let meal: FormatedMeal;
</script>

<a class="card card-hover lg:w-44 w-44 cursor-pointer" href={`/meal/${meal.id}`}>
	<header class="card-header">
		<img class="w-44 aspect-square" src={meal.image + '/preview'} alt={meal.name} />
	</header>
	<section class="p-4 flex">
		<h3 class="">{meal.name}</h3>
	</section>
	<footer class="card-footer flex justify-between">
		<span class="badge variant-ghost-primary">{meal.area}</span>
		<span class="badge variant-ghost">{meal.category}</span>
	</footer>
</a>
