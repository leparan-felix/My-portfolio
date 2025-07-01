import React from 'react';
import passport from '../assets/Screenshot from 2025-04-29 12-54-45.png'; 

function Home() {
  return (
    
    <div className="home-container">
      
      
      <div className="home-content">
        
        <img src={passport} alt="Felix Leparan" className="passport-image" />
        <div className="text-section">
          <h1>Hello, I'm Felix Leparan</h1>
          <h2>Software Engineer</h2>
          <p>
            I design and build scalable web applications with a focus on clean code, great user experiences, and modern development tools. 
            I am passionate about learning new technologies and improving my skills. I am currently looking for opportunities to work on exciting projects and collaborate with talented teams.
            
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
