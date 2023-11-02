import { SearchRandom } from '$lib/API/TheMealDB';

export async function load() {
	const tenRandomMeals = await Promise.all(Array.from({ length: 50 }, () => SearchRandom()));

	return {
		meals: tenRandomMeals
	};
}
