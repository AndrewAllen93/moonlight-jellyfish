import React from "react";


function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Dirty Shoes",
      image: "src/images/dirty-shoes.jpeg",
      description: "A brief description of the first project.",
    },
    {
      id: 2,
      title: "ProBlogger",
      image: "src/images/ProBlogger-logos.jpeg",
      description: "A brief description of the second project."
    },
    // Add more projects as needed
  ];

  return (
    <div style={{ fontFamily: "Poppins", color: "#333", padding: "20px" }}>
      <h1>Portfolio</h1>
      <p>
        Welcome to my portfolio page! Here, you can explore a showcase of my
        recent projects. I'm passionate about creating digital solutions, and
        each project reflects my dedication to craftsmanship and innovation.
      </p>
      <p>
        Feel free to take a look around and get a glimpse of my skills and
        creativity. If you have any questions or feedback, I'd love to hear from
        you. Enjoy your visit!
      </p>

      {/* Portfolio Section */}
      <h2>Recent Projects</h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {projects.map((project) => (
          <div key={project.id} style={{ margin: "10px", width: "300px" }}>
            <img
              src={project.image}
              alt={project.title}
              style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" }}
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
