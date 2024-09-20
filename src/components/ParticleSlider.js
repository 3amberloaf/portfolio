import { useEffect } from "react";

const ParticleSlider = () => {
  useEffect(() => {
    let retryAttempts = 0;

    const image = new Image();
    image.src = '/images/star.jpg';  // Correct image path
    image.onload = () => {
      console.log("Image loaded successfully.");
      initParticleSlider(); // Only initialize after the image has fully loaded
    };

    const initParticleSlider = () => {
      const sliderElement = document.getElementById('particle-slider');

      if (sliderElement && window.ParticleSlider) {
        const isMobile = navigator.userAgent.toLowerCase().indexOf('mobile') >= 0;
        const isSmall = window.innerWidth < 1000;

        try {
          // Ensure the canvas has a valid size
          const canvas = document.querySelector('.draw');
          if (canvas) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
          }

          // Initialize ParticleSlider with options
          const ps = new window.ParticleSlider({
            ptlGap: isMobile || isSmall ? 3 : 0,
            ptlSize: isMobile || isSmall ? 3 : 1,
            width: window.innerWidth, // Set width to window width
            height: window.innerHeight, // Set height to window height
            monochrome: true,
          });

          ps.setText(["Amber", "Sautner"]);
          ps.init();
        } catch (error) {
          console.error("Failed to initialize ParticleSlider:", error);
        }
      } else if (retryAttempts < 5) {
        retryAttempts += 1;
        setTimeout(initParticleSlider, 100);
      } else {
        console.error("ParticleSlider element or script not available after multiple attempts.");
      }
    };

    // Dynamically load the ParticleSlider script
    const psScript = document.createElement('script');
    psScript.src = './scripts/ps-0.9.js'; // Local path to ParticleSlider script
    psScript.setAttribute('type', 'text/javascript');

    // Load dat.gui script for controls if needed
    const datGuiScript = document.createElement('script');
    datGuiScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.5/dat.gui.min.js';
    datGuiScript.setAttribute('type', 'text/javascript');

    // Initialize the ParticleSlider after both scripts are loaded
    psScript.onload = () => setTimeout(initParticleSlider, 100);
    document.body.appendChild(psScript);
    document.body.appendChild(datGuiScript);

    // Cleanup the scripts when component unmounts
    return () => {
      document.body.removeChild(psScript);
      document.body.removeChild(datGuiScript);
    };
  }, []);

  return (
    <div id="particle-slider" style={{ width: "100%", height: "100vh" }}>
      {/* ParticleSlider will render here */}
      <div className="slides">
        <div id="first-slide" className="slide" data-src="/images/star.jpg">
          {/* Image for ParticleSlider */}
        </div>
      </div>
      <canvas className="draw"></canvas>
    </div>
  );
};

export default ParticleSlider;
