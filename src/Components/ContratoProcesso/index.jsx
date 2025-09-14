import React from "react";
import aiFace from "../../assets/ia-face.svg"; // coloque sua imagem aqui
import CircleShodow from "../CircleShadow";
import { Fade } from "react-awesome-reveal";

const steps = [
  "Envie sua ideia e receba um orçamento personalizado, rápido e sem compromisso. É o primeiro passo para transformar seu projeto em realidade.",
  "Após aprovar o orçamento, elaboramos um contrato transparente que garante segurança e clareza para ambas as partes. Nada de surpresas, só confiança.",
  "Nossa equipe começa a trabalhar no seu projeto, acompanhando cada detalhe. Você recebe um produto final de alta qualidade, pronto para impressionar.",
  "Com seu projeto entregue, você aproveita todos os benefícios e resultados que buscava. Nosso objetivo é garantir que seu sucesso seja o próximo passo."
];

const ContratoProcesso = () => {
  return (
    <section className="w-full text-white px-6 py-16 relative">
      <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Coluna Direita */}
        <Fade direction="up" delay={150} cascade damping={0.1} triggerOnce>
          <div className="space-y-0 flex justify-center items-center flex-col">
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
        </Fade>
        {/* Coluna Esquerda */}
        <Fade direction="up" delay={150} cascade damping={0.1} triggerOnce>
          <div>
            <img
              src={aiFace}
              alt="AI Illustration"
              className="w-full max-w-sm rounded-2xl shadow-lg text-center mx-auto"
            />
          </div>
        </Fade>
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
      hidden sm:block
      z-[-90]
    "
      ></div>
         <div
        className="
      absolute
      w-[500px] h-[400px] 
       bg-gradient-to-br from-[#1407D3] to-[#FF32FF] 
      opacity-50 
      filter blur-[150px] 
      rounded-full
      mix-blend-screen
     left-[-200px] top-[400px]
     hidden sm:block
      z-0
    "
      ></div>
    </section>
  );
};

export default ContratoProcesso;
