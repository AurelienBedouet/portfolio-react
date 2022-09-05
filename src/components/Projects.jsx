import React, { useContext } from "react";
import { LangContext } from "../context/LangContext";
import { projectsData } from "../data";

const Projects = () => {
  const { french } = useContext(LangContext);

  return (
    <section
      id="projects"
      className="py-20 flex flex-col justify-center items-center gap-16 text-center"
    >
      <div>
        <h2>{french ? "Projets" : "Projects"}</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projectsData.map(({ id, title, img, tech, github, demo }) => (
          <div
            key={id}
            className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-primaryGradient"
          >
            <img
              className="rounded-xl group-hover:opacity-10"
              src={img}
              alt={title}
              width="680"
              height="440"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h2 className="text-3xl text-white tracking-wider text-center">
                {title}
              </h2>
              <p className="my-8 text-white text-center text-xl">{tech}</p>

              <div className="flex gap-4 items-center justify-center">
                <a
                  href={demo}
                  className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer hover:scale-105 transition ease-in duration-200"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
                <a
                  href={github}
                  className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer hover:scale-105 transition ease-in duration-200"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
