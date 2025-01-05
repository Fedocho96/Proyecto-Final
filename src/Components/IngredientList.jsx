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
    <div className=" h-5/6 w-full lg:w-2/5 flex flex-col items-center pt-5">
      <h1 className="text-white text-5xl font-semibold "> INGREDIENTES </h1>
      <h2 className="text-white text-3xl">Elige tus ingredientes</h2>
      <div className="mt-1 h-2 w-32 bg-orange-400 lg:-rotate-3" />

      <div className=" h-auto flex flex-col items-center justify-center p-2">
        <div className="flex justify-center items-center gap-2">
          <div className="flex flex-col mt-3">
            {/* Barra de busquedade ingredientes */}
            <div className="w-72 mb-1">
              <label
                htmlFor="queryInput"
                className="block mb-2 text-lg font-medium text-white"
              >
                Busca un ingrediente:
              </label>
              <input
                id="queryInput"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Escribe un ingrediente..."
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Dropdown para seleccionar tipo de filtro */}
            <div className="w-72 mb-4">
              <label
                htmlFor="sortDropdown"
                className="block mb-2 text-lg font-medium text-white"
              >
                Categorias:
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
            className="mt-4  bg-orange-500 hover:bg-orange-800 text-white font-bold py-2 px-6 rounded-md transition"
          >
            BUSCAR
          </button>
        </div>
      </div>

      {/* Error */}
      {error ? (
        <p className="text-red-500 mt-4 text-6xl">{error}</p>
      ) : (
<div className="h-5/6 w-full max-w-xl px-4 mb-4 overflow-y-auto scrollbar-thin scrollbar-thumb-white/50 scrollbar-track-black/30  rounded-lg shadow-lg">
  {/* Lista de ingredientes */}
  <ul className="mt-2 space-y-4 w-full flex flex-col items-center">
    {ingredients.map((ingredient) => (
      <li
        key={ingredient.id}
        className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center w-full transform transition-transform hover:scale-105"
      >
        <div className="flex items-center">
          <img
            src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
            alt={ingredient.name}
            className="w-14 h-14 rounded-full mr-4 border border-gray-200 shadow-sm"
          />
          <p className="text-gray-800 font-medium text-lg">{ingredient.name}</p>
        </div>
        <div className="flex items-center space-x-4">
          <p className="text-gray-600 text-sm">V.N: {ingredient.id}</p>
          <button
            onClick={() => addingredient(ingredient)}
            className="bg-green-600 hover:bg-green-500 text-white font-bold h-8 w-8 flex items-center justify-center rounded-full shadow-md"
          >
            +
          </button>
        </div>
      </li>
    ))}
  </ul>
</div>
      )}
    </div>
  );
};

export default IngredientList;
