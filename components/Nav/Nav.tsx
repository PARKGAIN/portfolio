import React, { useState, useEffect } from "react";
import "../Nav/Nav.css";

const Nav = ({ isMobile }: any) => {
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    const scrollPosition = window.pageYOffset;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (scrollPosition >= sectionTop - sectionHeight / 3) {
        setActiveSection(section.getAttribute("id") || "");
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="nav_container">
      <ul className="flex">
        <li className={activeSection === "" ? "active" : ""}>
          <a href="#" className={isMobile ? "mobile" : ""}>
            Home
          </a>
        </li>
        <li className={activeSection === "projects" ? "active" : ""}>
          <a href="#projects" className={isMobile ? "mobile" : ""}>
            Projects
          </a>
        </li>
        <li className={activeSection === "about" ? "active" : ""}>
          <a href="#about" className={isMobile ? "mobile" : ""}>
            About
          </a>
        </li>
        <li className={activeSection === "contact" ? "active" : ""}>
          <a href="#contact" className={isMobile ? "mobile" : ""}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
