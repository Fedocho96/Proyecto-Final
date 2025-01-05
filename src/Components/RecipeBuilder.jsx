import React from "react";

const RecipeBuilder = ({ newrecipe, setNewRecipe }) => {

  //funcion para añadir cantidad a un ingrediente
  const addqty = (ingredient) => {
    setNewRecipe((prevRecipe) => {
      return prevRecipe.map((item) => {
        if (item.id === ingredient.id) {
          return { ...item, cantidad: item.cantidad + 1 };
        }
        return item;
      });
    });
  };

  //funcion para restar cantidad a un ingrediente o eliminarlo de la lista
  const resqty = (ingredient) => {
    setNewRecipe((prevRecipe) => {
      return prevRecipe
        .map((item) => {
          if (item.id === ingredient.id && item.cantidad > 0) {
            return { ...item, cantidad: item.cantidad - 1 };
          }
          return item;
        })
        .filter((item) => item.cantidad > 0); // Filtra los items con cantidad mayor a 0 luego del map
    });
  };

  return (
    <div className=" h-5/6 w-full lg:w-2/5 flex flex-col items-center pt-5 ">
      <h1 className="text-white text-5xl font-semibold"> CANTIDAD </h1>
      <h2 className="text-white text-3xl text-center">
        Elige la cantidad de tus ingredientes
      </h2>
      <div className="mt-1 h-2 w-32 bg-orange-400 lg:-rotate-3" />

      {/*lista de ingredientes agregados para cambiar cantidades*/}
      <div className="h-5/6 w-full max-w-xl px-4 mb-4 mt-4 overflow-y-auto scrollbar-thin scrollbar-thumb-white/50 scrollbar-track-black/30  rounded-lg shadow-lg">
        <ul className="space-y-4 w-full flex flex-col items-center">
          {newrecipe.map((ingredient) => (
            <li
              key={ingredient.id}
              className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center w-full transform transition-transform hover:scale-105"
            >
              <div className="flex items-center gap-3 ">
                <img
                  src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
                  alt={ingredient.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <p className="text-gray-800 font-medium text-lg">{ingredient.name} </p>
                <p className="text-black-600 text-lg">vn. = {ingredient.id}</p>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() => resqty(ingredient)}
                  className="bg-green-600 hover:bg-green-500 text-white font-bold h-8 w-8 flex items-center justify-center rounded-full shadow-md"
                >
                  <p className="mb-1">-</p>
                </button>
                <p>{ingredient.cantidad}</p>
                <button
                  onClick={() => addqty(ingredient)}
                  className="bg-green-600 hover:bg-green-500 text-white font-bold h-8 w-8 flex items-center justify-center rounded-full shadow-md"
                >
                  <p className="mb-1">+</p>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeBuilder;
