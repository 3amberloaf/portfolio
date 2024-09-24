import React, { useRef, useEffect } from 'react';

const ConnectingDotsCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    // Set up variables and logic for connecting dots
    const dots = [];
    const numDots = 100;
    const dotDistance = 150;

    // Create Dot class
    class Dot {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = Math.random() * 2 - 1; // Random velocity
        this.vy = Math.random() * 2 - 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x > width || this.x < 0) this.vx = -this.vx;
        if (this.y > height || this.y < 0) this.vy = -this.vy;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
      }
    }

    // Initialize dots
    for (let i = 0; i < numDots; i++) {
      dots.push(new Dot(Math.random() * width, Math.random() * height));
    }

    // Function to draw connecting lines between dots
    const connectDots = () => {
      for (let i = 0; i < numDots; i++) {
        for (let j = i + 1; j < numDots; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < dotDistance) {
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
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
      dots.forEach(dot => {
        dot.update();
        dot.draw();
      });
      connectDots();
      requestAnimationFrame(animate);
    };

    animate();

    // Resize canvas on window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas className="connecting-dots" ref={canvasRef} style={{ display: 'block' }} />
  );
};

export default ConnectingDotsCanvas;
