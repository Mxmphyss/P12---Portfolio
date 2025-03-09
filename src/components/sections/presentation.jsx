import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import BouncingBalls from "@containers/bouncingsBalls";

const Presentation = () => {
  const sectionColor = useSelector((state) => state.theme.sectionColor);

  return (
    <section className="presentation dynamic-section" style={{ backgroundColor: sectionColor }}>
      <div className="background-effect2"></div>
      <motion.div
        className="presentation-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="titleBox">
          <h1>Bienvenue sur mon Portfolio</h1>
          <p>Développeur passionné spécialisé en React</p>
        </div>

        <BouncingBalls />

      </motion.div>
    </section>
  );
};

export default Presentation;