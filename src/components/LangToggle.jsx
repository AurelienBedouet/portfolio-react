import React, { useContext } from "react";
import { LangContext } from "../context/LangContext";

const LangToggle = () => {
  const { french, setFrench } = useContext(LangContext);
  const handleChange = () => {
    setFrench(prevState => !prevState);
  };

  return (
    <div onClick={handleChange} className="p-2 cursor-pointer">
      <img
        className="w-full max-w-[32px]"
        src={french ? "us-flag.png" : "french-flag.png"}
        alt={french ? "American Flag" : "Drapeau Français"}
      />
    </div>
  );
};

export default LangToggle;
