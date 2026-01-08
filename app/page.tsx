import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/skills/Skills";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import FooterWithInsect from "./components/Footer";

export default function Home() {
  return (
    <div className="relative flex flex-col">
      <div className="w-full max-w-7xl mx-auto relative px-4 md:px-0 flex flex-col gap-20">
        <div className="lg:h-screen xl:h-full">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <FooterWithInsect />
    </div>
  );
}
