import React from "react";

const Home = ({ changeview }) => {
  return (
    <section className="min-h-dvh h-screen w-full flex  items-center justify-evenl ">
      <div className="gap-2 p-8 w-2/4 h-2/3 flex flex-col items-center justify-center">
        <h1 className="text-yellow-100 text-6xl font-bold">Crea tus propias</h1>
        <h1 className="text-yellow-100 text-6xl font-extrabold">Recetas</h1>
        <p className="text-white text-3xl font-bold pt-5 text-center">
          Comienza a crear recetas totalmente personalizadas usando nuestro
          catalogo de ingredientes. Puedes ver los ingredientes separados por
          categorias para un facil manejo a la hora de crear.
        </p>
        <button
          onClick={() => changeview("create-recipe")}
          className="bg-orange-500 rounded-full mt-3 py-2 px-2 text-white font-bold text-wrap text-2xl"
        >
          Comienza a crear
        </button>
      </div>

      <div className=" w-2/5 h-2/3 flex flex-col items-center justify-center">
        <img
          src="../Homeimg.png"
          alt="food pic"
          className="items-center justify-center h-auto w-full"
        />
      </div>
    </section>
  );
};

export default Home;
