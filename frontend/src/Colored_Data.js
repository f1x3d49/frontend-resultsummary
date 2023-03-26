import React from "react";
import { Styleddiv } from "./components/styledDiv";
import { Name } from "./components/customHeader";

const ColoredData = ({ category, score, icon, colour, text }) => {
  return (
    <Styleddiv
      longValue={colour}
      className="flex justify-between w-52 h-full p-2 rounded-lg"
    >
      <div className="flex gap-2">
        <img src={icon} alt="icon" />
        <Name TColor={text}>{category}</Name>
      </div>
      <p className="text-base font-thin text-[#a0a0a0]">
        <span className="font-bold text-dgray-blue">{score}</span> / 100
      </p>
    </Styleddiv>
  );
};

export default ColoredData;
