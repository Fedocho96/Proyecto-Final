import React from "react";
import { useState } from "react";
import IngredientList from "../Components/IngredientList";
import RecipeBuilder from "../Components/RecipeBuilder";
import RecipeSummary from "../Components/RecipeSummary";

const CreateRecipe = () => {
  //estados de ingredientes seleccionados
  const [newrecipe, setNewRecipe] = useState([]); // Nueva receta

  const addingredient = (ingredient) => {
    setNewRecipe((prevRecipe) => {
      if (prevRecipe.some((item) => item.id === ingredient.id))
        return prevRecipe;
      return [...prevRecipe, { ...ingredient, cantidad: 1 }];
    });
  };

  return (
    <section className="h-full w-full flex flex-col items-center justify-center gap-3 ">
      <h1 className="text-white text-8xl mt-3 mb-2">
        Comienza a crear tu{" "}
        <a className=" text-orange-400 font-extrabold">RECETA</a>
      </h1>
      <div className="h-screen w-full flex justify-around gap-3  ">
        {/*Tarjeta de seleccion de ingredientes*/}
        <IngredientList addingredient={addingredient} />

        {/*Tarjeta de seleccion de cantidad*/}
        <RecipeBuilder newrecipe={newrecipe} setNewRecipe={setNewRecipe} />
      </div>

      {/*Tarjeta de seleccion de nombre y creacion de receta*/}
      <div className="h-screen w-full flex justify-center">
        <RecipeSummary newrecipe={newrecipe} setNewRecipe={setNewRecipe} />
      </div>
    </section>
  );
};

export default CreateRecipe;
