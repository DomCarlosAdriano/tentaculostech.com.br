import React from "react";
import { Fade } from "react-awesome-reveal";


// importa suas imagens
import cardWeb from "../../assets/card-web.svg";
import cardAds from "../../assets/card-ads.svg";
import cardBonus from "../../assets/card-bonus.svg";

const SectionCourseContent = () => {
  return (
    <section className="w-full bg-black text-white px-6 py-16">
      {/* Título */}
      <Fade direction="up" delay={150} cascade damping={0.1} triggerOnce>
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Escolha o plano que melhor atende às <br/>necessidades da sua empresa
        </h2>
      </div>
      </Fade>

      {/* Grid dos Cards */}
      <Fade direction="up" delay={150} cascade damping={0.1} triggerOnce>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Card 1 */}
        <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
          <img
            src={cardWeb}
            alt="Criação de Websites"
            className="w-full rounded-2xl shadow-lg"
          />
        </div>

        {/* Card 2 */}
        <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
          <img
            src={cardAds}
            alt="Gestão de Tráfego Pago"
            className="w-full rounded-2xl shadow-lg"
          />
        </div>

        {/* Card 3 */}
        <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
          <img
            src={cardBonus}
            alt="Bônus"
            className="w-full rounded-2xl shadow-lg"
          />
        </div>
      </div>
      </Fade>
    </section>
  );
};

export default SectionCourseContent;
