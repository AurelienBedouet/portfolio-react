import React, { useState, useContext } from "react";
import { LangContext } from "../context/LangContext";
import { BsPatchCheckFill } from "react-icons/bs";
import {
  FaSass,
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJsSquare,
  FaReact,
} from "react-icons/fa";
import { tabs } from "../data";

const Skills = () => {
  const { french } = useContext(LangContext);
  const [currentTab, setCurrentTab] = useState("1");

  const handleTabClick = e => {
    setCurrentTab(e.target.id);
  };

  return (
    <section
      id="skills"
      className="lg:h-screen py-40 lg:py-0 text-center flex flex-col gap-16 justify-center items-center"
    >
      <div>
        <h2>{french ? "Compétences" : "Skills"}</h2>
      </div>
      <div className="w-full grid md:grid-cols-2 gap-8">
        {/* Tabs */}
        <div className="border rounded-b-xl shadow-xl shadow-gray-400">
          <div className="flex justify-between">
            {tabs.map((tab, i) => (
              <button
                className="text-lg font-medium border-t border-b text-primary bg-primary cursor-pointer p-4 w-full transition ease-out duration-500 hover:text-white hover:bg-secondary disabled:text-white disabled:bg-primaryGradient disabled:cursor-default"
                key={i}
                id={tab.id}
                disabled={currentTab === `${tab.id}`}
                onClick={handleTabClick}
              >
                {tab.tabTitle}
              </button>
            ))}
          </div>
          <div>
            {tabs.map((tab, i) => (
              <div key={i}>
                {currentTab === `${tab.id}` && (
                  <div className="flex flex-col items-center justify-center gap-8 p-12">
                    <div className="grid grid-cols-2 gap-8 w-full">
                      {tab.content.map(({ id, skill, experience }) => (
                        <article key={id} className="flex gap-4">
                          <BsPatchCheckFill className="hidden xs:block mt-2 text-accent" />
                          <div className="text-left">
                            <p className="text-lg font-semibold">{skill}</p>
                            <small className="text-secondary italic">
                              {experience}
                            </small>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Animated Cube */}
        <div className="hidden md:block ml-[35%] mt-[15%]">
          <div className="cubespinner">
            <div className="cube face1">
              <FaSass color="#C76494" />
            </div>
            <div className="cube face2">
              <FaHtml5 color="#F06529" />
            </div>
            <div className="cube face3">
              <FaCss3Alt color="#28A4D9" />
            </div>
            <div className="cube face4">
              <FaReact color="##5ED3F3" />
            </div>
            <div className="cube face5">
              <FaJsSquare color="#EFD81D" />
            </div>
            <div className="cube face6">
              <FaGitAlt color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
