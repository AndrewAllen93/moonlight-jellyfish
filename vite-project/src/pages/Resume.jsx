import React from "react";

export default function Resume() {
  return (
    <div style={{ fontFamily: "Poppins", color: "#fff", padding: "20px" }}>
      <h1>Resume</h1>

      <section>
        <h2>Personal Information</h2>
        <p>Name: Andrew Allen</p>
        <p>Email: allenkandrew@gmail.com</p>
        <p>Phone: (704)-420-5433</p>
        <p>Address: 2006 Planters Knoll Dr, Monroe NC 28110</p>
      </section>

      <section>
        <h2>Education</h2>
        <p>
          High school Diploma from Andrew Jackson High school
          <br />
          Full-Stack Coding Certificate from UNC Charlotte Bootcamp
        </p>
      </section>

      <section>
        <h2>Work Experience</h2>
        <p>
          Assistant General Manager
          <br />
          Sherwin Williams Paint Company, 2022-2023
          <br />
          Atria Senior Living formerly Holiday Retirement, 2016-2021
        </p>
      </section>

      <section>
        <h2>Skills</h2>
        <p>
          JavaScript (React, Node.js)
          <br />
          HTML, CSS
          <br />
          Database Management (MySQL, MongoDB)
        </p>
      </section>

      <section>
        <h2>Projects</h2>
        <p>
          ProBlogger Blogging Platform
          <br />
          Dirty Shoes Hiking Trail Finder
        </p>
      </section>

      <section>
        <h2>Certifications</h2>
        <p>
          Full-Stack Coding Certificate
          <br />
          UNC Charlotte Bootcamp, 2023
        </p>
      </section>

      {/* Link to PDF */}
      <a href="https://drive.google.com/file/d/1oOYxco8T_d77PflMIDB_i9H9Rp66we_C/view?usp=drive_link" target="_blank">
        <img src="/images/Resume-logos_white.png" alt="Link to Resume PDF" />
</a>
    </div>
  );
}
