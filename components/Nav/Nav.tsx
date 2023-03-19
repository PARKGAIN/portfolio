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
    <div className="nav">
      <ul className="flex">
        <li className={activeSection === "home" ? "active" : ""}>
          <a href="#home">Home</a>
        </li>
        <li className={activeSection === "about" ? "active" : ""}>
          <a href="#about">Projects</a>
        </li>
        <li className={activeSection === "services" ? "active" : ""}>
          <a href="#services">About</a>
        </li>
        <li className={activeSection === "contact" ? "active" : ""}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
