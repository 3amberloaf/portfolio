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
          Hi there! I am Amber Sautner, a Masters graduate in Computer Science with a strong background in both frontend and backend development. I have had the chance to work on projects like the fully responsive Restart Drip website, as well as a full-stack Incident Management System built with Spring Boot and React.js. I am proficient in Python, JavaScript, SQL, and AWS, and enjoy continuously learning, especially in areas like data science and software engineering. My experience includes optimizing cloud infrastructure, improving website performance, and aligning technical projects with business goals. I am passionate about creating user-centered solutions and excited to contribute my skills to innovative and challenging projects.
          </p>
          
        </div>
        
        
      </div>
    </div>
  );
};

export default About;
