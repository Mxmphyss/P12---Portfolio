import React from "react";
import { useSelector } from "react-redux";

const Background = () => {
  const backgroundColor = useSelector((state) => state.theme.color);

  return (
    <div className="background-container" style={{ backgroundColor }}>
      <div className="background-effect"></div>
    </div>
  );
};

export default Background;