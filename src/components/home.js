import React, { useRef } from "react";
import './home.css'; // Importing your custom CSS
import PixelEffect from "./intro"; // Assuming PixelEffect is your custom component
import Projects from "./projects"; // Projects component
import Particles from '@tsparticles/react'; // Correct import
import { loadFull } from 'tsparticles'; // Load full 

const Home = () => {
  // Particle configuration
  const particlesInit = async (main) => {
    await loadFull(main); // Load full tsparticles configuration
  };

  const particleOptions = {
    background: {
      color: {
        value: "#0d0d0d", // Dark background color
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse", // Particles move when hovered over
        },
        resize: true,
      },
    },
    particles: {
      color: {
        value: "#ffffff", // White particles for a clean look
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.6, // Slow movement for a smooth effect
        direction: "none",
        random: false,
        straight: false,
        outModes: {
          default: "out",
        },
      },
      number: {
        value: 100, // Adjust the number of particles
        density: {
          enable: true,
          area: 800,
        },
      },
      opacity: {
        value: 0.5,
        random: true,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 }, // Smaller particles for subtle effect
      },
    },
    detectRetina: true,
  };

  // Reference to the projects section for smooth scrolling
  const projectsRef = useRef(null);

  // Function to scroll to the projects section
  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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

      <div className="hero" id="hero">
        <div className="canvas">
          <Particles id="tsparticles" init={particlesInit} options={particleOptions} />
          <PixelEffect />
        </div>

        {/* Hero content */}
        <div className="heading">
          <div className="heading__line-1">Hi, I'm <span className="highlight">Amber</span>.</div>
          <div className="heading__line-2">I'm a full stack web developer.</div>
          <a href="#about" className="heading__link">View my work ↓</a>
        </div>
      </div>

      <div className="main-bg"></div> {/* Main background for content */}

      {/* About section */}
      <section className="about" id="about">
        <h1>About</h1>
        {/* About section content */}
      </section>

      {/* Projects section */}
      <section className="projects" id="projects" ref={projectsRef}>
        <h1>Projects</h1>
        <Projects />
      </section>

      {/* Contact section */}
      <section className="contact" id="contact">
        <h1>Contact</h1>
        {/* Contact section content */}
      </section>

      {/* Footer */}
      <footer className="footer">
        {/* Footer content */}
      </footer>
    </div>
  );
};

export default Home;
