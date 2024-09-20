import React, { useEffect, useRef } from 'react';

const BackgroundDots = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const dots = [];
    const maxDots = 100;

    class Dot {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 2 + 1;
        this.color = '#557373';
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      move() {
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        this.x += this.vx;
        this.y += this.vy;
      }
    }

    function drawLine(dot1, dot2) {
      const distance = Math.hypot(dot1.x - dot2.x, dot1.y - dot2.y);
      if (distance < 100) {
        ctx.beginPath();
        ctx.moveTo(dot1.x, dot1.y);
        ctx.lineTo(dot2.x, dot2.y);
        ctx.strokeStyle = '#557373';
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach((dot, index) => {
        dot.move();
        dot.draw();

        // Draw lines between nearby dots
        for (let i = index + 1; i < dots.length; i++) {
          drawLine(dot, dots[i]);
        }
      });

      requestAnimationFrame(animate);
    }

    // Initialize dots
    for (let i = 0; i < maxDots; i++) {
      dots.push(new Dot());
    }

    animate();

    // Adjust canvas size on window resize
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }}></canvas>;
};

export default BackgroundDots;
