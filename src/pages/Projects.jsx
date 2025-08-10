import React from 'react';


function Projects() {
  const projects = [
    {
      title: "Library App",
      description: "A React app with full CRUD functionality using JSON Server for managing a digital library.",
      link: "https://github.com/leparan-felix/Library-app.git"
    },
    {
      title: "Expense Tracker",
      description: "A Expense Tracker application built with React, using local storage to persist Expense.",
      link: "https://github.com/leparan-felix/expense-tracker.git"
    },
    {
      title: "Notes App",
      description: "Fetches real-time Notes data using an external API and displays it using clean UI components.",
      link: "https://github.com/leparan-felix/Notes-app.git"
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
            {/* <a href={project.link} target="" rel="">View on GitHub</a> */}
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn primary"> view demo</a>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
