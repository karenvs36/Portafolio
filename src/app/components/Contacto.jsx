import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import Container from "./Container";



const Contacto = () => {
  return (
    <section id="contacto">
      <Container className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-white text-5xl text-center mb-4">Contacto</h1>
      <div className="flex items-center justify-center mb-4">
        <img
          src="/images/linea.png"
          alt="linea"
          className="max-w-full h-auto"
        />
      </div>
      {/* Icons */}
      <div className="flex justify-center space-x-4 mb-12">
        <a 
            href="https://github.com/karenvs36/"
            target="_blank"
            rel="noopener noreferrer" 
        >
            <FaGithub className="text-6xl text-white hover:text-accent cursor-pointer"/>
        </a>
        <a 
            href="https://www.linkedin.com/in/karen-verdugo-50b3191aa/"
            target="_blank"
            rel="noopener noreferrer" 
        >
            <CiLinkedin className="text-6xl text-white hover:text-accent cursor-pointer"/>
        </a>
        <a 
            href="mailto:karenvs36@gmail.com"
        >
            <IoIosMail className="text-6xl text-white hover:text-accent cursor-pointer"/>
        </a>
      </div>
      </Container>
    </section>
  );
};

export default Contacto;
