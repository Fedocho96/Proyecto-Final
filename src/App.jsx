import { useEffect, useState } from "react";
import Home from "./Screens/Home";
import CreateRecipe from "./Screens/CreateRecipe";
import RecipeHistory from "./Screens/RecipeHistory";

function App() {
  const [actualview, setActualView] = useState("Home");

  function changeview(id) {
    setActualView(id);
  }

  return (
    <div className="h-full flex flex-col justify-center items-center ">
      {actualview === "Home" && <Home changeview={changeview} />}
      {actualview === "create-recipe" && <CreateRecipe />}
      {actualview === "recipe-history" && <RecipeHistory />}
    </div>
  );
}

export default App;
