import React from "react";
import passport from "../assets/Screenshot from 2025-04-29 12-54-45.png"; 

function Hero() {
  const phoneNumber = "254705156999";
  const cvLink =
    "https://docs.google.com/document/d/1HeUkUyCHvEjSgx53fz3AZNvYr9_80LTCv5gKLx1WoBk/edit?tab=t.0";

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <img
          src={passport}
          alt="Felix Leparan"
          className="profile-pic"
        />
        <h1>Hello, I'm Felix Leparan</h1>
        <h2>Software Engineer</h2>
        <p>
          I design and build scalable web applications with a focus on clean
          code, great user experiences, and modern development tools. I am
          passionate about learning new technologies and improving my skills.
          I am currently looking for opportunities to work on exciting projects
          and collaborate with talented teams.
        </p>
        <div className="hero-buttons">
        
          <a href={`tel:+${phoneNumber}`} className="btn secondary">
            Call Me
          </a>
          <a
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn primary"
          >
            WhatsApp Me
          </a>
         
        </div>
      </div>
    </section>
  );
}

export default Hero;
