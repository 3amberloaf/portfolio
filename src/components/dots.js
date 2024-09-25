import React, { useRef, useEffect } from 'react';
import './home.css'; 

const ConnectingDotsCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const dots = [];
    const numDots = 100; // Increased number of dots
    const dotDistance = 100; // Maximum distance for connecting dots

    // Throttling resize to avoid unnecessary calls
    const throttle = (func, delay) => {
      let lastCall = 0;
      return function (...args) {
        const now = new Date().getTime();
        if (now - lastCall >= delay) {
          lastCall = now;
          return func(...args);
        }
      };
    };

    // Dot class definition
    class Dot {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = Math.random() * 2 - 1; 
        this.vy = Math.random() * 2 - 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Handle boundary collisions
        if (this.x >= width || this.x <= 0) {
          this.vx = -this.vx;
        }
        if (this.y >= height || this.y <= 0) {
          this.vy = -this.vy;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#00aaff';
        ctx.fill();
      }
    }

    // Initialize dots
    for (let i = 0; i < numDots; i++) {
      dots.push(new Dot(Math.random() * width, Math.random() * height));
    }

    // Optimized connection logic - reduce distance checks
    const connectDots = () => {
      for (let i = 0; i < numDots; i++) {
        for (let j = i + 1; j < numDots; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const distance = dx * dx + dy * dy; // Use squared distance for optimization

          if (distance < dotDistance * dotDistance) {
            ctx.strokeStyle = 'rgba(0, 170, 255, 0.3)'; 
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Update and draw all dots
      dots.forEach(dot => {
        dot.update();
        dot.draw();
      });

      // Connect dots based on distance
      connectDots();

      requestAnimationFrame(animate);
    };

    animate();

    // Throttled resize function
    const resizeCanvas = throttle(() => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }, 100); // Limit the resize event to fire every 100ms

    window.addEventListener('resize', resizeCanvas);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas className="connecting-dots" ref={canvasRef} style={{ display: 'block' }} />
  );
};

export default ConnectingDotsCanvas;
