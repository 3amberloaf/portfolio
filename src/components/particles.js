import React from 'react';
import Particles from '@tsparticles/react';
import { loadFull } from 'tsparticles'; 

const ParticlesEffect = () => {
  const particlesInit = async (main) => {
    await loadFull(main); 
  };

  const particleOptions = {
    background: {
      color: { value: "#0d0d0d" },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        resize: true,
      },
    },
    particles: {
      color: { value: "#ffffff" },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.6,
        direction: "none",
        random: false,
        straight: false,
        outModes: { default: "out" },
      },
      number: { value: 100, density: { enable: true, area: 800 } },
      opacity: { value: 0.5, random: true },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  return <Particles id="tsparticles" init={particlesInit} options={particleOptions} />;
};

export default ParticlesEffect;
