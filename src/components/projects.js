import React, { useState } from "react";
import './projects.css'; // custom styles for the projects component

// define an array of project objects, each containing details about the project
const projects = [
  {
    title: "Restart Drip Website", // project title
    description: "A fully responsive website built for Restart Drip, a hydration and IV drip service provider.", // project description
    tools: "HTML5, CSS3, Javascript, React.js", // technologies used in the project
    image: "././images/restartdrip.png", // placeholder path to the project image
    liveDemo: "https://www.restartdrip.com", // live demo link to the deployed website
    repo: "Private Repository", // repository status, this one is private
  },
  {
    title: "Incident Management System",
    description: "A full stack web application for tracking IT incidents.",
    tools: "Spring Boot, React.js, MySQL",
    image: "././images/incident.png", // placeholder path to the project image
    liveDemo: "#", // placeholder for the live demo link, to be updated later
    repo: "https://github.com/3amberloaf/incident-management-system", // public repository link
  },
  {
    title: "Pandas Data Analysis Project",
    description: "Data analysis techniques using Pandas for data manipulation and visualization.",
    tools: "Python, Pandas, Matplotlib",
    image: "././images/pandas.jpg", // placeholder path to the project image
    liveDemo: "#", // placeholder for the live demo link, to be updated later
    repo: "https://github.com/3amberloaf/Pandas.git", // public repository link
  },
];

const Projects = () => {
  // state variable to track the currently displayed project index
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  // function to navigate to the next project in the array
  const nextProject = () => {
    // update the index, looping back to the first project if at the end
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  // function to navigate to the previous project in the array
  const prevProject = () => {
    // update the index, looping to the last project if at the beginning
    setCurrentProjectIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  // get the project object corresponding to the current index
  const currentProject = projects[currentProjectIndex];

  return (
    <div className="projects-section">
      <div className="project-container">
        {/* left side: project image */}
        <div className="project-image-container">
          {/* display the image of the current project */}
          <img src={currentProject.image} alt={currentProject.title} className="project-image" />
        </div>

        {/* right side: project info */}
        <div className="project-info-container">
          {/* project title */}
          <h2>{currentProject.title}</h2>

          {/* project description */}
          <p>{currentProject.description}</p>

          {/* tools used in the project */}
          <p><strong>Tools:</strong> {currentProject.tools}</p>

          {/* project links for live demo and repository */}
          <div className="project-links">
            {/* display live demo link if it exists */}
            {currentProject.liveDemo !== "#" && (
              <a href={currentProject.liveDemo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Live Demo
              </a>
            )}
            {/* display repository link if it is not private */}
            {currentProject.repo !== "Private Repository" && (
              <a href={currentProject.repo} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                View Repository
              </a>
            )}
          </div>

          {/* navigation buttons for switching between projects */}
          <div className="slider-controls">
            <button onClick={prevProject} className="btn btn-prev">Previous</button>
            <button onClick={nextProject} className="btn btn-next">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
