import React from "react";

const RecipeCard = ({ receta }) => {
  return (
    <div className="flex flex-col bg-gray-300/40 gap-2 overflow-hidden h-full w-full scrollbar-thin scrollbar-thumb-white/50 scrollbar-track-black/30 rounded-lg shadow-lg overflow-y-auto py-1">
      {receta.ingredientes.map((ingrediente) => (
        <div
          key={ingrediente.id}
          className="bg-white py-2 rounded-lg shadow-md flex flex-col items-center justify-between transform transition-transform hover:scale-105 flex-shrink-0 w-full"
        >
          <p className="text-gray-800 font-medium text-lg text-center">
            {ingrediente.name}
          </p>
          <div className="text-gray-800 font-medium text-lg text-center">
            Cantidad: <span className="text-xl">{ingrediente.cantidad}</span>
          </div>
          <p className="text-black-600 text-center text-xl">
            vn. = {ingrediente.id}
          </p>
        </div>
      ))}
    </div>
  );
};

export default RecipeCard;
