import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-secondary py-16">
      <div className="max-w-[1240px] w-[95%] xl:w-full mx-auto flex justify-between">
        <small className="text-white">
          &copy;2022 Aurélien Bedouet. All rights reserved
        </small>

        <div className="flex gap-4 text-white">
          <a
            className="hover:scale-125 transition ease-in duration-400"
            href="https://www.linkedin.com/in/aur%C3%A9lien-bedouet/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin size={24} />
          </a>
          <a
            className="hover:scale-125 transition ease-in duration-400"
            href="https://github.com/AurelienBedouet"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
