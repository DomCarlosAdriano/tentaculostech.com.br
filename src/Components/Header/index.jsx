import { FaEnvelope } from "react-icons/fa";

export default function Header() {
  return (
    <header className="top-0 left-0 w-full p-4 z-10 border-b border-gray-800/50 bg-black/40 backdrop-blur-md">
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Logo minimalista */}
        <h1 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
          TentaculosTech
        </h1>

        {/* Link estilizado */}
        <a
          href="https://wa.me/5582991286255"
          className="flex items-center gap-2 px-6 py-2 rounded-lg font-medium text-white 
                     border border-gray-400/50 
                     hover:border-[#5E3BEE] hover:text-[#5E3BEE] 
                     transition-all duration-300"
        >
          <FaEnvelope className="text-lg" />
          Contato
        </a>
      </div>
    </header>
  );
}
