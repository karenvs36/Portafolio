import React from "react";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { PiFigmaLogoFill } from "react-icons/pi";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaCss3Alt, FaHtml5, FaGitAlt } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

const Habilidades = () => {
  return (
    <section id="habilidades" className="pb-12 px-4">
      <h1 className="text-white text-4xl md:text-5xl text-center mb-4">Habilidades</h1>
      <div className="flex items-center justify-center mb-4">
        <img src="/images/linea.png" alt="linea" className="max-w-full h-auto" />
      </div>
      {/* Icons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="flex flex-col items-center justify-center text-lg sm:text-xl md:text-2xl lg:text-4xl text-white p-4 border border-[#1E293B] rounded-xl">
          <FaHtml5 className="h-10 w-10 mb-2 text-orange-500" />
          HTML 5
        </div>
        <div className="flex flex-col items-center justify-center text-lg sm:text-xl md:text-2xl lg:text-4xl text-white p-4 border border-[#1E293B] rounded-xl">
          <FaCss3Alt className="h-10 w-10 mb-2 text-blue-600" />
          CSS 3
        </div>
        <div className="flex flex-col items-center justify-center text-lg sm:text-xl md:text-2xl lg:text-4xl text-white p-4 border border-[#1E293B] rounded-xl">
          <SiTypescript className="h-10 w-10 mb-2 text-blue-400" />
          TypeScript
        </div>
        <div className="flex flex-col items-center justify-center text-lg sm:text-xl md:text-2xl lg:text-4xl text-white p-4 border border-[#1E293B] rounded-xl">
          <RiNextjsFill className="h-10 w-10 mb-2" />
          Next.js
        </div>
        <div className="flex flex-col items-center justify-center text-lg sm:text-xl md:text-2xl lg:text-4xl text-white p-4 border border-[#1E293B] rounded-xl">
          <FaGitAlt className="h-10 w-10 mb-2 text-orange-700" />
          Git
        </div>
        <div className="flex flex-col items-center justify-center text-lg sm:text-xl md:text-2xl lg:text-4xl text-white p-4 border border-[#1E293B] rounded-xl">
          <IoLogoJavascript className="h-10 w-10 mb-2 text-yellow-300" />
          JavaScript
        </div>
        <div className="flex flex-col items-center justify-center text-lg sm:text-xl md:text-2xl lg:text-4xl text-white p-4 border border-[#1E293B] rounded-xl">
          <FaReact className="h-10 w-10 mb-2 text-blue-400" />
          React
        </div>
        <div className="flex flex-col items-center justify-center text-lg sm:text-xl md:text-2xl lg:text-4xl text-white p-4 border border-[#1E293B] rounded-xl">
          <PiFigmaLogoFill className="h-10 w-10 mb-2 text-purple-400" />
          Figma
        </div>
        <div className="flex flex-col items-center justify-center text-lg sm:text-xl md:text-2xl lg:text-4xl text-white p-4 border border-[#1E293B] rounded-xl">
          <RiTailwindCssFill className="h-10 w-10 mb-2 text-[#009688]" />
          TailwindCSS
        </div>
      </div>
    </section>
  );
};

export default Habilidades;
