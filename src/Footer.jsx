import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaArrowUp } from "react-icons/fa";
import "./Footer.css";

const socialLinks = [
  { href: "https://github.com/zainamjad243", icon: <FaGithub />, label: "GitHub" },
  { href: "https://www.facebook.com/profile.php?id=61563478320086", icon: <FaFacebook />, label: "Facebook" },
  { href: "https://www.linkedin.com/in/muhammad-zain-amjad-3b63aa214/", icon: <FaLinkedin />, label: "LinkedIn" },
  { href: "https://www.instagram.com/zainamjad243?igsh=MWIxNTZ0bGtva2JlcQ==", icon: <FaInstagram />, label: "Instagram" },
];

function Footer() {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="footer-section">
        <div className="footer-social-links footer-social-center">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="footer-icon-link"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <div className="footer-copy">&copy; {new Date().getFullYear()} Zain Amjad. All rights reserved.</div>
      </footer>
      <button className="footer-fixed-top-btn" onClick={handleBackToTop} aria-label="Back to top">
        <FaArrowUp />
      </button>
    </>
  );
}

export default Footer; 