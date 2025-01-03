import React from "react";

const RecipeBuilder = ({ newrecipe, setNewRecipe }) => {
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

  console.log(newrecipe);
  return (
    <div className=" bg-slate-300/20 rounded-xl h-screen w-2/5 md:w-2/6 lg:mx-10 md:mx-7 ">
      <div className=" rounded-xl h-auto flex flex-col items-center justify-center p-2">
        <h1 className="text-white text-3xl font-semibold pt-2"> CANTIDADES </h1>
      </div>

      <ul className="mt-6 space-y-4 w-full ">
        {newrecipe.map((ingredient) => (
          <li
            key={ingredient.id}
            className="bg-gray-100 p-4 mx-2 w-auto rounded-md shadow-sm  text-black text-lg flex justify-between items-center"
          >
            <img
              src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
              alt={ingredient.name}
              className="w-12 h-12 rounded-full mr-4"
            />
            <p>{ingredient.name} </p>
            <p>vn. = {ingredient.id}</p>
            <button
              onClick={() => resqty(ingredient)}
              className="border border-green-950 bg-green-800 hover:bg-green-600 h-8 min-w-8 text-white rounded-xl"
            >
              <p className="mb-1">-</p>
            </button>
            <p>{ingredient.cantidad}</p>
            <button
              onClick={() => addqty(ingredient)}
              className="border border-green-950 bg-green-800 hover:bg-green-600 h-8 min-w-8 text-white rounded-xl"
            >
              <p className="mb-1">+</p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeBuilder;
