import React from "react";
import { motion } from "framer-motion";
import './home.css'; // Your custom CSS
import BackgroundDots from "./backgrounddot";

const Home = () => {
  // Framer Motion variants for text and button animations
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.5,
        ease: "easeInOut",
      },
    },
  };


  return (
    <section className="home-section" id="home">
      {/* Background dots animation */}
      <BackgroundDots />


      {/* Text animations using Framer Motion */}
      <div className="home-container">
        <motion.h1
          className="home-title"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Hello, I'm <span className="highlighted-text">Amber</span>.
        </motion.h1>
        <motion.p
          className="home-subtitle"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          I'm a full stack web developer.
        </motion.p>
        <motion.div
          className="cta-buttons"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          <a href="projects" className="btn btn-primary">
            View my work <span className="arrow">↓</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
