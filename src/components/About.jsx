import React, { useContext } from "react";
import { LangContext } from "../context/LangContext";

const About = () => {
  const { french } = useContext(LangContext);

  return (
    <section
      id="about"
      className="py-40 lg:h-screen lg:py-0 flex flex-col gap-16 justify-center items-center text-center"
    >
      <div>
        <h2>{french ? "A Propos" : "About"}</h2>
      </div>
      <div className="md:max-w-[80%]">
        {/* About text */}
        <div>
          <p className="mb-2">
            {french
              ? "Je m'appelle Aurélien, j'ai 35 ans et je vis actuellement aux Sables d'Olonne, en France."
              : "Hi, my name is Aurélien, i'm 35 years old and i'm currently located in Les Sables d'Olonne, France."}
          </p>
          <p className="mb-2">
            {french
              ? "J'ai découvert le monde de la programmation début 2021 et j'ai tout de suite accroché. J'ai alors pris la décision d'apprendre le plus rapidement et le plus efficacement possible tout ce que je pouvais sur le développement Web. J'ai choisi le language JavaScript qui me permet de gérer à la fois la partie Front et Back."
              : " I discovered the world of programming at the start of 2021 and i was immediately hooked into it. Since then i decided to learn quickly and effectively everything i could about web developement. I chose the JavaScript language allowing me to do both Front and Back End."}
          </p>
          <p className="mb-2">
            {french
              ? "Aujourd'hui, je consacre 100% de mon énergie à poursuivre une carrière dans le développement Web."
              : " From now on, my goal is to pursue a career as a Front End Developer as i see a lot of opportunities especially with the rise of web 3.0."}
          </p>
          <p className="mb-10">
            {french
              ? "Quand je ne suis pas en train de coder, on peut me trouver sur un parcours de golf, en train de regarder un film de science fiction ou d'en apprendre plus sur une civilisation ancienne."
              : " When i'm not improving my coding skills, you can find me on a golf course, watching science fiction movies or learning about ancient civilizations."}
          </p>
          <a
            href="/#projects"
            className="px-4 py-2 border rounded-sm border-secondary bg-secondary text-white shadow-xl hover:bg-primary hover:text-accent transition ease-in duration-200"
          >
            {french
              ? "Voir mes derniers projets"
              : "Check out some of my latest projects."}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
