// src/components/Home.js

import React from 'react';
import './Home.css'; // Import custom CSS for styling
import { useEffect } from "react";


import '../App.css';

const Home = () => {
    useEffect(() => {
      const profile = document.querySelector('.profile');
      const skills = document.querySelectorAll('.skills__item');
  
      // Animate profile
      if (profile) {
        profile.classList.add('profile__fade-in');
      }
  
      // Animate skills with fade-in effect
      if (skills) {
        skills.forEach((skill, index) => {
          setTimeout(() => {
            skill.classList.add('skills__item-fade-in');
          }, index * 200);
        });
      }
    }, []);
  
    return (
      <div className="hero">
        <div className="canvas">
          {/* Add canvas animation here if you want, or particles.js, etc. */}
        </div>
        <div className="heading">
          <h1 className="heading__line-1">
            Welcome to <span>Amber's</span> Portfolio
          </h1>
          <h2 className="heading__line-2">Full-Stack Developer</h2>
          <div className="heading-cta">
            Explore Projects
            <svg className="heading__arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 4l1.41 1.41L8.83 10h10.34v2H8.83l4.58 4.59L12 20l-8-8z" />
            </svg>
          </div>
        </div>
        <section className="about">
          <h2 className="about__heading">About Me</h2>
          <div className="about__content">
            <div className="profile">
              <div className="profile__picture">
                <img src="profile-pic.jpg" alt="Amber" />
              </div>
              <p className="profile__blurb">
                Hi, I'm Amber, a passionate full-stack developer with experience in creating responsive and visually
                appealing websites.
              </p>
            </div>
            <div className="skills">
              <div className="skills__row">
                <div className="skills__item skills__item--js">
                  <img src="path/to/js-logo.png" alt="JavaScript" />
                  <span className="skills__item-name">JavaScript</span>
                </div>
                <div className="skills__item skills__item--react">
                  <img src="path/to/react-logo.png" alt="React" />
                  <span className="skills__item-name">React</span>
                </div>
              </div>
              <div className="skills__row">
                <div className="skills__item skills__item--node">
                  <img src="path/to/node-logo.png" alt="Node.js" />
                  <span className="skills__item-name">Node.js</span>
                </div>
                <div className="skills__item skills__item--webpack">
                  <img src="path/to/webpack-logo.png" alt="Webpack" />
                  <span className="skills__item-name">Webpack</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="contact">
          <h2 className="contact__heading">Get In Touch</h2>
          <form className="contact__form">
            <input type="text" className="contact__form-name" placeholder="Your Name" />
            <input type="email" className="contact__form-email" placeholder="Your Email" />
            <textarea className="contact__form-message" placeholder="Your Message"></textarea>
            <button className="contact__form-submit">Send</button>
          </form>
        </section>
      </div>
    );
  };
  
  export default Home;