import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can add your email sending logic here when ready
  };

  return (
    <div style={{ fontFamily: "Poppins", color: "#333", padding: "20px" }}>
      <h1>Contact Me</h1>
      <p>
        Feel free to reach out to me through the following social media accounts:
      </p>

      {/* Social Media Links */}
      <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
        <a
          href="https://www.linkedin.com/in/andrew-allen-9ba774297/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "#0077B5" }}
        >
          LinkedIn
        </a>
        <a
          href="https://twitter.com/allenkandrew1"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "#1DA1F2" }}
        >
          Twitter
        </a>
        <a
          href="https://github.com/AndrewAllen93"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "#333" }}
        >
          GitHub
        </a>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message" value={formData.message} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
