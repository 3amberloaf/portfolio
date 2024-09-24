import React from "react";
import './home.css';
import PixelEffect from "./intro";
import Projects from "./projects";
import About from "./about";
import Contact from "./contact";
const Home = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navigation-bar">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="hero" id="hero">
        <div className="canvas">
          <PixelEffect />
        </div>

        <div className="heading">
          <div className="heading__line-1">
            Hi, I'm <span className="highlight">Amber</span>.
          </div>
          <div className="heading__line-2">I am CS graduate student at NJIT</div>
          <a href="#projects" className="custom-button">
            View my work <span>&#x2193;</span>
          </a>
        </div>
      </div>

      {/* About Section */}
      <section className="about" id="about">
        <h1>About</h1>
        < About />
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <h1>Projects</h1>
        <Projects />
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h1>Contact</h1>
      < Contact />
      </section>

      {/* Footer */}
      <footer className="footer"></footer>
    </div>
  );
};

export default Home;
