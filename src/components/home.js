// src/components/home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>Hi, I'm Amber. I'm a passionate software developer with a focus on web development, data science, and problem-solving.</p>
      <div className="home-links">
        <Link to="/projects" className="btn">View My Projects</Link>
        <Link to="/about" className="btn">About Me</Link>
        <Link to="/contact" className="btn">Get in Touch</Link>
      </div>
    </div>
  );
};

export default Home;
