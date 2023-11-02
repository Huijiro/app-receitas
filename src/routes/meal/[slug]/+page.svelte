<script lang="ts">
	export let data;

	const { meal } = data;
</script>

<div class="lg:flex lg:mb-4">
	<div class="relative">
		<button class="absolute bottom-0 left-0 rounded-lg btn variant-filled-surface m-2">
			{meal.category}
		</button>
		<img class="w-screen lg:w-64 h-64 object-cover rounded-lg" src={meal.image} alt={meal.name} />
	</div>
	<div class="lg:flex-grow lg:ml-4">
		<div class="my-4">
			<div class="flex justify-between">
				<h1 class="h1">{meal.name}</h1>
				<h2 class="h2">{meal.area}</h2>
			</div>
		</div>

		{#if meal.tags.length > 0}
			<hr />
			<div class="flex flex-wrap gap-2 my-4">
				{#each meal.tags as tag}
					<div class="chip variant-ghost">{tag}</div>
				{/each}
			</div>
		{/if}
	</div>
</div>

<hr />

<div class="my-4">
	<h3 class="h3">Ingredients</h3>
	<ul class="list">
		{#each meal.ingredients as ingredient, index}
			<li class="list-option">{ingredient} - {meal.measures[index]}</li>
		{/each}
	</ul>
</div>

<hr />

<div class="my-4">
	<h3 class="h3 mb-2">Instructions</h3>
	<p>{meal.instructions}</p>
</div>

<hr />

{#if meal.youtube}
	<div>
		<h3 class="h3 mb-2">Video</h3>
		<iframe
			title="Video of {meal.name}"
			class="w-full aspect-video"
			src={'https://www.youtube.com/embed/' + meal.youtube.split('=')[1]}
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		/>
	</div>
{/if}
