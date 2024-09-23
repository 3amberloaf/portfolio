import React, { useState } from "react";
import BackgroundSlider from 'react-background-slider';
import './projects.css'; // Custom styles for this component

const projects = [
  {
    title: "Restart Drip Website",
    description: "A fully responsive website built for Restart Drip, a hydration and IV drip service provider.",
    tools: "HTML5, CSS3, JavaScript",
    image: "https://via.placeholder.com/1200x800?text=Restart+Drip+Website", // Replace with actual screenshot
    liveDemo: "https://www.restartdrip.com",
    repo: "Private Repository",
  },
  {
    title: "Incident Management System",
    description: "A full-stack web app for tracking IT incidents.",
    tools: "Spring Boot, React.js, MySQL",
    image: "https://via.placeholder.com/1200x800?text=Incident+Management+System", // Replace with actual screenshot
    liveDemo: "#", // Add a live demo link if available
    repo: "https://github.com/3amberloaf/incident-management-system",
  },
  {
    title: "Pandas Data Analysis Project",
    description: "Data analysis techniques using Pandas for data manipulation and visualization.",
    tools: "Python, Pandas, Matplotlib",
    image: "https://via.placeholder.com/1200x800?text=Pandas+Data+Analysis", // Replace with actual screenshot
    liveDemo: "#", // Add a live demo link if available
    repo: "https://github.com/3amberloaf/Pandas.git",
  },
  // Add more projects as needed
];

const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  // Function to go to the next project
  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  // Function to go to the previous project
  const prevProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentProjectIndex];

  return (
    <div className="projects-section">
      {/* Background Slider */}
      <BackgroundSlider
        images={projects.map(project => project.image)} // Background images for each project
        duration={5} // Duration of each slide
        transition={1} // Transition duration between slides
        currentIndex={currentProjectIndex} // Show the current project’s background
      />

      {/* Project Info */}
      <div className="project-info">
        <h2>{currentProject.title}</h2>
        <p>{currentProject.description}</p>
        <p><strong>Tools:</strong> {currentProject.tools}</p>

        {/* Project Links */}
        <div className="project-links">
          {currentProject.liveDemo !== "#" && (
            <a href={currentProject.liveDemo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Live Demo
            </a>
          )}
          {currentProject.repo !== "Private Repository" && (
            <a href={currentProject.repo} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              View Repository
            </a>
          )}
        </div>

        {/* Navigation buttons */}
        <div className="slider-controls">
          <button onClick={prevProject} className="btn btn-prev">Previous</button>
          <button onClick={nextProject} className="btn btn-next">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
