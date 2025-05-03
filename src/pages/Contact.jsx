import React, { useState } from 'react';

function Contact() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    const email = e.target.email.value;

    if (!email.endsWith("@gmail.com")) {
      e.preventDefault(); // Stop default submit
      setError("Only @gmail.com email addresses are allowed.");
      setSuccess("");
    } else {
      setError("");
      setSuccess("Message sent successfully!");
      // Let the form submit naturally to Formspree
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p>If you'd like to work together or have any questions, feel free to reach out!</p>

      <div className="contact-info">
        <p><strong>Email:</strong> sopiafelix405@gmail.com</p>
        <p><strong>Phone:</strong> +254-705-156-999</p>
        <p><strong>Location:</strong> Nairobi, Kenya</p>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}

      <form
        className="contact-form"
        onSubmit={handleSubmit}
        action="https://formspree.io/f/YOUR_FORM_ID"  
        method="POST"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
