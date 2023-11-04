interface Meal {
	idMeal: string;
	strMeal: string;
	strDrinkAlternate: string | null;
	strCategory: string;
	strArea: string;
	strInstructions: string;
	strMealThumb: string;
	/**
	 * @description The tags separated by comma.
	 */
	strTags: string | null;
	strYoutube: string;
	strIngredient1: string | null;
	strIngredient2: string | null;
	strIngredient3: string | null;
	strIngredient4: string | null;
	strIngredient5: string | null;
	strIngredient6: string | null;
	strIngredient7: string | null;
	strIngredient8: string | null;
	strIngredient9: string | null;
	strIngredient10: string | null;
	strIngredient11: string | null;
	strIngredient12: string | null;
	strIngredient13: string | null;
	strIngredient14: string | null;
	strIngredient15: string | null;
	strIngredient16: string | null;
	strIngredient17: string | null;
	strIngredient18: string | null;
	strIngredient19: string | null;
	strIngredient20: string | null;
	strMeasure1: string | null;
	strMeasure2: string | null;
	strMeasure3: string | null;
	strMeasure4: string | null;
	strMeasure5: string | null;
	strMeasure6: string | null;
	strMeasure7: string | null;
	strMeasure8: string | null;
	strMeasure9: string | null;
	strMeasure10: string | null;
	strMeasure11: string | null;
	strMeasure12: string | null;
	strMeasure13: string | null;
	strMeasure14: string | null;
	strMeasure15: string | null;
	strMeasure16: string | null;
	strMeasure17: string | null;
	strMeasure18: string | null;
	strMeasure19: string | null;
	strMeasure20: string | null;
	strSource: string;
	strImageSource: string | null;
	strCreativeCommonsConfirmed: string | null;
	dateModified: string | null;
}

interface FormatedMeal {
	id: string;
	name: string;
	category: string;
	area: string;
	instructions: string;
	image: string;
	tags: string[];
	youtube: string;
	ingredients: string[];
	measures: string[];
	source: string;
	imageSource: string | null;
	creativeCommonsConfirmed: string | null;
	dateModified: string | null;
}

interface APIResponse {
	meals: Meal[];
}

const formatMeal = (meal: Meal): FormatedMeal => {
	const ingredients = Object.entries(meal)
		.filter(([key, value]) => key.startsWith('strIngredient') && value !== null && value.trim())
		.map(([, value]) => value);
	const measures = Object.entries(meal)
		.filter(([key, value]) => key.startsWith('strMeasure') && value !== null && value.trim())
		.map(([, value]) => value);

	return {
		id: meal.idMeal,
		name: meal.strMeal,
		category: meal.strCategory,
		area: meal.strArea,
		instructions: meal.strInstructions,
		image: meal.strMealThumb,
		tags: meal.strTags?.split(',') ?? [],
		youtube: meal.strYoutube,
		ingredients,
		measures,
		source: meal.strSource,
		imageSource: meal.strImageSource,
		creativeCommonsConfirmed: meal.strCreativeCommonsConfirmed,
		dateModified: meal.dateModified
	};
};

async function SearchByName(name: string): Promise<FormatedMeal[]> {
	const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
	const data: APIResponse = await response.json();

	return data.meals?.map(formatMeal) ?? [];
}

async function SearchById(id: string): Promise<FormatedMeal> {
	const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
	const data: APIResponse = await response.json();

	return data.meals?.map(formatMeal)[0];
}

async function SearchRandom(): Promise<FormatedMeal> {
	const response = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);

	if (!response.ok) {
		console.error(response);
		throw new Error('Failed to fetch random meal');
	}

	const data: APIResponse = await response.json();

	return data.meals?.map(formatMeal)[0];
}

interface MealCategory {
	idCategory: string;
	strCategory: string;
	strCategoryThumb: string;
	strCategoryDescription: string;
}

export { SearchByName, SearchById, SearchRandom };
export type { Meal, MealCategory, FormatedMeal };
