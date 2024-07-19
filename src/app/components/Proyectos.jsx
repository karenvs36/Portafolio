import React from "react";
import Container from "./Container";
import Slider from "./Slider";
//comment
const Proyectos = () => {
  return (
    <section id="Proyectos" className="pb-12">
      <Container className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          {/*title */}
          <h1 className="text-white text-5xl text-center mb-4">Proyectos</h1>
          <div className="flex items-center justify-center mb-4">
            <img
              src="/images/linea.png"
              alt="linea"
              className="max-w-full h-auto"
            />
          </div>
          <div>
            <Slider/>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Proyectos;
