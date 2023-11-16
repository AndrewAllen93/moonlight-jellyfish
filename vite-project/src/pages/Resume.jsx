import React from "react";

export default function Resume() {
  return (
    <div style={{ fontFamily: "Poppins", color: "#333", padding: "20px" }}>
      <h1>Resume</h1>

      {/* Personal Information */}
      <section>
        <h2>Personal Information</h2>
        <p>Name: Andrew Allen</p>
        <p>Email: allenkandrew@gmail.com</p>
        <p>Phone: (704)-420-5433</p>
        <p>Address: 2006 Planters Knoll Dr, Monroe NC 28110</p>
      </section>

      {/* Education */}
      <section>
        <h2>Education</h2>
        <p>
          Highschool Diploma from Andrew Jackson Highschool
          <br />
          Full-Stack Coding Certificate from UNC Charlotte Bootcamp
        </p>
      </section>

      {/* Work Experience */}
      <section>
        <h2>Work Experience</h2>
        <p>
          Assisstant General Manager
          <br />
          Sherwin Williams Paint Company, 2022-2023
          <br />
          Atria Senior Living formerly Holiday Retirement, 2016-2021
        </p>
        {/* Add more work experience entries as needed */}
      </section>

      {/* Skills */}
      <section>
        <h2>Skills</h2>
        <p>
          JavaScript (React, Node.js)<br />
          HTML, CSS<br />
          Database Management (MySQL, MongoDB)
          {/* Add more skills as needed */}
        </p>
      </section>

      {/* Projects */}
      <section>
        <h2>Projects</h2>
        <p>
          ProBlogger Blogging Platform<br />
          Dirty Shoes Hiking Trail Finder
        </p>
        {/* Add more project entries as needed */}
      </section>

      {/* Certifications */}
      <section>
        <h2>Certifications</h2>
        <p>
          Full-Stack Coding Certificate<br />
          UNC Charlotte Bootcamp, 2023
        </p>
        {/* Add more certification entries as needed */}
      </section>
    </div>
  );
}
