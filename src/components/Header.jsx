import React, { useContext } from "react";
import { LangContext } from "../context/LangContext";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  const { french } = useContext(LangContext);
  return (
    <header
      id="header"
      className="mt-20 lg:mt-0 lg:h-screen text-center flex flex-col items-center justify-center gap-12 relative"
    >
      {/* Header Text */}
      <div className="flex flex-col items-center">
        <h4>
          {french
            ? "Transformer votre projet web en réalité"
            : "Making Your Web Project a Reality"}
        </h4>

        <h1 className="py-4">
          <span className="text-accent">Aurélien</span>
          <br />
          Front-End Developer
        </h1>

        {french ? (
          <p className="text-lg py-4 sm:max-w-[70%] m-auto">
            En utilisant mon expertise en Next.js et React, je crée des
            applications web user-friendly et performantes qui visent à obtenir
            des résultats concrets, tout en répondant aux besoins et objectifs
            spécifiques de mes clients.
          </p>
        ) : (
          <p className="text-lg py-4 sm:max-w-[70%] m-auto">
            Using my expertise in Next.js and React, I craft engaging,
            user-friendly web applications aimed at achieving real-world
            results, all with the goal of meeting the specific needs and
            objectives of my clients.
          </p>
        )}
      </div>

      {/* Header Img (Portrait) */}
      <div className="rounded-[50%] border-[5px] border-accent flex justify-center items-center">
        <img
          className="rounded-[50%] w-[240px] h-[240px]"
          src="/portrait.jpg"
          alt="my portrait"
          width="240"
          height="240"
        />
      </div>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row gap-8 items-center">
        <div className="flex gap-6 items-center border border-secondary rounded-lg p-4">
          <p className="text-accent">
            {french ? "Télécharger CV" : "Download CV"}
          </p>
          <a
            className="hover:scale-110 transition ease-in duration-400"
            href="/cv-en.pdf"
            download
          >
            <img
              className="w-full max-w-[32px]"
              src="us-flag.png"
              alt="American Flag"
            />
          </a>
          <a
            className="hover:scale-110 transition ease-in duration-400"
            href="/cv-fr.pdf"
            download
          >
            <img
              className="w-full max-w-[32px]"
              src="french-flag.png"
              alt="Drapeau Français"
            />
          </a>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-5 text-accent">
          <a
            className="hover:scale-125 transition ease-in duration-400"
            href="https://www.linkedin.com/in/aur%C3%A9lien-bedouet/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin size={32} />
          </a>
          <a
            className="hover:scale-125 transition ease-in duration-400"
            href="https://github.com/AurelienBedouet"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={32} />
          </a>
        </div>
      </div>

      {/* Scroll Down Button */}
      <div className="hidden md:block absolute top-[66%] right-0 transform rotate-90 text-accent">
        <a href="/#about">Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;
