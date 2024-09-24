import React from "react";
import './home.css';
import PixelEffect from "./intro";
import Projects from "./projects";
import ParticlesEffect from "./particles";

const Home = () => {
  return (
    <div>
      <nav className="navigation-bar">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div className="hero" id="hero">
        <div className="canvas">
          <ParticlesEffect />  {/* Use the new ParticleEffect component */}
          <PixelEffect />
        </div>

        <div className="heading">
          <div className="heading__line-1">Hi, I'm <span className="highlight">Amber</span>.</div>
          <div className="heading__line-2">I'm a full stack web developer.</div>
          <a href="#projects" class="custom-button">View my work <span>&#x2193;</span></a>
        </div>
      </div>

      <section className="about" id="about">
        <h1>About</h1>
      </section>

      <section className="projects" id="projects">
        <h1>Projects</h1>
        <Projects />
      </section>

      <section className="contact" id="contact">
        <h1>Contact</h1>
      </section>

      <footer className="footer"></footer>
    </div>
  );
};

export default Home;
