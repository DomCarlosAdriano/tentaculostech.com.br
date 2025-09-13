import React from "react";
import {  FaEnvelope, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = ({ menuOpen }) => {
  if (menuOpen) return null;

  return (
    <footer className="w-full bg-black border-t border-purple-600 text-gray-300 px-6 py-6">
      <div className="max-w-4xl mx-auto flex flex-wrap justify-between items-center gap-4">
        {/* Texto à esquerda */}
        <p className="flex-1 min-w-[200px] text-sm text-center md:text-left">
          © 2025 TentaculosTech, Inc. All rights reserved.
        </p>

        {/* Links do meio */}
        <ul className="flex gap-6 flex-wrap justify-center">
          <li>
            <a href="/" className="hover:text-white transition-colors">
              Contact
            </a>
          </li>
        </ul>

        {/* Redes sociais à direita */}
        <div className="flex gap-4 justify-center">
          <a href="https://www.instagram.com/tentaculos_tech/" className="hover:text-white transition-colors text-xl">
            <FaInstagram />
          </a>
           <a href="/" className="hover:text-white transition-colors text-xl">
            <FaEnvelope />
          </a>
           <a href="/" className="hover:text-white transition-colors text-xl">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
