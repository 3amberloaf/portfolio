import React, { useRef, useEffect } from 'react';
import './home.css'; 

const ConnectingDotsCanvas = () => {
  // useRef is used to store a reference to the <canvas> element across renders
  const canvasRef = useRef(null);

  useEffect(() => {
    // get the canvas element and the 2d drawing context
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // set canvas dimensions to match the full window size
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    // array to store the dots and configuration variables
    const dots = [];
    const numDots = 80; // number of dots
    const dotDistance = 100; // maximum distance between dots to connect with lines

    // dot class to create individual dots with random velocity
    class Dot {
      constructor(x, y) {
        // set initial position
        this.x = x;
        this.y = y;

        // give each dot a random velocity between -1 and 1
        this.vx = Math.random() * 2 - 1; 
        this.vy = Math.random() * 2 - 1;
      }

      // update method to move the dot and handle boundary collisions
      update() {
        this.x += this.vx;
        this.y += this.vy;
        
        // Reverse velocity when hitting canvas boundaries and adjust position to prevent overshooting
        if (this.x >= width || this.x <= 0) {
          this.vx = -this.vx;
          this.x = Math.max(0, Math.min(this.x, width)); // Ensure it stays within bounds
        }
        
        if (this.y >= height || this.y <= 0) {
          this.vy = -this.vy;
          this.y = Math.max(0, Math.min(this.y, height)); // Ensure it stays within bounds
        }
      }

      // draw method to render the dot on the canvas
      draw() {
        ctx.beginPath(); // start drawing path
        ctx.arc(this.x, this.y, 3, 0, Math.PI * 2); // draw a small circle for the dot
        ctx.fillStyle = '#00aaff'; // blue color for the dots
        ctx.shadowColor = '#00aaff'; // same color for the glow
        ctx.shadowBlur = 1; // glow effect
        ctx.fill();
      }
    }

    // initialize the dots and place them randomly across the canvas
    for (let i = 0; i < numDots; i++) {
      dots.push(new Dot(Math.random() * width, Math.random() * height));
    }

    // function to connect the dots that are close enough to each other
    const connectDots = () => {
      for (let i = 0; i < numDots; i++) {
        for (let j = i + 1; j < numDots; j++) {
          const dx = dots[i].x - dots[j].x; // difference in x
          const dy = dots[i].y - dots[j].y; // difference in y
          const distance = Math.sqrt(dx * dx + dy * dy); // calculate distance between two dots

          // if the distance is less than the threshold, draw a line between them
          if (distance < dotDistance) {
            ctx.strokeStyle = 'rgba(0, 170, 255, 0.5)'; // light blue color for the lines
            ctx.lineWidth = 1;
            ctx.shadowColor = '#00aaff'; // glow effect for the lines
            ctx.shadowBlur = 10;
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // animation loop to update positions and redraw the dots and lines continuously
    const animate = () => {
      // clear the canvas for the next frame
      
      ctx.clearRect(0, 0, width, height);

      // update the position of each dot and draw it
      dots.forEach(dot => {
        dot.update();
        dot.draw();
      });

      // connect dots that are close enough
      connectDots();

      // repeat the animation for the next frame
      requestAnimationFrame(animate);
    };

    // start the animation loop
    animate();

    // function to resize the canvas dynamically when the window size changes
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // resize the canvas on initial load
    resizeCanvas(); 

    // set up an event listener to handle window resizing
    window.addEventListener('resize', resizeCanvas);

    // cleanup: remove the resize event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // render the canvas element
  return (
    <canvas className="connecting-dots" ref={canvasRef} style={{ display: 'block' }} />
  );
};

export default ConnectingDotsCanvas;
