export default function MidjourneySection() {
  return (
    <section className="relative w-full bg-black text-white px-6 py-26 bg-cover bg-center" style={{ backgroundImage: "url('./hub.svg')" }}>
      {/* Container principal */}
      <div className="relative max-w-5xl mx-auto text-center">
        
        {/* Conteúdo */}
        <div className="relative z-10 lg:max-w-[50%] justify-center mx-auto"> 
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">
            Por que aprender{" "}
            <span className="text-purple-400">Midjourney?</span>
          </h2>

          {/* Formulário */}
          <form className="space-y-4 text-left">
            {/* Nome */}
            <div>
              <label className="block text-sm font-medium mb-1">Nome</label>
              <input 
                type="text" 
                placeholder="Digite seu nome"
                className="w-full rounded-lg px-4 py-2 bg-gray-900 border border-gray-700 focus:border-purple-400 focus:ring-2 focus:ring-purple-400 outline-none transition"
              />
            </div>

            {/* E-mail */}
            <div>
              <label className="block text-sm font-medium mb-1">E-mail</label>
              <input 
                type="email" 
                placeholder="Digite seu e-mail"
                className="w-full rounded-lg px-4 py-2 bg-gray-900 border border-gray-700 focus:border-purple-400 focus:ring-2 focus:ring-purple-400 outline-none transition"
              />
            </div>

            {/* Whatsapp */}
            <div>
              <label className="block text-sm font-medium mb-1">Whatsapp</label>
              <input 
                type="text" 
                placeholder="(00) 00000-0000"
                className="w-full rounded-lg px-4 py-2 bg-gray-900 border border-gray-700 focus:border-purple-400 focus:ring-2 focus:ring-purple-400 outline-none transition"
              />
            </div>

            {/* Texto da ideia */}
            <div>
              <label className="block text-sm font-medium mb-1">Nos conte qual é a sua ideia</label>
              <textarea 
                rows="4"
                placeholder="Digite sua ideia aqui..."
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

        {/* Mão esquerda */}
        <img
          src="./lefthand.webp"
          alt="Mão esquerda"
          className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-40 xl:w-56"
        />

        {/* Mão direita */}
        <img
          src="./righthand.webp"
          alt="Mão direita"
          className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-40 xl:w-56"
        />
      </div>
    </section>
  );
}
