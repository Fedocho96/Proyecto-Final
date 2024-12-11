import React from "react";
import IngredientList from "../Components/IngredientList";

const CreateRecipe = () => {
  return (
    <section className="min-h-dvh h-screen w-full flex items-center justify-center gap-3 ">

        {/*Tarjeta de seleccion de ingredientes*/}
      <IngredientList/>

        {/*Tarjeta de seleccion de cantidad*/}
      <div className="border border-red-400 h-4/5 w-1/5 md:w-2/6 lg:mx-10  md:mx-7"></div>

        {/*Tarjeta de seleccion de nombre y creacon de receta*/}
      <div className="border border-red-400 h-4/5 w-1/5 md:w-2/6 lg:mx-10 md:mx-7"></div>

    </section>
  );
};

export default CreateRecipe;
