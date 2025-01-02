import React from "react";
import { useState, useEffect } from "react";
import fetchIngredients from "../Apifunctions/fetchIngredients";

const IngredientList = ({ addingredient }) => {
  //estados de busqueda de ingredientes
  const [query, setQuery] = useState(""); // Búsqueda por texto
  const [sortType, setSortType] = useState("name"); // Tipo de filtro
  const [ingredients, setIngredients] = useState([]); // Resultados de búsqueda
  const [error, setError] = useState("");

  // Opciones para ordenar los ingredientes
  const sortOptions = [
    { id: "popularity", label: "Popularity" },
    { id: "calories", label: "Calories" },
    { id: "carbohydrates", label: "Carbohydrates" },
    { id: "cholesterol", label: "Cholesterol" },
    { id: "protein", label: "Protein" },
  ];

  // Fetch de ingredientes con query y filtro
  const searchIngredients = async () => {
    if (!query) return; // Evita búsquedas vacías
    setError("");
    try {
      const data = await fetchIngredients(query, sortType); // Pasa query y filtro
      if (data.length > 0) {
        setIngredients([]);
        setIngredients(data);
      } else {
        setError("No ingredients found!");
      }
    } catch (err) {
      setError("Failed to fetch ingredients.");
    }
  };

  return (
    <div className=" bg-slate-300/20 border border-red-400 rounded-xl h-4/5 w-1/5 md:w-2/6 lg:mx-10 md:mx-7 ">
      <div className="bg-orange-700 rounded-xl h-auto flex flex-col items-center justify-center p-2">
        <h1 className="text-white text-3xl font-semibold pt-2">
          {" "}
          INGREDIENTES{" "}
        </h1>

        <div className="flex justify-center items-center gap-2">
          <div className="flex flex-col">
            {/* Barra de busquedade ingredientes */}
            <div className="w-72 mb-1">
              <label
                htmlFor="queryInput"
                className="block mb-2 text-lg font-medium text-white"
              >
                Search Ingredient:
              </label>
              <input
                id="queryInput"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type an ingredient..."
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Dropdown para seleccionar tipo de filtro */}
            <div className="w-72 mb-4">
              <label
                htmlFor="sortDropdown"
                className="block mb-2 text-lg font-medium text-white"
              >
                Sort by:
              </label>
              <select
                id="sortDropdown"
                value={sortType}
                onChange={(e) => setSortType(e.target.value)}
                className="block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Botón de búsqueda */}
          <button
            onClick={searchIngredients}
            className="mt-4  bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md transition"
          >
            Search
          </button>
        </div>
      </div>

      {/* Error */}
      {error ? (
        <p className="text-red-500 mt-4">{error}</p>
      ) : (
        <div className="h-4/6 overflow-y-auto mx-2 scrollbar-none">
          {/* Lista de ingredientes */}
          <ul className="mt-6 space-y-4 w-full ">
            {ingredients.map((ingredient) => (
              <li
                key={ingredient.id}
                className="bg-gray-100 p-4 mx-2 rounded-md shadow-sm  text-black text-lg w-full flex justify-between items-center"
              >
                <img
                  src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
                  alt={ingredient.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <p>{ingredient.name} </p>
                <p>valor n. = {ingredient.id}</p>
                <button
                  onClick={() => addingredient(ingredient)}
                  className="border border-green-950 bg-green-800 hover:bg-green-600 h-8 min-w-8 text-white rounded-xl"
                >
                  <p className="mb-1">+</p>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default IngredientList;
