import { SearchById } from '$lib/API/TheMealDB.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const meal = await SearchById(params.slug);

	if (!meal) {
		throw error(404, 'Meal not found');
	}

	return {
		meal
	};
}
