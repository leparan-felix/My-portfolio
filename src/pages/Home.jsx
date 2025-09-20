import React from "react";
import passport from "../assets/Screenshot from 2025-04-29 12-54-45.png";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        {/* Profile Picture */}
        <div className="hero-image">
          <img src={passport} alt="Felix Leparan" />
        </div>

        {/* Text Content */}
        <div className="hero-text">
          <h1>Hello, I'm <span className="highlight">Felix Leparan</span></h1>
          <h2>Software Engineer</h2>
          <p>
            I design and build scalable web applications with a focus on clean
            code, great user experiences, and modern development tools.
            I’m passionate about learning new technologies, improving my skills,
            and working with talented teams to deliver impactful solutions.
          </p>

          <div className="hero-buttons">
            {/* <a href="projects" className="btn primary">View My Work</a> */}
            <a href="contact" className="btn secondary">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
