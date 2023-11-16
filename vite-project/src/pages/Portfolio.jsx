import React from "react";


function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Dirty Shoes",
      image: "src/images/Dirty Shoes-logos.jpeg",
      description: "A trail finder website using trail finder api",
      url: "https://philipthomas05.github.io/UNCC-Bootcamp-Project-1/"
    },
    {
      id: 2,
      title: "ProBlogger",
      image: "src/images/ProBlogger-logos.jpeg",
      description: "A blogging website for users to post and comment on blogs.",
      url: "https://salty-harbor-60535-ddd4d167e28a.herokuapp.com/"
    },
    {
      id: 3,
      title: "Work Day Scheduler",
      image: "src/images/Work Day Scheduler-logos.jpeg",
      description: "A work day scheduler that allows users to save events for each hour of the day.",
      url: "https://andrewallen93.github.io/fictional-waffle/"
    },
    {
      id: 4,
      title: "SVG Generator",
      image: "src/images/SVG Generator-logos.jpeg",
      description: "A SVG Generator that allows users to create SVGs and save them to their computer.",
      url: "https://github.com/AndrewAllen93/friendly-chainsaw/tree/main"
    },
    {
      id: 5,
      title: "5-Day Weather Forecast",
      image: "src/images/Forecast-logos.jpeg",
      description: "A 5-day weather forecast that allows users to search for a city and get the current weather and 5-day forecast.",
      url: "https://andrewallen93.github.io/automatic-waffle/"
    },
    {
      id: 6,
      title: "Note Taker",
      image: "src/images/Note Taker-logos.jpeg",
      description: "A note taker that allows users to create, save, and delete notes.",
      url: "https://obscure-thicket-86208-5802e581c9cd.herokuapp.com/"
    }
    // Add more projects as needed
  ];

  return (
    <div style={{ fontFamily: "Poppins", color: "#fff", padding: "20px" }}>
      <h1>Portfolio</h1>
      <style>
        {`
          a {
            color: inherit;
            text-decoration: none;
          }
        `}
      </style>
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
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.title}
                style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" }}
              />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
