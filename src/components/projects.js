import React, { useState, useEffect } from 'react';
import BackgroundSlider from 'react-background-slider';
import './projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  // Fetching GitHub Repos
  useEffect(() => {
    fetch('https://api.github.com/users/3amberloaf/repos')
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);

        // Dummy image URLs (or you can fetch actual images related to each project if available)
        const images = data.map((_, index) => `https://via.placeholder.com/1200x800?text=Project+${index + 1}`);
        setImageUrls(images);
      })
      .catch((error) => console.error('Error fetching the repos:', error));
  }, []);

  return (
    <div className="projects">
      <h1>My Projects</h1>

      {/* React Background Slider */}
      {imageUrls.length > 0 && (
        <BackgroundSlider
          images={imageUrls} // array of images
          duration={5} // Slide duration in seconds
          transition={2} // Transition duration in seconds
        />
      )}

      <div className="project-list">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="btn">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
