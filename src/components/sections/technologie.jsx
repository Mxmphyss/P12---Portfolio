import React, { useState } from "react";
import Modal from "../features/modal";
import data from "@data";

const Technologies = () => {
  const [selectedTech, setSelectedTech] = useState(null);

  const handleNext = () => {
    const currentIndex = data.technologies.findIndex((tech) => tech.name === selectedTech.name);
    setSelectedTech(data.technologies[(currentIndex + 1) % data.technologies.length]);
  };

  const handlePrev = () => {
    const currentIndex = data.technologies.findIndex((tech) => tech.name === selectedTech.name);
    setSelectedTech(data.technologies[(currentIndex - 1 + data.technologies.length) % data.technologies.length]);
  };

  return (
    <section className="technologies">
      <h2>Technologies maîtrisées</h2>
      <div className="tech-list">
        {data.technologies.map((tech) => (
          <button className="itemTech" key={tech.name} onClick={() => setSelectedTech(tech)}>
            <img src={tech.image} alt={tech.name} />
          </button>
        ))}
      </div>
      {selectedTech && (
        <Modal item={selectedTech} onClose={() => setSelectedTech(null)} onNext={handleNext} onPrev={handlePrev} />
      )}
    </section>
  );
};

export default Technologies;