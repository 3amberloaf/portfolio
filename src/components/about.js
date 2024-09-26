import React from 'react';
import './about.css';
import AmberSautner from '../assets/images/AmberSautner.jpg';

// Import your skill images
import HTMLIcon from '../assets/images/html.png';
import CSSIcon from '../assets/images/css.png';
import JSIcon from '../assets/images/javascript.png';
import ReactIcon from '../assets/images/react.png';
import NodeIcon from '../assets/images/node.png';
import GitIcon from '../assets/images/git.png';
import SqlIcon from '../assets/images/sql.png';
import AWSIcon from '../assets/images/aws.png';
import PythonIcon from '../assets/images/python.png';

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
          Hi! I'm Amber Sautner, a Master’s graduate in Computer Science with a passion for both frontend and backend development. My passion lies mainly in Python, JavaScript, SQL, and AWS, and love learning, especially in data science and software engineering. What drew me into tech is how it's always expanding—there's always something new to learn, which keeps me on my toes! I love pushing the boundaries of what I can do and discovering new capabilities along the way. When I'm not diving into tech, I enjoy picking up new hobbies—my latest is rock climbing! 
          </p>
        </div>
        
        {/* Tools Section */}
        <div className="tools-section">
          <h2 className="tools-title">Tools I Use</h2>
          <div className="skills-grid">
            <div className="skill-card"><img src={HTMLIcon} alt="HTML5" /><span>HTML5</span></div>
            <div className="skill-card"><img src={CSSIcon} alt="CSS3" /><span>CSS3</span></div>
            <div className="skill-card"><img src={JSIcon} alt="JavaScript" /><span>JavaScript</span></div>
            <div className="skill-card"><img src={PythonIcon} alt="Python" /><span>Python</span></div>
            <div className="skill-card"><img src={ReactIcon} alt="React" /><span>React</span></div>
            <div className="skill-card"><img src={NodeIcon} alt="Node.js" /><span>Node.js</span></div>
            <div className="skill-card"><img src={GitIcon} alt="Git" /><span>Git</span></div>
            <div className="skill-card"><img src={SqlIcon} alt="SQL" /><span>SQL</span></div>
            <div className="skill-card"><img src={AWSIcon} alt="AWS" /><span>AWS</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
