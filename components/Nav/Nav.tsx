import React, { useState, useEffect } from "react";
import "../Nav/Nav.css";

const Nav = () => {
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
          <a href="#">Home</a>
        </li>
        <li className={activeSection === "projects" ? "active" : ""}>
          <a href="#projects">Projects</a>
        </li>
        <li className={activeSection === "about" ? "active" : ""}>
          <a href="#about">About</a>
        </li>
        <li className={activeSection === "contact" ? "active" : ""}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
