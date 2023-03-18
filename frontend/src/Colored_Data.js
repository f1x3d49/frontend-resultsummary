import React from "react";

const ColoredData = ({ category, score, icon }) => {
  return (
    <div className="flex  w-full h-5">
      <img src={icon} alt="icon" />
      <h1>{category}</h1>
      <p>
        <b>{score}</b> / 100
      </p>
    </div>
  );
};

export default ColoredData;
