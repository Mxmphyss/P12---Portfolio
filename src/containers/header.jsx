import React, { useEffect, useState } from "react";
import "@styles/containers/_header.scss";

const sections = ["presentation", "technologies", "projects", "contact"];

const Header = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        observer.observe(sectionElement);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header>
      <h1 className="title">Mon Portfolio</h1>
      <nav className="navbar">
        <ul>
          {sections.map((section) => (
            <li key={section} className={activeSection === section ? "active" : ""}>
              <span className="indicator"></span>
              <a href={`#${section}`}>{section.toUpperCase()}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;