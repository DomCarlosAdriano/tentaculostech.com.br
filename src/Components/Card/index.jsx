import React from "react";
import eagleImg from "../../assets/eagle.svg";
import monkeyImg from "../../assets/monkey.svg";
import CircleShadow from "../CircleShadow";
import { Fade } from "react-awesome-reveal";

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

       <div
        className="
      absolute
      w-[500px] h-[580px] 
       bg-gradient-to-br from-[#1407D3] to-[#FF32FF] 
      opacity-50 
      filter blur-[150px] 
      rounded-full
      mix-blend-screen
     right-[-180px] bottom-[0px]
      z-0
    "
      ></div>

      <div className="max-w-4xl mx-auto space-y-20">
        {" "}
        {/* LIMITADOR */}
        {/* BLOCO 1 */}
        <Fade direction="up" delay={150} cascade damping={0.1} triggerOnce>
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
            {/* Texto */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold leading-snug">
                Transforme cliques em clientes fiéis com nossa{" "}
                <span className="text-purple-400">gestão de tráfego pago</span>
              </h2>
              <p className="mt-6 text-gray-300 leading-relaxed">
                Pare de desperdiçar dinheiro com anúncios que não trazem
                retorno. Com nossa gestão de tráfego pago, você investe de forma
                estratégica, atrai clientes qualificados e multiplica suas
                vendas com campanhas otimizadas que realmente funcionam.
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Já ajudamos empresas como a sua a crescer no digital. Aproveite
                essa chance e conquiste mais clientes todos os dias com
                campanhas que vendem de verdade.
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
        </Fade>
        {/* BLOCO 2 */}
        <Fade direction="up" delay={150} cascade damping={0.1} triggerOnce>
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-10 mt-12">
            {/* Texto */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold leading-snug">
               Tenha um site profissional que vende por você{" "}
                <span className="text-purple-400">
                   24 horas todos os dias
                </span>
              </h2>
              <p className="mt-6 text-gray-300 leading-relaxed">
                Sua empresa perde vendas quando não tem presença digital forte.
                Com nosso serviço de criação de sites, você ganha autoridade,
                atrai clientes qualificados e transmite confiança. Um site
                moderno é a vitrine que coloca seu negócio à frente da
                concorrência.
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Não basta estar na internet, é preciso se destacar. Criamos
                sites rápidos, bonitos e otimizados para gerar resultados reais
                e aumentar suas vendas.
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Empresas que investem em sites profissionais conquistam mais
                clientes. Garanta já o seu e transforme visitantes em
                compradores fiéis antes que seus concorrentes façam isso.
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
        </Fade>
      </div>
    </section>
  );
};

export default Card;
