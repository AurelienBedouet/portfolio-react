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
          {french ? (
            <>
              <p className="mb-2">
                En tant que développeur web avec plus de deux ans d'expérience,
                je m’applique à créer des applications web ergonomiques et
                user-friendly en utilisant les derniers outils et technologies.
                Je développe des applications web performantes qui produisent
                des résultats concrets.
              </p>
              <p className="mb-2">
                Mon expertise se situe dans le développement front-end en
                utilisant JavaScript et TypeScript, et je suis devenu
                particulièrement compétent dans l'utilisation de Next.js, un
                framework puissant basé sur React. J'utilise également des
                outils de développement web tels que Redux et Firebase pour
                construire des applications web évolutives et modulaires qui
                sont faciles à maintenir et à étendre.
              </p>
              <p className="mb-2">
                Lorsque je commence un nouveau projet, mon objectif principal
                est de comprendre les besoins et objectifs spécifiques de mes
                clients. En prenant le temps de comprendre votre entreprise,
                votre marque et votre public cible, je suis capable de créer des
                applications web qui sont non seulement esthétiquement
                plaisantes mais également efficaces pour stimuler les
                conversions. Je m'efforce de créer des applications web qui
                répondent aux besoins des utilisateurs et des moteurs de
                recherche en appliquant mes connaissances en matière de
                conception d'expérience utilisateur et d'interface utilisateur.
              </p>
              <p className="mb-10">
                Quand je ne suis pas en train de coder, on peut me trouver sur
                un parcours de golf, en train de regarder un film de science
                fiction ou d'en apprendre plus sur une civilisation ancienne.
              </p>
            </>
          ) : (
            <>
              <p className="mb-2">
                As a web developer with more than two years of experience, I am
                dedicated to creating engaging and user-friendly web
                applications using cutting-edge development tools and
                technologies. My primary goal is to develop high-performance web
                applications that produce concrete results.
              </p>
              <p className="mb-2">
                My expertise lies in front-end development using JavaScript and
                TypeScript, and I have become particularly skilled in using
                Next.js, a powerful React-based framework. I also use modern web
                development tools such as Redux and Firebase to build scalable
                and modular web applications that are easy to maintain and
                extend.
              </p>
              <p className="mb-2">
                When starting a new project, my primary focus is on
                understanding the specific needs and objectives of my clients.
                By taking the time to understand your business, brand, and
                target audience, I am able to create web applications that are
                not only visually appealing but also effective at driving
                conversions. I strive to create web applications that meet the
                needs of both users and search engines by applying my knowledge
                of user experience and user interface design.
              </p>
              <p className="mb-10">
                When i'm not improving my coding skills, you can find me on a
                golf course, watching science fiction movies or learning about
                ancient civilizations.
              </p>
            </>
          )}
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
