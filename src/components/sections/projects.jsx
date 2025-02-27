import React, { useState } from "react";
import data from "@data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faTimes } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % data.projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + data.projects.length) % data.projects.length
    );
  };

  return (
    <section className="projects">
      <h2>Mes Projets</h2>

      <div className="project-slider">
        <div className="project-item">
          <div className="project-header">
            <img
              src={data.projects[currentIndex].image.icon}
              alt={`${data.projects[currentIndex].name} Icon`}
              className="project-icon"
            />
          </div>

          <button className="project-button" onClick={() => setSelectedProject(data.projects[currentIndex])}>
            <img
              src={data.projects[currentIndex].image.desktop}
              alt={data.projects[currentIndex].name}
              className="project-image"
            />
          </button>
        </div>
      </div>
      <button className="nav-button left" onClick={handlePrev}>
        <FontAwesomeIcon className="chevron" icon={faChevronLeft} />
      </button>
      <button className="nav-button right" onClick={handleNext}>
        <FontAwesomeIcon className="chevron" icon={faChevronRight} />
      </button>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <img src={selectedProject.image.icon} alt={`${selectedProject.name} Icon`} className="modal-icon" />
            <h3>{selectedProject.name}</h3>
            <p>{selectedProject.description}</p>
            <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
              Voir sur GitHub
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;