import { SearchRandom, type FormatedMeal } from '$lib/API/TheMealDB';

export async function load() {
	// This is a shitty solution, but TheMealDB is a shitty API.
	const tenRandomMeals = await Promise.allSettled(
		Array.from({ length: 20 }, () => SearchRandom())
	).then((results) => {
		return results
			.filter<PromiseFulfilledResult<FormatedMeal>>(
				(result): result is PromiseFulfilledResult<FormatedMeal> => result.status === 'fulfilled'
			)
			.map((result) => result.value);
	});

	return {
		meals: tenRandomMeals
	};
}
