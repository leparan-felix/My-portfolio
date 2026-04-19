import React from "react";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1>
            Hello, I'm <span className="highlight">Felix Leparan</span>
          </h1>
          <h2>Full-Stack Developer & Content Creator</h2>
          <p className="hero-intro">
            I design and build scalable web applications with a focus on clean
            code, great user experiences, and modern development tools. I’m
            passionate about learning new technologies, improving my skills, and
            working with talented teams to deliver impactful solutions.
          </p>

          {/* Three Service Cards */}
          <div className="hero-cards">
            <div className="card">
              <div className="card-icon">🌐</div>
              <h3>Web & App Development</h3>
              <p>Responsive, high-performance applications built with React, Next.js, and modern frontend ecosystems.</p>
            </div>
            <div className="card">
              <div className="card-icon">⚙️</div>
              <h3>Backend & API Solutions</h3>
              <p>Scalable server architectures, secure REST/GraphQL APIs, and optimized database design.</p>
            </div>
            <div className="card">
              <div className="card-icon">📝</div>
              <h3>Tech Content & Strategy</h3>
              <p>Clear documentation, technical writing, and developer-focused content that educates and converts.</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Let's Work Together</a>
            <a href="#projects" className="btn btn-secondary">View My Work</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;