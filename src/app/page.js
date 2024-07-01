import Hero from "./components/Hero";
import Proyectos from "./components/Proyectos";
import Habilidades from  "./components/Habilidades";
import Contacto from "./components/Contacto";

export default function Home() {
  return (
   <main>
      <Hero />
      <Proyectos />
      <Habilidades/>
      <Contacto />
   </main>
  );
}
