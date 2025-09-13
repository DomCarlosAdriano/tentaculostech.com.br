export default function CircleShadow({ className }) {
  return (
    <div
      className={`
        absolute
        w-[350px] h-[80%] 
        bg-gradient-to-br from-[#1407D3] to-[#FF32FF] 
        opacity-70 
        blur-[200px] 
        rounded-full
        mix-blend-screen
        ${className}  /* Aqui combinamos as classes externas */
      `}
    ></div>
  );
}