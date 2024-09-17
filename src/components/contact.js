// src/components/Contact.js
import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p>
        I'd love to hear from you! Whether you have a question about my projects or want to work together, feel free to reach out.
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
