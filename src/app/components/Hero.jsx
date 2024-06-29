'use client';
import React from "react";
import Container from "./Container";
import AnimatedFrames from "./AnimatedFrames";
import Curriculum from "./Curriculum";
import Button from "./Button";

const Hero = () => {
  const curriculumDownloadUrl = "/curriculum.pdf";
   
  return (
    <section
      id="Inicio"
      className="overflow-hidden py-4 sm:py-16 lg:py-24 xl:py-32"
    >
      <Container className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
          {/* Left side */}
          <div className="col-span-1 px-4 sm:px-0 lg:px-8 flex flex-col justify-start items-start mt-28">
            <p className="text-white text-4xl sm:text-5xl lg:text-6xl">
              Hola, soy
            </p>
            <h1 className="text-white text-6xl py-2 sm:text-7xl lg:text-8xl">
              Karen
            </h1>
            <p className="text-3xl" style={{ color: "#ff007f" }}>
              &lt;&nbsp;Desarrollador Web&nbsp;&nbsp;/&gt;
            </p>
            {/* Buttons */}
            <div>
            <Curriculum
              downloadUrl={curriculumDownloadUrl}
              className="custom-button"
            >
              Descargar Currículum
            </Curriculum>
            </div>
          </div>

          {/* Right side */}
          <div className="col-span-1 flex justify-center items-center">
            <AnimatedFrames />
            <Button />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
