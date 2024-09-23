import React, { useRef } from "react";
import { motion } from "framer-motion";
import './home.css'; // Importing your custom CSS
import PixelEffect from "./pixel"; // Assuming PixelEffect is your custom component
import Confetti from 'react-confetti'; // Confetti effect
import Projects from "./projects"; // Projects component

const Home = () => {
  // Motion variants for the button animation
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.5, ease: "easeInOut" },
    },
  };

  // Confetti background component
  const ConfettiBackground = () => (
    <Confetti width={window.innerWidth} height={window.innerHeight} />
  );

  // Reference to the projects section for smooth scrolling
  const projectsRef = useRef(null);

  // Function to scroll to the projects section
  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="home-section" id="home">
      {/* Confetti background */}
      <ConfettiBackground />
      {/* PixelEffect if you want additional animation effects */}
      <PixelEffect />

      {/* Button for scrolling to the Projects section */}
      <div className="home-container">
        <motion.div
          className="cta-buttons"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          <button onClick={scrollToProjects} className="btn btn-primary">
            View my work <span className="arrow">↓</span>
          </button>
        </motion.div>
      </div>

      {/* Projects section */}
      <section ref={projectsRef} id="projects">
        <h1>Projects</h1>
        <Projects />
      </section>
    </section>
  );
};

export default Home;
