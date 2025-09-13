import React from "react";

const NewsSection = () => {
  return (
    <section className="w-full flex justify-center px-4 py-12 bg-black text-white">
      <div className="w-full max-w-4xl text-center flex justify-center flex-col items-center">
        {/* Título principal */}
        <h2 className="font-rajdhani font-bold text-2xl md:text-3xl lg:text-4xl mb-4 leading-tight">
          O quanto <span className="text-purple-400">você está perdendo</span> por <br/> não estar na internet? 
        </h2>

        {/* Subtítulo */}
        <p className="text-sm md:text-base text-gray-300 mb-8">
          "Se seu negócio não está na internet ele não existe.""
        </p>

        {/* Grid de imagens (notícias) */}
        <div className="grid grid-cols-1 gap-6 w-full max-w-2xl">
          <img
            src="/imagem1.webp"
            alt="Notícia 1"
            className="w-full rounded-lg shadow-lg"
          />
          <img
            src="/noticia2.webp"
            alt="Notícia 2"
            className="w-full rounded-lg shadow-lg"
          />
          <img
            src="/noticia3.webp"
            alt="Notícia 3"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
