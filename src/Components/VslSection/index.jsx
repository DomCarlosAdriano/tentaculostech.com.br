import React, { useRef, useState, useEffect } from "react";
import GlowButton from "../GlowButton";

const VSLSection = ({ menuOpen }) => {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => setIsVideoLoaded(true);
    const handleError = () => console.error("Erro ao carregar o vídeo");

    const handleTimeUpdate = () => {
      if (video.currentTime >= 60 && !showButton) {
        setShowButton(true);
      }
    };

    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("error", handleError);
    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("error", handleError);
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [showButton]);

  if (menuOpen) return null;

  return (
    <section className="text-white flex justify-center py-16 px-4 md:py-20">
      <div className="max-w-4xl w-full flex flex-col items-center">
        {/* Texto */}
        <div className="text-center mb-12 md:mb-16 px-2">
          <h2 className="font-rajdhani font-bold text-3xl md:text-4xl lg:text-5xl mb-4 leading-tight">
            Transforme Sua Presença Digital <br className="hidden sm:block"/>
            <span className="text-transparent bg-gradient-to-r from-purple-700 to-purple-400 bg-clip-text">
              Atraia Mais Clientes
            </span>
          </h2>
          <p className="font-roboto text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Nós criamos sites profissionais e gerenciamos campanhas de tráfego
            para que pequenos negócios e autônomos cresçam online de forma
            acessível e estratégica.
          </p>
        </div>

        {/* Vídeo */}
        <div className="w-full flex flex-col items-center">
          <div className="relative w-full max-w-3xl rounded-xl border border-white/10 backdrop-blur-md bg-white/5 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="relative aspect-video bg-black overflow-hidden rounded-xl">
              <video
                ref={videoRef}
                src="/video.webm"
                className="w-full h-full object-contain"
                controls
                preload="metadata"
                playsInline
              >
                Seu navegador não suporta o elemento de vídeo.
              </video>

              {!isVideoLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#0B0D17] to-[#1a1a2e] pointer-events-none">
                  <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-purple-700 to-purple-400 rounded-full flex items-center justify-center text-white shadow-lg animate-pulse">
                    <svg
                      className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Botão Saiba Mais */}
          {showButton && (
            <GlowButton className=" mt-7 md:mt-8 ">Saiba Mais</GlowButton>
          )}
        </div>
      </div>
    </section>
  );
};

export default VSLSection;
