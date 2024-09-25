import React from 'react';
import './about.css';
import AmberSautner from '../assets/images/AmberSautner.jpg';

const About = () => {
  return (
    <div className="about-section">
      <h1 className="title">About Me</h1>
      <div className="about-content">
        <div className="about-description">
        <div className="skills-image-container">
          <img src={AmberSautner} alt="Skills Overview" className="skills-image" />
        </div>
          <p>
          I am Amber, a Masters graduate in Computer Science with a passion for both frontend and backend development. I have hands on experience building responsive websites, such as the Restart Drip website, and full stack applications like an Incident Management System that utilizes Spring Boot and React.js. I am skilled in Python, JavaScript, SQL, and AWS, and I'm constantly expanding my knowledge in data science and software engineering. With a strong technical background, a focus on user experience, and a drive for innovation, I am excited to apply my expertise to dynamic and challenging projects.
          </p>
          
        </div>
        
        
      </div>
    </div>
  );
};

export default About;
