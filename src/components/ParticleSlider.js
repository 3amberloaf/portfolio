import { useEffect } from 'react';

const ParticleSliderComponent = () => {

  useEffect(() => {
    const initParticleSlider = () => {
      // Detect mobile devices and smaller screens
      const isMobile = navigator.userAgent.toLowerCase().indexOf('mobile') >= 0;
      const isSmall = window.innerWidth < 1000;

      // Function to initialize the ParticleSlider
      const init = () => {
        const ps = new window.ParticleSlider({
          ptlGap: isMobile || isSmall ? 3 : 0,
          ptlSize: isMobile || isSmall ? 3 : 1,
          width: window.innerWidth,
          height: window.innerHeight,
        });

        ps.init();

        // Initialize dat.GUI for controlling ParticleSlider properties
        const gui = new window.dat.GUI();
        gui.add(ps, 'ptlGap').min(0).max(5).step(1).onChange(() => {
          ps.init(true);
        });
        gui.add(ps, 'ptlSize').min(1).max(5).step(1).onChange(() => {
          ps.init(true);
        });
        gui.add(ps, 'restless');
        gui.addColor(ps, 'color').onChange((value) => {
          ps.monochrome = true;
          ps.setColor(value);
          ps.init(true);
        });

        // Reinitialize the slider on window click
        window.addEventListener('click', () => ps.init(true));
      };

      // Load the ParticleSlider script dynamically
      const psScript = document.createElement('script');
      psScript.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/23500/ps-0.9.js';
      psScript.setAttribute('type', 'text/javascript');
      psScript.onload = init;
      document.body.appendChild(psScript);
    };

    // Initialize ParticleSlider when the component mounts
    initParticleSlider();

    // Clean up event listeners and script tags when the component unmounts
    return () => {
      const psScript = document.querySelector(`script[src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/23500/ps-0.9.js']`);
      if (psScript) {
        document.body.removeChild(psScript);
      }
      window.removeEventListener('click', () => {});
    };
  }, []);

  return (
    <div id="particle-slider" style={{ width: '100%', height: '100vh', position: 'relative' }}>
      <canvas className="draw" style={{ position: 'absolute', top: 0, left: 0 }}></canvas>
    </div>
  );
};

export default ParticleSliderComponent;
