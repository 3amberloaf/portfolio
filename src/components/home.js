import React from "react";
import { motion } from "framer-motion";
import './home.css'; // Your custom CSS
import PixelEffect from "./pixel";
import Confetti from 'react-confetti';


const Home = () => {
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.5, ease: "easeInOut" },
    },
  };

  const ConfettiBackground = () => {
    return <Confetti width={window.innerWidth} height={window.innerHeight} />;
  };

  return (
    <section className="home-section" id="home">
      {/* Confetti Background */}
      <ConfettiBackground />
    
      {/* Pixel Effect in its own container */}
      <PixelEffect />
    
      {/* Button and other elements */}
      <div className="home-container">
        <motion.div className="cta-buttons" variants={buttonVariants} initial="hidden" animate="visible">
          <a href="#projects" className="btn btn-primary">
            View my work <span className="arrow">↓</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
