import React from "react";
import passport from "../assets/Screenshot from 2025-04-29 12-54-45.png"; 
// import Contact from "./Contact"; // adjust path if needed

function Hero() {
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
        {/* Removed buttons from here */}

        {/* Insert Contact component here */}
        {/* <Contact /> */}
      </div>
    </section>
  );
}

export default Hero;
