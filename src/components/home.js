import React, {useRef} from "react";
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

  const projectsRef = useRef(null);

  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  

  return (
    <section className="home-section" id="home">
    
      <ConfettiBackground />
      <PixelEffect />

      {/* Button and other elements */}
      <div className="home-container">
        <motion.div className="cta-buttons" variants={buttonVariants} initial="hidden" animate="visible">
          {/* When clicked, it will trigger scrollToProjects */}
          <button onClick={scrollToProjects} className="btn btn-primary">
            View my work <span className="arrow">↓</span>
          </button>
        </motion.div>
      </div>

      {/* Projects section to scroll to */}
      <section ref={projectsRef} id="projects">
        <h2>My Projects</h2>
        {/* Your projects content here */}
      </section>
    </section>
  );
};

export default Home;