import React, { useState } from "react";
import Modal from "../features/modal";
import data from "@data";

const Technologies = () => {
    const [selectedTech, setSelectedTech] = useState(null);

    const openModal = (tech) => {
        setSelectedTech({ ...tech, type: "technology" });
    };

    return (
        <section className="technologies">
            <h2>Technologies maîtrisées</h2>
            <div className="tech-list">
                {data.technologies.map((tech) => (
                    <button 
                        className="itemTech" 
                        key={tech.name} 
                        onClick={() => openModal(tech)}
                    >
                        <img src={tech.image} alt={tech.name} loading="lazy"/>
                    </button>
                ))}
            </div>

            {selectedTech && (
                <Modal 
                    item={selectedTech} 
                    onClose={() => setSelectedTech(null)} 
                    linkText="En savoir plus"
                />
            )}
        </section>
    );
};

export default Technologies;