const API_KEY = "d099f99b3925437494a13eb387ff273c";

//Función que obtiene los ingredientes de la API
const fetchIngredients = async (query, sortType, number = 15) => {
  try {
    const baseUrl = "https://api.spoonacular.com/food/ingredients/search";
    const url = `${baseUrl}?apiKey=${API_KEY}&query=${query}&sort=${sortType}&number=${number}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();

    // extrae los resultados de la respuesta
    return data.results || [];
  } catch (error) {
    console.error("Failed to fetch ingredients:", error.message);
    return [];
  }
};

export default fetchIngredients;
