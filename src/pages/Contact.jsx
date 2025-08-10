import React from "react";

function Contact() {
  const phoneNumber = "254705156999";
  const email = "sopiafelix405@gmail.com";

  return (
    <section id="contact" className="contact-section">
      <h3>Contact Me</h3>
      <p>
        <strong>Email:</strong>{" "}
        <a href={`mailto:${email}`} className="contact-link">
          {email}
        </a>
      </p>
      <div className="contact-buttons">
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
    </section>
  );
}

export default Contact;
