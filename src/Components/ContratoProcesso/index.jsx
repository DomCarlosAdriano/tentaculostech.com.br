import React from "react";
import aiFace from "../../assets/ia-face.svg"; // coloque sua imagem aqui
import CircleShodow from "../CircleShadow";

const steps = [
  "Entenda como funcionam as ferramentas de geração de imagens;",
  "Como funciona essa poderosa ferramenta de Inteligência Artificial;",
  "Como dar os melhores comandos e obter os melhores resultados;",
  "Aprenda a criar imagens com objetos e personagens;",
  "Aprenda a ter resultados de diferentes ângulos e enquadramentos;",
  "Aprenda a criar imagens com objetos e personagens;",
  "Aprenda a ter resultados de diferentes ângulos e enquadramentos;",
];

const ContratoProcesso = () => {
  return (
    <section className="w-full bg-black text-white px-6 py-16 relative">
      <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Coluna Direita */}
        <div className="space-y-0 flex justify-center items-center flex-col" >
          <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-6 text-center lg:text-left">
            Como Funciona a <br /> Contratação do Serviço
          </h2>
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4 max-w-[400px]">
              <span className="text-purple-400 font-semibold min-w-[30px] text-right">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-gray-300 leading-relaxed border-l border-purple-600 pl-4  ">
                {step}
              </p>
            </div>
          ))}
        </div>

        {/* Coluna Esquerda */}
        <div>
          <img
            src={aiFace}
            alt="AI Illustration"
            className="w-full max-w-sm rounded-2xl shadow-lg text-center mx-auto"
          />
        </div>
      </div>
        <div
    className="
      absolute
      w-[600px] h-[560px] 
       bg-gradient-to-br from-[#1407D3] to-[#FF32FF] 
      opacity-50 
      filter blur-[150px] 
      rounded-full
      mix-blend-screen
     right-[-300px] top-[-300px]
      z-0
        hidden sm:block
    "
  ></div> 
    </section>
  );
};

export default ContratoProcesso;
