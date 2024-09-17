// src/components/Home.js

import React from 'react';
import './Home.css'; // Import custom CSS for styling
import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { tsParticles } from "@tsparticles/engine";




const Home = () => {
    const particlesInit = useCallback(async (engine) => {
        // Load tsparticles engine
        await tsParticles.load(engine);
      }, []);
      

  const particlesOptions = {
    fullScreen: { enable: false },
    background: { color: "#0d0d0d" },
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: { value: "#fff" },
      shape: {
        type: "circle",
        stroke: { width: 10, color: "#000000" },
      },
      opacity: { value: 0.5, random: false },
      size: { value: 3, random: true },
      line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        attract: { enable: false }
      }
    }
  };

  return (
    <section className="home-section" id="home">
       <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />
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
