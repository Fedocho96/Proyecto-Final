import React from "react";
import { useState, useEffect } from "react";

const RecipeSummary = ({ newrecipe, setNewRecipe }) => {
  const [valorntotal, setValorntotal] = useState(0); //Estado para almacenar el valor nutricional total
  const [recipeName, setRecipeName] = useState(""); // Estado para almacenar el nombre de la receta

  // Actualizar el valor nutricional total cada vez que se actualice la lista de ingredientes
  useEffect(() => {
    const valortotal = newrecipe.reduce(
      (acc, ingredient) => acc + ingredient.id,
      0
    );
    setValorntotal(valortotal);
  }, [newrecipe]);

  // Eliminar un ingrediente de la lista
  const deleteIngredient = (ingredientToDelete) => {
    setNewRecipe((prevRecipe) => {
      return prevRecipe.filter((item) => item.id !== ingredientToDelete.id); // Elimina el ingrediente por su ID
    });
  };

  //LocalStorage ----------------
  const añadirReceta = () => {
    //Traemos las recetas guardadas en localStorage
    let misRecetas = JSON.parse(localStorage.getItem("recetas")) || [];

    // Crear un objeto con el nombre de la receta y los ingredientes
    const recetaCompleta = {
      nombre: recipeName,
      valorn: valorntotal,
      ingredientes: newrecipe,
    };

    // Agregar la receta al array de recetas
    misRecetas.push(recetaCompleta);

    // Guardar nuevamente en localStorage
    localStorage.setItem("recetas", JSON.stringify(misRecetas));

    // Limpiar el estado del nombre después de guardar
    setRecipeName("");
  };

  return (
    <div className=" rounded-xl h-full w-4/5 flex flex-col items-center">
      <div className="rounded-xl h-auto flex flex-col items-center justify-center text-center p-2">
        <h1 className="text-white text-7xl font-semibold">
          Tu <a className="text-orange-400 font-extrabold ">RECETA</a>
        </h1>
        <h2 className="text-white text-3xl ">Elige el nombre para tu receta</h2>
        <div className="mt-1 h-2 w-44 bg-orange-400 lg:-rotate-1" />
      </div>

      <div className="flex justify-center items-center gap-1">
        <div className="flex justify-center items-center gap-2">
          <div className="w-72 mb-1">
            <input
              id="recipeName"
              type="text"
              value={recipeName}
              onChange={(e) => setRecipeName(e.target.value)} // Actualiza el nombre de la receta
              placeholder="Escribe el nombre de tu receta..."
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
        </div>

        <div className="h-auto flex items-center justify-center p-2 mt-1">
          <p className="text-white text-2xl flex items-center justify-center text-center ">
            El valor nutricional de tu receta es: {valorntotal}
          </p>
        </div>
      </div>

      {/*carousel de ingredientes en la lista de creacion de receta*/}

      <div className="relative h-4/5 w-full overflow-hidden rounded-lg shadow-lg">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-r-lg z-10"
          onClick={() =>
            (document.querySelector(".carousel").scrollLeft -= 200)
          }
        >
          ‹
        </button>
        <div className="carousel h-full overflow-x-auto scroll-smooth scrollbar-hide flex gap-x-4 justify-start items-center">
          {newrecipe.map((ingredient) => (
            <div
              key={ingredient.id}
              className="bg-white h-4/5 p-4 rounded-lg shadow-md flex flex-col items-center justify-between transform transition-transform hover:scale-105 flex-shrink-0 w-48"
            >
              <img
                src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
                alt={ingredient.name}
                className="w-24 h-24 rounded-full mb-3"
              />
              <p className="text-gray-800 font-medium text-lg text-center">
                {ingredient.name}
              </p>
              <p className="text-gray-800 font-medium text-lg text-center">
                Cantidad:
                <p className="text-xl">{ingredient.cantidad}</p>
              </p>
              <p className="text-black-600 text-center text-xl">
                vn. = {ingredient.id}
              </p>
              <div className="flex items-center space-x-4 mt-2">
                <button
                  className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 flex items-center justify-center rounded-full shadow-md"
                  onClick={() => deleteIngredient(ingredient)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-l-lg z-10"
          onClick={() =>
            (document.querySelector(".carousel").scrollLeft += 200)
          }
        >
          ›
        </button>
      </div>

      {/*------------------*/}

      <button
        onClick={añadirReceta}
        className="my-5 bg-orange-500 hover:bg-orange-800 text-white font-bold py-2 px-6 rounded-md transition"
      >
        CREAR RECETA
      </button>
    </div>
  );
};

export default RecipeSummary;
