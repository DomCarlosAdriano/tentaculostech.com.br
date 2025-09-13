import React from "react";
import { Fade } from "react-awesome-reveal";

const NewsSection = () => {
  return (
    <section className="w-full flex justify-center px-4 py-12 bg-black text-white">
      <div className="w-full max-w-4xl text-center flex justify-center flex-col items-center">
        {/* Título principal */}
         <Fade direction="up" delay={150} cascade damping={0.1} triggerOnce>
        <h2 className="font-rajdhani font-bold text-2xl md:text-3xl lg:text-4xl mb-4 leading-tight">
          O quanto <span className="text-purple-400">você está perdendo</span> por <br/> não estar na internet? 
        </h2>
       

        {/* Subtítulo */}
      
        <p className="text-sm md:text-base text-gray-300 mb-8">
          "Se seu negócio não está na internet ele não existe.""
        </p>
        </Fade>

        {/* Grid de imagens (notícias) */}
          <Fade direction="up" delay={150} cascade damping={0.1} triggerOnce>
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
        </Fade>
      </div>
    </section>
  );
};

export default NewsSection;
