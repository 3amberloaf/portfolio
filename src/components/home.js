import React from "react";
import { motion } from "framer-motion";
import './home.css'; // Your custom CSS
import PixelEffect from "./pixel";



const Home = () => {
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <section className="home-section" id="home">
      {/* Particle Slider background */}
 <PixelEffect>

      {/* Text animations using Framer Motion */}
      <div className="home-container">
        <motion.div
          className="cta-buttons"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          <a href="#projects" className="btn btn-primary">
            View my work <span className="arrow">↓</span>
          </a>
        </motion.div>

      </div>
      </PixelEffect>
    </section>
  );
};

export default Home;
