// src/components/About.js
import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <p>
        I'm Amber, a software developer with a Master's in Computer Science. My expertise includes front-end development using React.js and backend technologies like Node.js and AWS.
      </p>
      <h2>Skills</h2>
      <ul>
        <li>JavaScript (React, Node.js)</li>
        <li>Python</li>
        <li>Data Science and Machine Learning</li>
        <li>AWS, Docker, Git</li>
        <li>SQL and NoSQL Databases</li>
      </ul>
    </div>
  );
};

export default About;
