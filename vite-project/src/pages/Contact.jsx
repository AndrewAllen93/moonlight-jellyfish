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
    <div style={{ fontFamily: "Poppins", color: "#fff", padding: "20px" }}>
      <h1>Contact Me</h1>
      <p>
        Feel free to reach out to me through the following social media accounts:
      </p>

      

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
