import React, { useState, useEffect } from 'react';
import './TerminalEffect.css'; // Custom CSS for terminal style

const TypingEffect = () => {
  const name = "Amber"; // Your name to be typed
  const [displayedText, setDisplayedText] = useState(''); // Text being typed out
  const [isBlinking, setIsBlinking] = useState(true); // For the blinking cursor effect

  // This effect handles the typing animation
  useEffect(() => {
    let index = 0;
    const typingSpeed = 200; // Speed in milliseconds

    const typeLetter = () => {
      if (index < name.length) {
        setDisplayedText((prev) => prev + name[index]); // Add the next letter
        index += 1;
        setTimeout(typeLetter, typingSpeed); // Recursive typing effect
      }
    };

    typeLetter(); // Start the typing effect

    // Cursor blinking effect toggled every 500ms
    const blinkCursor = setInterval(() => {
      setIsBlinking((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(blinkCursor); // Clean up interval on unmount
    };
  }, [name]);

  return (
    <div className="terminal-container">
      <div className="terminal-text">
        {displayedText}
        <span className={`cursor ${isBlinking ? 'blinking' : ''}`}>|</span>
      </div>
    </div>
  );
};

export default TypingEffect;
