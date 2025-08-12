import React from 'react';

function Projects() {
  const projects = [
    {
      title: "Library App",
      description: "A React app with full CRUD functionality using JSON Server for managing a digital library.",
      
      demo: "https://library-app-ecmu.vercel.app/"
    },
    {
      title: "Expense Tracker",
      description: "An Expense Tracker application built with React, using local storage to persist Expense.",
      
      demo: "https://expense-tracker-app-1-three.vercel.app/"
    },
    {
      title: "Film Review App",
      description: "A full-stack application for film enthusiasts to review and discuss movies, built with React and Flask.",
      
      demo: "https://film-fanatics-frontend.onrender.com/"


    }
  ];

  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-buttons">
              
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn primary">
                View Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
