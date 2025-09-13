import React from "react";
import eagleImg from "../../assets/eagle.svg";
import monkeyImg from "../../assets/monkey.svg";
import CircleShadow from "../CircleShadow";

const Card = () => {
  return (
    <section className="w-full  text-white px-6 py-16 relative">

    <div
    className="
      absolute
      w-[500px] h-[580px] 
       bg-gradient-to-br from-[#1407D3] to-[#FF32FF] 
      opacity-50 
      filter blur-[150px] 
      rounded-full
      mix-blend-screen
     left-[-180px] top-[100px]
      z-0
    "
  ></div> 

      <div className="max-w-4xl mx-auto space-y-20">
        {" "}
        {/* LIMITADOR */}
        {/* BLOCO 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
          {/* Texto */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold leading-snug">
              Dá para ganhar dinheiro criando{" "}
              <span className="text-purple-400">
                imagens com inteligência artificial?
              </span>
            </h2>
            <p className="mt-6 text-gray-300 leading-relaxed">
              Se você está se perguntando como eu consigo altos faturamentos
              (renda em torno de R$10.000,00), te respondo que 50% da minha
              renda hoje vêm da criação de imagens com inteligência artificial.
            </p>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Só que não adianta criar por criar, existe um método em que você
              garante o resultado para seus clientes. E nesse curso eu te ensino
              como.
            </p>
            
          </div>

          {/* Imagem + PIX */}
          <div className="flex-1 relative flex justify-center mt-8 lg:mt-0">
            <img
              src={eagleImg}
              alt="Eagle"
              className="w-full max-w-sm rounded-2xl shadow-lg"
            />
          </div>
        </div>


        {/* BLOCO 2 */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-10 mt-12">
          {/* Texto */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold leading-snug">
              Dá para ganhar dinheiro criando{" "}
              <span className="text-purple-400">
                imagens com inteligência artificial?
              </span>
            </h2>
            <p className="mt-6 text-gray-300 leading-relaxed">
              Se você está se perguntando como eu consigo altos faturamentos
              (renda em torno de R$10.000,00), te respondo que 50% da minha
              renda hoje vêm da criação de imagens com inteligência artificial.
            </p>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Só que não adianta criar por criar, existe um método em que você
              garante o resultado para seus clientes. E nesse curso eu te ensino
              como.
            </p>
             <p className="mt-4 text-gray-300 leading-relaxed">
              Só que não adianta criar por criar, existe um método em que você
              garante o resultado para seus clientes. E nesse curso eu te ensino
              como.
            </p>
          </div>

          {/* Imagem */}
          <div className="flex-1 flex justify-center mt-8 lg:mt-0">
            <img
              src={monkeyImg}
              alt="Monkey AI"
              className="w-full max-w-sm rounded-2xl shadow-lg"
            />
          </div>
        </div>


      </div>
      
    </section>
  );
};

export default Card;
