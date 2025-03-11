import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faHome, faProjectDiagram, faEnvelope, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const sections = [
  { id: "aboutMe", icon: faCircleUser },
  { id: "technologies", icon: faLaptopCode },
  { id: "projects", icon: faProjectDiagram },
  { id: "contact", icon: faEnvelope },
];

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1100);

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
              {sections.map(({ id }) => (
                <li key={id}>
                  <a href={`#${id}`}>{id.toUpperCase()}</a>
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