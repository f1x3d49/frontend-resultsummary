import React from "react";
import { Styleddiv } from "./components/styledDiv";

const ColoredData = ({ category, score, icon, colour }) => {
  return (
    <Styleddiv
      longValue={colour}
      className="flex justify-between w-52 h-full p-2 rounded-lg"
    >
      <div className="flex gap-2">
        <img src={icon} alt="icon" />
        <h1>{category}</h1>
      </div>
      <p>
        <b>{score}</b> / 100
      </p>
    </Styleddiv>
  );
};

export default ColoredData;
