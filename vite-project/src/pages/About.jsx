import React from "react";

function AboutMe() {
  return (
    <div
      style={{
        fontFamily: "Poppins",
        color: "#fff",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <img class="photo" src="../src/images/IMG_0198.JPG" alt="" />
      <h2 style={{ fontSize: "30px", paddingBottom: "10px" }}>Andrew Allen</h2>
      <div>
        <p>
          Hello! I'm Andrew, a dedicated husband and father of two wonderful
          girls. Family is at the center of my world, and I cherish the joy and
          warmth they bring to my life.
        </p>
      </div>
      <div>
        <p>
          By day, I'm a passionate full-stack web developer, crafting digital
          solutions and bringing ideas to life. I thrive on the challenges and
          creative problem-solving that come with the world of coding.
        </p>
      </div>
      <div>
        <p>
          When I'm not immersed in lines of code, you'll often find me
          surrounded by the beats and melodies of my favorite music. Music is
          more than a hobby for me; it's a source of inspiration and a way to
          unwind after a day of coding.
        </p>
      </div>
      <div>
        <p>
          I believe in the power of technology to make a positive impact, and
          I'm excited about the endless possibilities that web development
          offers. Let's connect, collaborate, and build something amazing
          together!
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
