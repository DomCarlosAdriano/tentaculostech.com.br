import React from "react";
import GlowButton from "../GlowButton";
import Preloader from "../Preloader";
import { useImagesPreloader } from "../../hooks/useImagesPreloader";

export default function HeroSection() {
  const images = ["/t1.webp","/t2.webp","/t3.webp","/t4.webp","/t5.webp","/t6.webp"];
  const loaded = useImagesPreloader(images);

  if (!loaded) return <Preloader />;

  return (
    <section className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center px-6 py-9">
      <div className="max-w-4xl text-center">
        {/* Glow animado atrás do título */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none w-full h-fit top-10">
          <div className="w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#1407D3] to-[#FF32FF] blur-[100px] opacity-40"></div>
        </div>

        <p className="text-sm text-purple-400 mb-2 relative z-10 font-semibold">
          Sites que Vendem: Mais Clientes, Mais Faturamento
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white relative z-10">
          Precisa Atrair Mais Clientes {" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1407D3] to-[#FF32FF]">
             Aumentar Seu Faturamento?
          </span>
        </h1>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto relative z-10">
          Criamos seu site profissional e gerenciamos campanhas de tráfego para
          atrair clientes qualificados para seu negocio. Sem burocracia e preços
          acessíveis. Fale conosco e solicite seu orçamento sem compromisso!
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-4 relative z-10">
          <GlowButton>Solicitar Orçamento Gratuito</GlowButton>
        </div>
      </div>

      {/* Grid de imagens */}
      <div className="mt-30 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl">
        {images.map((src, i) => (
          <img key={i} src={src} alt={`hero ${i+1}`} className="rounded-lg object-cover w-full h-full" />
        ))}
      </div>
    </section>
  );
}
