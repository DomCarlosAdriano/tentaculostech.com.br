import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
  {
    question: "Como funciona o processo de criação do meu site?",
    answer:
      "Nosso processo é dividido em 4 etapas simples: análise das suas necessidades, criação do design personalizado, desenvolvimento técnico e entrega final. Durante todo o processo, você recebe atualizações regulares e pode solicitar ajustes para garantir que o resultado final atenda perfeitamente às suas expectativas."
  },
  {
    question: "Quanto tempo leva para o meu site ficar pronto?",
    answer:
      "O prazo varia de acordo com a complexidade do projeto. Sites institucionais ficam prontos em 7-14 dias úteis, enquanto e-commerces podem levar de 15-30 dias. Sempre definimos prazos claros no contrato e mantemos você informado sobre o progresso."
  },
  {
    question: "Vocês oferecem suporte após a entrega do site?",
    answer:
      "Sim! Oferecemos 30 dias de suporte gratuito após a entrega para pequenos ajustes e correções. Também temos planos de manutenção mensal que incluem atualizações de segurança, backups automáticos e suporte técnico contínuo."
  },
  {
    question: "Como funciona a gestão de tráfego pago?",
    answer:
      "Criamos e gerenciamos suas campanhas no Google Ads e Facebook/Instagram Ads. Fazemos pesquisa de palavras-chave, criação de anúncios, configuração de público-alvo e otimização contínua. Você recebe relatórios semanais com os resultados e métricas de performance."
  },
  {
    question: "Preciso fornecer as imagens e textos para o site?",
    answer:
      "Não necessariamente. Podemos criar todo o conteúdo para você, incluindo textos otimizados para SEO e seleção de imagens profissionais. Se você já tem materiais, ótimo! Caso contrário, nossa equipe cuida de tudo para você."
  }
];

const FAQSection = ({ menuOpen }) => {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  if (menuOpen) return null;

  return (
    <section className=" py-16 px-4 flex justify-center" >
      <div className="max-w-4xl w-full h-fit">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-white font-bold text-3xl md:text-4xl mb-4 leading-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Tire suas dúvidas sobre nossos serviços e processo de trabalho
          </p>
        </div>

        {/* FAQ Items */}
        <div className="flex flex-col gap-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl overflow-hidden transition-all duration-300 hover:border-purple-700/30 hover:shadow-lg"
            >
              <button
                className={`w-full flex justify-between items-center px-6 py-4 md:py-5 text-left text-white font-semibold text-base md:text-lg transition-colors duration-300 ${
                  openIndex === index ? "text-purple-700 border-b border-purple-700/20" : ""
                }`}
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="flex-1 mr-4">{faq.question}</span>
                <span className="flex items-center justify-center w-6 h-6 text-purple-700 text-sm md:text-base">
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 md:pb-7 text-gray-300 text-sm md:text-base leading-relaxed">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
