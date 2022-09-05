import React, { useContext } from "react";
import { HiSun, HiMoon } from "react-icons/hi";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="p-2">
      {theme === "dark" ? (
        <div
          className="text-white flex items-center cursor-pointer"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <HiSun className="text-2xl mr-2" />
        </div>
      ) : (
        <div
          className="text-white flex items-center cursor-pointer"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <HiMoon className="text-2xl mr-2" />
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
