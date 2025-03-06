import React from "react";
import { motion } from "framer-motion";

const Presentation = () => {
  return (
    <section className="presentation">
      <motion.div
        className="presentation-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Bienvenue sur mon Portfolio</h1>
        <p>Développeur passionné spécialisé en React</p>
      </motion.div>
    </section>
  );
};

export default Presentation;