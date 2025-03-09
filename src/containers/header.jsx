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
            <a href="#aboutMe">
              <FontAwesomeIcon icon={faCircleUser} />
            </a>
          </li>
          {sections.map((section) => (
              <li key={section}>
                <a href={`#${section}`}>
                  {section.toUpperCase()}
                </a>
              </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;