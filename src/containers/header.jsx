import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const sections = ["technologies", "projects", "contact"];

const Header = () => {

  return (
    <header>
      <h1 className="title">Mon Portfolio</h1>
      <nav className="navbar">
        <ul>
          <li className="user">
            <a href="#presentation">
              <FontAwesomeIcon icon={faCircleUser} />
            </a>
          </li>
          {sections.map((section) => (
            <a href={`#${section}`}>
              <li key={section}>
                {section.toUpperCase()}
              </li>
            </a>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;