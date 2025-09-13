import { FaWhatsapp } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

export default function ContactSection() {
  return (
    <section className="w-full py-16 px-4 bg-black text-center">
      <div className="max-w-3xl mx-auto">
        {/* Título */}
        <Fade direction="up" delay={150} cascade damping={0.1} triggerOnce>
          <h2 className="text-3xl md:text-4xl font-bold text-purple-500 mb-4">
            Ficou com alguma dúvida?
          </h2>

          {/* Subtítulo */}
          <p className="text-gray-300 text-base md:text-lg mb-8">
            Fale com a gente agora pelo WhatsApp e tire todas as suas dúvidas na
            hora! É rápido, fácil e sem compromisso. Transforme sua ideia em
            resultados reais com apenas um clique.
          </p>
        </Fade>

        {/* Botão */}
        <Fade direction="up" delay={150} cascade damping={0.1} triggerOnce>
          <a
            href="https://wa.me/5582991286255" // coloque aqui o número real do WhatsApp
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-full transition-transform transform hover:scale-105"
          >
            <FaWhatsapp className="text-2xl text-white" />
            Clique aqui e entre em contato
          </a>
        </Fade>
      </div>
    </section>
  );
}
