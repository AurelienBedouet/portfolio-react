import React, { useState } from "react";
import { links } from "../data";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const NavBar = () => {
  const [activeNav, setActiveNav] = useState(1);
  const [navBar, setNavBar] = useState(true);

  const toggleNav = () => {
    setNavBar(prevState => !prevState);
  };

  return navBar ? (
    <nav className="bg-navbar border max-w-max py-3 px-7 z-10 fixed left-[50%] transform translate-x-[-50%] bottom-8 flex gap-3 rounded-[3rem] marker:backdrop-blur-lg">
      {links.map(({ id, link, icon }) => (
        <a
          key={id}
          href={link}
          onClick={() => setActiveNav(id)}
          className={
            activeNav === id
              ? "bg-primary-color text-white p-3 rounded-full flex text-lg border border-secondary-color"
              : "bg-transparent p-3 rounded-full flex text-white text-lg"
          }
        >
          {icon}
        </a>
      ))}
      <button
        onClick={toggleNav}
        className="bg-transparent p-3 rounded-full flex text-white text-lg"
      >
        <AiOutlineEyeInvisible />
      </button>
    </nav>
  ) : (
    <button
      onClick={toggleNav}
      className="fixed right-2 bottom-2 z-10 bg-secondary text-white p-4 rounded-full text-lg border border-secondary-color"
    >
      <AiOutlineEye />
    </button>
  );
};

export default NavBar;
