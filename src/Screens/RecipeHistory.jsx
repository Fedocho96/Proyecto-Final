import React from "react";
import { useState, useEffect } from "react";
import RecipeCard from "../Components/RecipeCard";

const RecipeHistory = ({ changeview }) => {
  const [recetas, setRecetas] = useState([]);

  const borrarreceta = (nombre) => {
    const nuevalista = recetas.filter((receta) => receta.nombre !== nombre);
    setRecetas(nuevalista);
    localStorage.setItem("recetas", JSON.stringify(nuevalista));
  };

  useEffect(() => {
    // Función para cargar las recetas desde localStorage
    const loadRecetas = () => {
      const listarecetas = JSON.parse(localStorage.getItem("recetas")) || [];
      setRecetas(listarecetas);
    };

    // Cargar recetas al iniciar el componente
    loadRecetas();

    // Agregar un event listener para escuchar los cambios en el localStorage
    const handleStorageChange = () => {
      loadRecetas(); // Recargar las recetas cada vez que se cambia el localStorage
    };

    window.addEventListener("storage", handleStorageChange);

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []); // Este useEffect solo se ejecuta al montar el componente.

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center gap-3">
      <h1 className="text-white text-7xl mt-5 mb-2">
        Mis <a className="text-orange-400 font-extrabold">RECETAS</a>
      </h1>

      <button
        onClick={() => changeview("create-recipe")}
        className="bg-orange-500 rounded-full py-2 px-3 text-white font-bold text-wrap text-2xl"
      >
        Crear Receta
      </button>

      <div className="relative h-full w-full overflow-hidden rounded-lg shadow-lg mt-3">
        {/* Botón de izquierda */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-r-lg z-10"
          onClick={() =>
            (document.querySelector(".carousel").scrollLeft -= 200)
          }
        >
          ‹
        </button>

        {/*carousel de recetas*/}

        <div className="carousel h-full w-full overflow-x-auto scroll-smooth scrollbar-hide flex gap-x-4 justify-start items-center px-2 ">
          {recetas.map((receta) => (
            <div
              key={receta.id}
              className="bg-white p-3 rounded-lg shadow-md flex flex-col items-center justify-between transform transition-transform hover:scale-105 flex-shrink-0 w-full lg:w-2/4 xl:w-1/4  h-4/5"
            >
              <div className="flex flex-col items-center justify-center bg-orange-400 w-full rounded-xl shadow-md shadow-black/30 p-3 mb-3">
                <h1 className="text-white text-4xl font- text-center">
                  {receta.nombre}
                </h1>
              </div>

              {/* Lista de Ingredientes con scroll y el componente de tarjetas */}
              <h2 className="text-2xl font-semibold mb-2">Ingredientes</h2>
              <RecipeCard receta={receta} />

              {/* Valor nutricional */}
              <p className="text-black-600 text-center text-xl mt-2">
                Valor nutricional = {receta.valorn}
              </p>

              {/* Botón eliminar */}
              <div className="flex items-center space-x-4 mt-2">
                <button
                  className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 flex items-center justify-center rounded-full shadow-md"
                  onClick={() => borrarreceta(receta.nombre)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Botón de derecha */}
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-l-lg z-10"
          onClick={() =>
            (document.querySelector(".carousel").scrollLeft += 200)
          }
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default RecipeHistory;
