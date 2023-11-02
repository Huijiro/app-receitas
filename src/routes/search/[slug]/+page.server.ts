import { SearchByName } from '$lib/API/TheMealDB.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const meals = await SearchByName(params.slug);

	if (meals.length === 0) {
		throw error(404, {
			message: `Meal not found`,
			cause: `${params.slug}`
		});
	}

	return {
		meals
	};
}
