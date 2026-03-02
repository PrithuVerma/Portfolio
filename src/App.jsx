import React from "react";
import { Element } from "react-scroll";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import TechStack from "./components/TechStack.jsx";
import Projects from "./components/Projects.jsx";
import Socials from "./components/Socials.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div className="min-h-screen bg-background text-text">
      <Navbar />
      <main className="pt-20">
        <Element name="home">
          <Hero />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Element name="tech-stack">
          <TechStack />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="socials">
          <Socials />
        </Element>
      </main>
      <Footer />
    </div>
  );
};

export default App;

