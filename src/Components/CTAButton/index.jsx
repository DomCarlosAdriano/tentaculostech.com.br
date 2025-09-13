export default function CTAButton({ className }) {
  return (
    <div>
      <button
        className={`
          relative px-8 py-1 
          text-lg font-semibold text-white 
          rounded-[9px] overflow-hidden
          bg-blue-500
          shadow-lg shaow-purple-800/50
          transition-all duration-300 
          hover:scale-105 
          ${className}  
        `}
      >
       Get Start
      </button>
    </div>
  );
}
