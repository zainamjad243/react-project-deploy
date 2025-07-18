import React from "react";
import "./Project.css";

const projects = [
  { title: "Quiz App", image: "1.jpg" },
  { title: "Spotify Cloning", image: "2.jpg" },
  { title: "Coffee Shop Website", image: "3.jpg" },
  { title: "Password Generation", image: "4.jpg" },
  { title: "Color Generator", image: "5.jpg" },
  { title: "Digital Clock", image: "6.jpg" },
];

function Project() {
  return (
    <section className="project-section">
      <h2 className="project-title">My Projects</h2>
      <div className="project-list">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-card-title">{project.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project; 