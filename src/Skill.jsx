import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiMysql } from "react-icons/si";
import "./Skill.css";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="skill-icon html" /> },
  { name: "CSS", icon: <FaCss3Alt className="skill-icon css" /> },
  { name: "JavaScript", icon: <FaJs className="skill-icon js" /> },
  { name: "React JS", icon: <FaReact className="skill-icon react" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="skill-icon tailwind" /> },
  { name: "MySQL Database", icon: <SiMysql className="skill-icon mysql" /> },
];

function Skill() {
  return (
    <section className="skill-section">
      <h2 className="skill-title">My Skills</h2>
      <div className="skill-list">
        {skills.map((skill) => (
          <div className="skill-item" key={skill.name}>
            {skill.icon}
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skill; 