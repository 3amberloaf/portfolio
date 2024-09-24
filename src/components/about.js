import React from 'react';
import './about.css';
import skillsImage from './star.jpg';  // Update with the correct path to your uploaded image

const About = () => {
  return (
    <div className="about-section">
      <h1 className="about-title">About Me</h1>
      <div className="about-content">
        <div className="about-description">
          <p>
            I'm Amber, a software developer with a Master's in Computer Science. My expertise includes front-end development using React.js and backend technologies like Node.js and AWS.
          </p>
          <h2 className="skills-title">Skills</h2>
        </div>
        
        <div className="skills-image-container">
          <img src={skillsImage} alt="Skills Overview" className="skills-image" />
        </div>
      </div>
    </div>
  );
};

export default About;
