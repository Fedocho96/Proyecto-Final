import React from "react";
import { useState } from "react";
import IngredientList from "../Components/IngredientList";
import RecipeBuilder from "../Components/RecipeBuilder";

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
    <section className="min-h-dvh h-screen w-full flex items-center justify-center gap-3 ">
      {/*Tarjeta de seleccion de ingredientes*/}
      <IngredientList addingredient={addingredient} />

      {/*Tarjeta de seleccion de cantidad*/}
      <RecipeBuilder newrecipe={newrecipe} setNewRecipe={setNewRecipe} />

      {/*Tarjeta de seleccion de nombre y creacion de receta*/}
      <div className="border border-red-400 h-4/5 w-1/5 md:w-2/6 lg:mx-10 md:mx-7"></div>
    </section>
  );
};

export default CreateRecipe;
