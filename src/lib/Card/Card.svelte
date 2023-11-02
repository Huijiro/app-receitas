<script lang="ts">
	import { goto } from '$app/navigation';
	import type { FormatedMeal } from '$lib/API/TheMealDB';

	export let meal: FormatedMeal;
</script>

<a class="card card-hover lg:w-64 cursor-pointer" href={`meal/${meal.id}`}>
	<header class="card-header">
		<img src={meal.image} alt={meal.name} />
	</header>
	<section class="p-4">
		<h6>{meal.area}</h6>
		<h3>{meal.name}</h3>
	</section>
	<footer class="card-footer flex justify-between">
		<span class="badge variant-ghost-primary">{meal.area}</span>
		<span class="badge variant-ghost">{meal.category}</span>
	</footer>
</a>
