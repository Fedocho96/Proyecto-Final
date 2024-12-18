const API_KEY = "d099f99b3925437494a13eb387ff273c";

/**
 * Fetch a list of ingredients from Spoonacular API based on a query.
 * @param {string} query - The search term for the ingredient (e.g., 'tomato', 'chicken').
 * @param {number} number - The number of results to return (default is 10).
 * @returns {Promise<Array>} - Returns an array of ingredient objects.
 */
const fetchIngredients = async (query, sortType, number = 15) => {
  try {
    const baseUrl = "https://api.spoonacular.com/food/ingredients/search";
    const url = `${baseUrl}?apiKey=${API_KEY}&query=${query}&sort=${sortType}&number=${number}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();

    // Extract and return the ingredients list
    return data.results || [];
  } catch (error) {
    console.error("Failed to fetch ingredients:", error.message);
    return [];
  }
};

export default fetchIngredients;
