import React, { useRef, useEffect } from 'react';

import './intro.css'; // Import the CSS file for enhanced styling

const PixelEffect = () => {
  const canvasRef = useRef(null);
  const name = "Welcome"; // Your name
  const fontSize = 100; // Font size for the text

  useEffect(() => {
    const canvas = canvasRef.current;
    // Adding willReadFrequently attribute for performance optimization
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const pixels = [];
    let mouseX = 0;
    let mouseY = 0;
    const mouseRadius = 80; // Radius around the mouse to affect the pixels

    // Draw the text on the canvas and retrieve its pixel data
    const drawText = () => {
      ctx.clearRect(0, 0, width, height); // Clear canvas
      ctx.font = `${fontSize}px Montserrat`;
      ctx.fillStyle = 'white'; // Change the text color to white for better visibility
      ctx.textAlign = 'center';
      ctx.fillText(name, width / 2, height / 2);

      const imageData = ctx.getImageData(0, 0, width, height);
      const data = imageData.data;

      for (let y = 0; y < imageData.height; y++) {
        for (let x = 0; x < imageData.width; x++) {
          const index = (y * imageData.width + x) * 4;
          const alpha = data[index + 3];
          if (alpha > 128) {
            pixels.push({
              x: x,
              y: y,
              originalX: x,
              originalY: y,
              velocityX: 0,
              velocityY: 0,
            });
          }
        }
      }
    };

    const movePixels = () => {
      ctx.clearRect(0, 0, width, height); // Clear canvas
      ctx.font = `${fontSize}px Montserrat`;

      pixels.forEach((pixel) => {
        const dx = pixel.x - mouseX;
        const dy = pixel.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseRadius) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const maxDistance = mouseRadius;
          const force = (maxDistance - distance) / maxDistance;

          const moveX = forceDirectionX * force * 5;
          const moveY = forceDirectionY * force * 5;

          pixel.velocityX += moveX;
          pixel.velocityY += moveY;
        }

        pixel.x += pixel.velocityX;
        pixel.y += pixel.velocityY;

        pixel.velocityX *= 0.9;
        pixel.velocityY *= 0.9;

        ctx.fillStyle = 'white'; // Color of the pixels
        ctx.fillRect(pixel.x, pixel.y, 1, 1);

        const distToOriginalX = pixel.originalX - pixel.x;
        const distToOriginalY = pixel.originalY - pixel.y;
        pixel.velocityX += distToOriginalX * 0.01;
        pixel.velocityY += distToOriginalY * 0.01;
      });

      requestAnimationFrame(movePixels);
    };

    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    drawText();
    movePixels();
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  

  return (
    <div className="pixel-effect-container">
      {/* The pixel canvas */}
      <canvas ref={canvasRef} className="pixel-canvas" />

     
    </div>
  );
};

export default PixelEffect;
