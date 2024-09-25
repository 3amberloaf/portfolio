import React, { useRef, useEffect } from 'react';
import './intro.css'; 

const PixelEffect = () => {
  const canvasRef = useRef(null); // reference to the canvas element
  const name = "Hi, I'm AMBER"; // text to display on the canvas
  let fontSize = Math.min(window.innerWidth * 0.08, 80); // font size based on window width, capped at 80px

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { willReadFrequently: true }); // set up 2D drawing context with frequent reads for performance
    const pixels = []; // array to hold the pixel data
    let mouseX = 0; // store the current mouse X position
    let mouseY = 0; // store the current mouse Y position
    let mouseRadius = Math.max(50, window.innerWidth * 0.05); // radius around the mouse for pixel interaction, dynamic based on screen size

    // function to update the canvas size based on window size
    const updateCanvasSize = () => {
      const width = window.innerWidth; // get current window width
      const height = window.innerHeight; // get current window height
      canvas.width = width; // set canvas width dynamically
      canvas.height = height; // set canvas height dynamically
      fontSize = Math.min(window.innerWidth * 0.08, 80); // dynamically calculate the font size
      mouseRadius = Math.max(50, window.innerWidth * 0.05); // update mouse radius on resize
      drawText(); // redraw the text when canvas is resized
    };

    // function to render the text on the canvas and extract pixel data
    const drawText = () => {
      pixels.length = 0; // clear pixel array to avoid overlapping or performance issues
      ctx.clearRect(0, 0, canvas.width, canvas.height); // clear the entire canvas
      ctx.font = `${fontSize}px Monalisa`; // set font style and size dynamically
      ctx.fillStyle = 'white'; // text color for visibility
      ctx.textAlign = 'center'; // center the text horizontally
      ctx.fillText(name, canvas.width / 2, canvas.height / 2 - 150); // position the text slightly above center

      // get the pixel data from the canvas where the text is drawn
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      // loop through each pixel in the image data to find non-transparent (visible) ones
      for (let y = 0; y < imageData.height; y++) {
        for (let x = 0; x < imageData.width; x++) {
          const index = (y * imageData.width + x) * 4; // get the index in the pixel array
          const alpha = data[index + 3]; // alpha value (opacity) of the pixel
          if (alpha > 128) { // check if the pixel is sufficiently opaque (part of the text)
            pixels.push({
              x: x, // current x position of the pixel
              y: y, // current y position of the pixel
              originalX: x, // store the original x position (for return animation)
              originalY: y, // store the original y position (for return animation)
              velocityX: 0, // initial horizontal velocity
              velocityY: 0, // initial vertical velocity
            });
          }
        }
      }
    };

    // function to move the pixels based on mouse interaction
    const movePixels = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // clear the canvas before each frame

      // iterate over each pixel and update its position
      pixels.forEach((pixel) => {
        const dx = pixel.x - mouseX; // horizontal distance from the mouse
        const dy = pixel.y - mouseY; // vertical distance from the mouse
        const distance = Math.sqrt(dx * dx + dy * dy); // calculate the distance from the mouse

        // apply a force to pixels within the mouse radius
        if (distance < mouseRadius) {
          const forceDirectionX = dx / distance; // normalize the horizontal direction of the force
          const forceDirectionY = dy / distance; // normalize the vertical direction of the force
          const force = (mouseRadius - distance) / mouseRadius; // calculate the strength of the force based on proximity

          const moveX = forceDirectionX * force * 5; // calculate how much to move horizontally
          const moveY = forceDirectionY * force * 5; // calculate how much to move vertically

          // add the movement to the pixel's velocity
          pixel.velocityX += moveX;
          pixel.velocityY += moveY;
        }

        // update the pixel's position based on its velocity
        pixel.x += pixel.velocityX;
        pixel.y += pixel.velocityY;

        // apply some friction to slow the pixel down over time
        pixel.velocityX *= 0.9;
        pixel.velocityY *= 0.9;

        // draw the pixel as a small white square
        ctx.fillStyle = 'white';
        ctx.fillRect(pixel.x, pixel.y, 1, 1);

        // slowly return the pixel to its original position
        const distToOriginalX = pixel.originalX - pixel.x;
        const distToOriginalY = pixel.originalY - pixel.y;
        pixel.velocityX += distToOriginalX * 0.01; // apply a small force toward the original position (x)
        pixel.velocityY += distToOriginalY * 0.01; // apply a small force toward the original position (y)
      });

      // request the next animation frame for a smooth continuous animation
      requestAnimationFrame(movePixels);
    };

    // function to update mouse position on move
    const handleMouseMove = (event) => {
      mouseX = event.clientX; // get the X position of the mouse
      mouseY = event.clientY; // get the Y position of the mouse
    };

    updateCanvasSize(); // initially set the canvas size and draw text
    movePixels(); // start animating the pixels
    window.addEventListener('mousemove', handleMouseMove); // listen for mouse move events
    window.addEventListener('resize', updateCanvasSize); // listen for window resize events to adjust canvas size

    // clean up event listeners when the component is unmounted
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);

  return (
    <div className="pixel-effect-container">
      <canvas ref={canvasRef} className="pixel-canvas" /> {/* Canvas element where the effect takes place */}
    </div>
  );
};

export default PixelEffect;
