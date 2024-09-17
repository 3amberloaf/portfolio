import React, { useCallback } from "react";
import Particles from "react-tsparticles";

import { loadAll } from "@tsparticles/all"; // Adjusted for JavaScript (no type import)
import './home.css'; // Your custom CSS

const Home = () => {
  // Particle initialization using useCallback
  const customInit = useCallback(async (engine) => {
    await loadAll(engine); // Loads all tsParticles features
  }, []);

  // Custom particle options
  const particleOptions = {
    fullScreen: {
      enable: false,
    },
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#fff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
      },
      opacity: {
        value: 0.5,
        random: false,
      },
      size: {
        value: 3,
        random: true,
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        attract: {
          enable: false,
        },
      },
    },
    background: {
      color: "#0d0d0d", // Background color matching your theme
    },
  };

  return (
    <section className="home-section" id="home">
      <Particles options={particleOptions} init={customInit} />
      <div className="home-container">
        <h1 className="home-title">
          Hello, I'm <span className="highlighted-text">Amber</span>.
        </h1>
        <p className="home-subtitle">I'm a full stack web developer.</p>
        <div className="cta-buttons">
          <a href="#projects" className="btn btn-primary">
            View my work <span className="arrow">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
