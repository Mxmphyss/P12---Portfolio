import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faHome, faProjectDiagram, faEnvelope, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1100);

  const iconSave = "<FontAwesomeIcon icon={icon} />";


  const sections = [
    { id: "aboutMe", name: "À propos de moi", icon: faCircleUser},
    { id: "technologies", name: "Technologies", icon: faLaptopCode },
    { id: "projects", name: "Projets", icon: faProjectDiagram },
    { id: "contact", name: "Contact", icon: faEnvelope },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1100);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {!isMobile ? (
        <header>
          <h1 className="title">Prauca Samuel</h1>
          <nav className="navbar">
            <ul>
              {sections.map(({ id, name }) => (
                <li key={id}>
                  <a href={`#${id}`}>{name}</a>
                </li>
              ))}
            </ul>
          </nav>
        </header>
      ) : (
        <nav className="bottom-nav">
          <ul>
            {sections.map(({ id, icon }) => (
              <li key={id}>
                <a href={`#${id}`}>
                  <FontAwesomeIcon icon={icon} />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};

export default Header;