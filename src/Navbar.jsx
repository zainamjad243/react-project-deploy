import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaUserAstronaut } from "react-icons/fa";
import "./Navbar.css";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Projects", to: "/projects" },
  { name: "Skills", to: "/skills" },
  { name: "Contact", to: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className={`navbar-logo${menuOpen ? " hide-mobile-logo" : ""}`}>
        <FaUserAstronaut className="logo-icon" />
        {'</Zain Amjad>'}
      </div>
      <div className={`navbar-links${menuOpen ? " open" : ""}`}>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.to}
            onClick={() => setMenuOpen(false)}
            className={location.pathname === link.to ? "active" : ""}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div
        className="navbar-toggle"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle navigation menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}

export default Navbar; 