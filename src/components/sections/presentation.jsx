import React from "react";
import { motion } from "framer-motion";

const Presentation = () => {

  return (
    <section className="presentation dynamic-section">
      <div className="background-effect2"></div>
      <motion.div
        className="presentation-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="titleBox">
          <h1>Bienvenue sur mon Portfolio</h1>
          <p>Je suis Développeur web, spécialisé en React</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Presentation;