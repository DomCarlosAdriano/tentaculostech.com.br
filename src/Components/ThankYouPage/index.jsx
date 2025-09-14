import React from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black px-4">
      {/* Container principal */}
      <div className="bg-white rounded-3xl shadow-2xl max-w-xl w-full p-10 text-center">
        {/* Ícone de agradecimento */}
        <div className="text-green-500 text-6xl mb-6">🎉</div>

        {/* Título */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
          Obrigado por enviar sua ideia!
        </h1>

        {/* Texto */}
        <p className="text-gray-600 mb-6 text-base sm:text-lg">
          Recebemos sua solicitação. Em até <span className="font-semibold">24 horas</span> entraremos em contato com você pelo <span className="font-semibold">WhatsApp</span> ou <span className="font-semibold">e-mail</span> para enviar o orçamento da criação do seu site.
        </p>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://wa.me/SEUNUMERO" // substitua pelo seu número
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition-colors"
          >
            <FaWhatsapp />
            Entrar em contato
          </a>

          <a
            href="mailto:seuemail@exemplo.com" // substitua pelo seu e-mail
            className="flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-full transition-colors"
          >
            <FaEnvelope />
            Enviar e-mail
          </a>
        </div>

        {/* Nota adicional */}
        <p className="mt-6 text-gray-400 text-sm">
          Enquanto isso, você pode voltar à página inicial e conhecer nossos serviços.
        </p>
      </div>
    </div>
  );
}
