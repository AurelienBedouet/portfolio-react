import React from "react";
import ThemeToggle from "./ThemeToggle";
import LangToggle from "./LangToggle";

const TopBar = () => {
  return (
    <div className="w-full bg-secondary">
      <div className="px-4 max-w-[1240px] mx-auto w-full flex justify-between">
        <div>
          <ThemeToggle />
        </div>
        <div>
          <LangToggle />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
