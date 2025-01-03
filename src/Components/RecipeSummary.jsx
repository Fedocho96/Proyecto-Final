import React from "react";

const RecipeSummary = ({ newrecipe, setNewRecipe }) => {
  console.log(newrecipe)
  return (
    <div className=" bg-slate-300/20 border border-red-400 rounded-xl h-4/5 w-1/5 md:w-2/6 lg:mx-10 md:mx-7 ">
      <div className="bg-orange-700 rounded-xl h-auto flex flex-col items-center justify-center p-2">
        <h1 className="text-white text-3xl font-semibold pt-2"> TU RECETA </h1>
        <input type="text" />
      </div>


      <div className="bg-slate-300/20 rounded-xl h-screen w-full flex flex-col items-center justify-center p-2">   
        <div className="flex flex-col items-center justify-center gap-2 h-4/5 w-full overflow-y-auto">
          {newrecipe.map((ingredient) => (
            <div className="flex items-center justify-between w-full bg-slate-300/40 rounded-xl p-2">
              <div className="flex items-center gap-2">
                <p className="text-white">{ingredient.name}</p>
                <p className="text-white">{ingredient.cantidad}</p>
              </div>
              <button
                className="bg-red-400 rounded-xl p-1"
                onClick={() =>
                  setNewRecipe(
                    newrecipe.filter((item) => item.id !== ingredient.id)
                  )
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>

        <button className="bg-orange-700 rounded-xl p-2 w-4/5">
          <p className="text-white">Crear receta</p>
        </button>
    </div>
    </div>
  );
};

export default RecipeSummary;
