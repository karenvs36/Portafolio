import React from "react";
import Container from "./Container";
import Slider from "./Slider";

const Proyectos = () => {
  return (
    <section id="Proyectos" className="pb-12">
      <Container>
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
