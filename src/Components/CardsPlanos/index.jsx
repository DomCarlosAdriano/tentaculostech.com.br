import React from "react";

// importa suas imagens
import cardWeb from "../../assets/card-web.svg";
import cardAds from "../../assets/card-ads.svg";
import cardBonus from "../../assets/card-bonus.svg";

const SectionCourseContent = () => {
  return (
    <section className="w-full bg-black text-white px-6 py-16">
      {/* Título */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Conheça a <span className="font-bold">grade completa</span> do curso
        </h2>
      </div>

      {/* Grid dos Cards */}
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
    </section>
  );
};

export default SectionCourseContent;
