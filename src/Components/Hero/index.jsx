import CTAButton from "../CTAButton";

export default function Hero() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center px-6 md:px-12"
      style={{
        backgroundImage: "url('./heroBG.svg')", // coloque sua imagem na pasta public
      }}
    >
      <div className="relative z-10 grid md:grid-cols-2 items-center max-w-6xl mx-auto gap-10">
        {/* Texto */}
        <div className="text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-snug">
            Precisa Atrair Mais Clientes e
            <span className="text-pink-500"> Aumentar Seu Faturamento?</span>
          </h1>
          <p className="text-gray-300 mt-4 md:mt-6 max-w-lg">
            Criamos seu site profissional e gerenciamos campanhas de tráfego
            para atrair clientes qualificados para seu negocio. Sem burocracia e
            preços acessíveis. Fale conosco e solicite seu orçamento sem
            compromisso!
          </p>

           <CTAButton className=" mt-7 md:mt-8 "/>

        </div>
      </div>
    </section>
  );
}
