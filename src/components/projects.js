import React, { useState } from "react";
import './projects.css'; 

// define an array of project objects, each containing details about the project
const projects = [
  {
    title: "Restart Drip Website", 
    description: "A fully responsive website built for Restart Drip, a hydration and IV drip service provider.", 
    tools: "HTML5, CSS3, Javascript, React.js", 
    image: "././images/restartdrip.png", 
    liveDemo: "https://www.restartdrip.com", 
    repo: "Private Repository", 
  },
  {
    title: "AWS Image Recognition Pipeline",
    description: "An image recognition pipeline using EC2 instances, AWS S3, and AWS Rekognition for parallel car detection and text extraction with integrated AWS SQS for distributed computing",
    tools: "AWS, Java, API",
    image: "././images/aws.png", 
    liveDemo: "#", 
    repo: "https://github.com/3amberloaf/AWSImageRecognition", 
  },
  {
    title: "Email Phishing Detection",
    description: "A phishing detection model using Python analysis and multiple datasets with TF IDF feature extraction.",
    tools: "Python, Machine Learning, Pandas, Statistical Programming, Kaggle",
    image: "././images/spam.jpg", 
    liveDemo: "https://www.kaggle.com/code/amberrosemiso/email-phishing", 
    repo: "https://github.com/3amberloaf/Pandas.git", 
  },
  {
    title: "Pandas Data Analysis Project",
    description: "Data analysis techniques using Pandas for data manipulation and visualization.",
    tools: "Python, Pandas, Tableau, Matplotlib",
    image: "././images/pandas.jpg", 
    liveDemo: "#", 
    repo: "https://github.com/3amberloaf/Pandas.git", 
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
      <h1 className="title">Projects</h1>
      <div className="project-container">
        {/* left side: project image */}
        <div className="project-image-container">
          <img src={currentProject.image} alt={currentProject.title} className="project-image" />
        </div>

        {/* right side: project info */}
        <div className="project-info-container">
          <h2>{currentProject.title}</h2>
          <p>{currentProject.description}</p>
          <p><strong>Tools:</strong> {currentProject.tools}</p>
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
