'use client';
import React from "react";
import Container from "./Container";
import Slider from "./Slider";


const Proyectos = () => {
    
  return (
    <section
    id="Proyectos">
      <Container>
        <div>
          {/*title */}
          <div className="text-white text-3xl justify-center flex">
            <h1>Proyectos</h1>
          </div>
          <div >
            <Slider />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Proyectos;
