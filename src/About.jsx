import React, { useState, useEffect } from "react";
import { FaCog } from "react-icons/fa";
import "./About.css";

const titles = ["Web Developer.", "Web Designer.", "Frontend Developer."];

function About() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    const currentTitle = titles[titleIndex];
    if (typing) {
      if (displayed.length < currentTitle.length) {
        timeout = setTimeout(() => {
          setDisplayed(currentTitle.slice(0, displayed.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setTyping(false), 1200);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 40);
      } else {
        setTyping(true);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, titleIndex]);

  return (
    <section className="about-section" id="about-section">
      <div className="about-left">
        <h1>Hi! I&apos;m Zain Amjad</h1>
        <h2>
          I&apos;m a <span className="highlight-logo-color">{displayed}</span>
        </h2>
        <p>
          I am a passionate web developer specializing in modern, responsive, and interactive web applications. I love building beautiful user experiences and solving real-world problems with code.
        </p>
      </div>
      <div className="about-right">
        <div className="about-animation-dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </section>
  );
}

export default About; 