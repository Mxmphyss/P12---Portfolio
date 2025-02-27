import React from "react";
import Presentation from "../components/sections/presentation";
import Technologies from "../components/sections/technologie";
import Projects from "../components/sections/projects";
import Contact from "../components/sections/contacts";

const Home = () => {
  return (
    <main>
      <section id="presentation" className="mainSection">
        <Presentation />
      </section>

      <section id="technologies" className="mainSection">
        <Technologies />
      </section>

      <section id="projects" className="mainSection">
        <Projects />
      </section>

      <section id="contact" className="mainSection">
        <Contact />
      </section>
    </main>
  );
};

export default Home;