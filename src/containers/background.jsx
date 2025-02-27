import React, { useEffect, useState } from "react";
import "../styles/base/_global.scss";

const Background = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);

      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = position / maxScroll;

      const hue = Math.round(percentage * 360); // Variation de couleur (0° à 360°)
      document.documentElement.style.setProperty("--bg-color", `hsl(${hue}, 80%, 20%)`);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <div className="background-overlay"></div>;
};

export default Background;