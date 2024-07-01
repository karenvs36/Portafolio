import React from "react";
import { RiNextjsFill } from "react-icons/ri";

const Habilidades = () => {
  return (
    <section id="habilidades" className="pb-12">
      <h1 className="text-white text-5xl text-center mb-4">Habilidades</h1>
      <div className="flex items-center justify-center mb-4">
        <img src="/images/linea.png" alt="linea" className="max-w-full h-auto" />
      </div>
      {/* Icons */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mx-48 items-center justify-center">
        <div className="flex flex-col items-center justify-center text-xl lg:text-4xl text-white p-4 border border-[#1E293B] rounded-xl">
          <img src="/images/icons/html.svg" alt="HTML 5" className="h-12 w-12 mb-2" />
          HTML 5
        </div>
        <div className="flex flex-col items-center justify-center text-xl lg:text-4xl text-white p-4 border border-[#1E293B] rounded-xl">
          <img src="/images/icons/css.svg" alt="CSS 3" className="h-12 w-12 mb-2" />
          CSS 3
        </div>
        <div className="flex flex-col items-center justify-center text-xl lg:text-4xl text-white p-4 border border-[#1E293B] rounded-xl">
          <img src="/images/icons/typescript.svg" alt="TypeScript" className="h-12 w-12 mb-2" />
          TypeScript
        </div>
        <div className="flex flex-col items-center justify-center text-xl lg:text-4xl text-white p-4 border border-[#1E293B] rounded-xl">
          <RiNextjsFill className="h-12 w-12 mb-2" />
          Next.js
        </div>
        <div className="flex flex-col items-center justify-center text-xl lg:text-4xl text-white p-4 border border-[#1E293B] rounded-xl">
          <img src="/images/icons/git.svg" alt="Git" className="h-12 w-12 mb-2" />
          Git
        </div>
        <div className="flex flex-col items-center justify-center text-xl lg:text-4xl text-white p-4 border border-[#1E293B] rounded-xl">
          <img src="/images/icons/javascript.svg" alt="JavaScript" className="h-12 w-12 mb-2" />
          JavaScript
        </div>
        <div className="flex flex-col items-center justify-center text-xl lg:text-4xl text-white p-4 border border-[#1E293B] rounded-xl">
          <img src="/images/icons/reactjs.svg" alt="React" className="h-12 w-12 mb-2" />
          React
        </div>
        <div className="flex flex-col items-center justify-center text-xl lg:text-4xl text-white p-4 border border-[#1E293B] rounded-xl">
          <img src="/images/icons/figma.svg" alt="Figma" className="h-12 w-12 mb-2" />
          Figma
        </div>
        <div className="flex flex-col items-center justify-center text-xl lg:text-4xl text-white p-4 border border-[#1E293B] rounded-xl">
          <img src="/images/icons/tailwindcss.svg" alt="TailwindCSS" className="h-12 w-12 mb-2" />
          TailwindCSS
        </div>
      </div>
    </section>
  );
};

export default Habilidades;
