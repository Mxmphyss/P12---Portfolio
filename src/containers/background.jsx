import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

const Background = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouseX(e.clientX / window.innerWidth - 0.5);
      setMouseY(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="background">
      <motion.div 
        className="stars"
        animate={{ opacity: [0, 1], y: [-10, 10] }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
      />

      <motion.div
        className="nebula"
        style={{
          transform: `translate(${mouseX * 50}px, ${mouseY * 50}px)`,
        }}
      />
      
      <Parallax className="transition-overlay" speed={-10} />
    </div>
  );
};

export default Background;