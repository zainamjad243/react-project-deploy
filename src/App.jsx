import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import Project from "./Project";
import Skill from "./Skill";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Project />
      <Skill />
      <Contact />
      <Footer />
      <div>
        {/* Portfolio content will go here */}
      </div>
    </>
  );
}

export default App;
