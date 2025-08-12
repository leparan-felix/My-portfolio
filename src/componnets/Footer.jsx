// src/Footer.jsx
import React from "react";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Felix Sopia. All Rights Reserved.</p>
        <div className="social-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
         
        </div>
      </div>
    </footer>
  );
}

export default Footer;
