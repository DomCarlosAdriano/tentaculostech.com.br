import { Fade } from "react-awesome-reveal";

export default function MidjourneySection() {
  return (
    <section className="relative w-full bg-black text-white px-6 py-26 bg-cover bg-center lg:bg-[url('./hub.svg')]">
      {/* Container principal */}
      <div className="relative max-w-5xl mx-auto text-center">
        
        {/* Conteúdo */}
        <Fade direction="up" delay={150} cascade damping={0.1} triggerOnce>
          <div className="relative z-10 lg:max-w-[55%] justify-center mx-auto"> 
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">
              Envie Sua Ideia e Receba um <span className="text-purple-400">Orçamento Gratuito</span> Para Transformar seu Projeto em Realidade!
            </h2>

            {/* Formulário */}
            <form 
              action="https://formsubmit.co/tentaculostech.com@gmail.com" 
              method="POST"
              className="space-y-4 text-left"
            >
              {/* Configurações extras */}
              <input type="hidden" name="_subject" value="Nova ideia enviada pelo site!" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://seusite.com/obrigado.html" />

              {/* Nome */}
              <div>
                <label className="block text-sm font-medium mb-1">Nome</label>
                <input 
                  type="text" 
                  name="nome"
                  placeholder="Digite seu nome"
                  required
                  className="w-full rounded-lg px-4 py-2 bg-gray-900 border border-gray-700 focus:border-purple-400 focus:ring-2 focus:ring-purple-400 outline-none transition"
                />
              </div>

              {/* E-mail */}
              <div>
                <label className="block text-sm font-medium mb-1">E-mail</label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Digite seu e-mail"
                  required
                  className="w-full rounded-lg px-4 py-2 bg-gray-900 border border-gray-700 focus:border-purple-400 focus:ring-2 focus:ring-purple-400 outline-none transition"
                />
              </div>

              {/* Whatsapp */}
              <div>
                <label className="block text-sm font-medium mb-1">Whatsapp</label>
                <input 
                  type="text" 
                  name="whatsapp"
                  placeholder="(00) 00000-0000"
                  className="w-full rounded-lg px-4 py-2 bg-gray-900 border border-gray-700 focus:border-purple-400 focus:ring-2 focus:ring-purple-400 outline-none transition"
                />
              </div>

              {/* Texto da ideia */}
              <div>
                <label className="block text-sm font-medium mb-1">Nos conte qual é a sua ideia</label>
                <textarea 
                  rows="4"
                  name="ideia"
                  placeholder="Digite sua ideia aqui..."
                  required
                  className="w-full rounded-lg px-4 py-2 bg-gray-900 border border-gray-700 focus:border-purple-400 focus:ring-2 focus:ring-purple-400 outline-none transition resize-none"
                ></textarea>
              </div>

              {/* Botão */}
              <button 
                type="submit"
                className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 rounded-lg transition"
              >
                Enviar
              </button>
            </form>
          </div>
        </Fade>

        {/* Mão esquerda */}
        <Fade direction="left" delay={100} cascade damping={0.1} triggerOnce>
          <img
            src="./lefthand.webp"
            alt="Mão esquerda"
            className="hidden lg:block absolute left-0 top-1/2 -translate-y-100 w-40 xl:w-56"
          />
        </Fade>

        {/* Mão direita */}
        <Fade direction="right" delay={100} cascade damping={0.1} triggerOnce>
          <img
            src="./righthand.webp"
            alt="Mão direita"
            className="hidden lg:block absolute right-0 top-1/2 -translate-y-100 w-40 xl:w-56"
          />
        </Fade>
      </div>
    </section>
  );
}
