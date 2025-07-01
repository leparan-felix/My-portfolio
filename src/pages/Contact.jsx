import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // Gmail check
    if (!email.endsWith("@gmail.com")) {
      setError("Only @gmail.com email addresses are allowed.");
      setSuccess("");
      return;
    }

    try {
      const res = await fetch("https://your-backend-service.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(data.message);
        setError("");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError("Failed to send message.");
        setSuccess("");
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
      setSuccess("");
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

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
