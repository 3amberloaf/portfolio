// src/components/Contact.js
import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="title">Contact Me</h1>
      <p>
      I look forward to connecting with you! Based in central New Jersey, the best way to reach me is via email at ambersautner3@gmail.com. Whether you have questions about my projects or are interested in collaborating, I wouldd be happy to hear from you.
      </p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required />
        <button type="submit" className="btn">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
