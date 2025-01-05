import { useEffect, useState } from "react";
import Home from "./Screens/Home";
import CreateRecipe from "./Screens/CreateRecipe";
import RecipeHistory from "./Screens/RecipeHistory";

function App() {
  //Estado que actualiza la vista actual
  const [actualview, setActualView] = useState("Home");

  //Función que cambia la vista actual
  function changeview(id) {
    setActualView(id);
  }

  return (
    <div className="h-full flex flex-col justify-center items-center  ">
      {actualview === "Home" && <Home changeview={changeview} />}
      {actualview === "create-recipe" && (
        <CreateRecipe changeview={changeview} />
      )}
      {actualview === "recipe-history" && (
        <RecipeHistory changeview={changeview} />
      )}
    </div>
  );
}

export default App;
