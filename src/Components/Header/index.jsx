import CTAButton from "../CTAButton";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full p-4 z-10 border-b-[1.8px] border-gray-300/20 
                       bg-[linear-gradient(90deg,rgba(174,1,255,0.17)_40%,rgba(240,87,253,0.62)_100%)]">
    
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl sm:text-2xl font-bold text-white">
          <img src="./logo.png" alt="Logo" className="w-36 sm:w-44 md:w-48 h-auto"/>
        </h1>

        {/* CTA Button */}
        <CTAButton />
      </div>
    </header>
  );
}
