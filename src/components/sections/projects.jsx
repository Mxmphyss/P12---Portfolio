import React, { useState } from "react";
import data from "@data";
import Modal from "@features/modal";

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
  
    const openModal = (project) => {
        setSelectedProject({ ...project, type: "project" });
    };
    
    return (
        <section className="projects">
            <h2>Mes Projets</h2>
            <div className="project-grid">
                {data.projects.map((project) => (
                    <div 
                        key={project.id} 
                        className="project-card" 
                        onClick={() => openModal(project)}
                    >
                        <img src={project.image.icon} alt={project.forAlt} />
                    </div>
                ))}
            </div>
    
            {selectedProject && (
                <Modal 
                    item={selectedProject} 
                    onClose={() => setSelectedProject(null)} 
                    linkText="Voir sur Github"
                />
            )}
        </section>
    );
}

export default Projects;