import React, { useState, useContext } from "react";
import { LangContext } from "../context/LangContext";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineCopy, AiOutlineCheckCircle } from "react-icons/ai";

const Contact = () => {
  const { french } = useContext(LangContext);
  const [msgSent, setMsgSent] = useState(false);
  const [textCopied, setTextCopied] = useState(false);

  const text = "bedouet.aurelien@gmail.com";

  const copyText = () => {
    navigator.clipboard.writeText(text);
    setTextCopied(true);
    setTimeout(() => {
      setTextCopied(false);
    }, 3000);
  };

  const displayFormMessage = () => {
    let formMessage = "";
    if (msgSent) {
      formMessage = french
        ? "Message envoyé avec succès"
        : "Message successfully sent!";
    } else {
      formMessage = french ? "Envoyer" : "Send Message";
    }
    return formMessage;
  };

  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zsihs4s",
        "template_iupmxis",
        form.current,
        "usefWUDE2FG9SVXDb"
      )
      .then(
        () => {
          setMsgSent(true);
          setTimeout(() => {
            window.location.reload(false);
          }, 3000);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-40 flex flex-col justify-center items-center gap-16"
    >
      <div className="text-center">
        <h2>Contact</h2>
      </div>
      <div>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Infos */}
          <div className="min-h-[600px] col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-6 md:p-12 lg:p-8">
            <div className="lg:p-4 h-full flex flex-col justify-between items-center">
              {/* Portrait */}
              <div className="w-full flex justify-center items-center">
                <img
                  className="w-[200px] h-[200px] rounded-full hover:scale-105 ease-in duration-300"
                  src="/portrait.jpg"
                  alt="portrait"
                  width="200"
                  height="200"
                />
              </div>
              {/* Text */}
              <div className="w-full flex flex-col justify-center items-center text-center sm:items-start sm:text-left">
                <h2 className="max-w-fit">Aurélien Bedouet</h2>
                <h4 className="pt-4">
                  {french ? "Développeur Front End" : "Front-End Developer"}
                </h4>
                <p className="py-4">
                  {french
                    ? "Disponible pour du freelancing ou pour un poste à temps plein."
                    : "I am available for freelance or full-time positions. Contact me and let's talk."}
                </p>
                <div className="flex gap-4 items-center">
                  <p>{text}</p>
                  <button onClick={copyText}>
                    {textCopied ? (
                      <AiOutlineCheckCircle size={20} color="green" />
                    ) : (
                      <AiOutlineCopy size={20} />
                    )}
                  </button>
                </div>
              </div>
              {/* Socials / CV */}
              <div className="w-full">
                <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 items-center justify-around lg:justify-between py-4 text-accent">
                  <div className="flex gap-4">
                    <a
                      className="border border-secondary p-3 rounded-full hover:bg-secondary hover:text-white transition ease-in duration-400"
                      href="https://www.linkedin.com/in/aur%C3%A9lien-bedouet/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedinIn size={20} />
                    </a>
                    <a
                      className="border border-secondary p-3 rounded-full hover:bg-secondary hover:text-white transition ease-in duration-400"
                      href="https://github.com/AurelienBedouet"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub size={20} />
                    </a>
                  </div>

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
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl p-6 md:p-12 lg:p-8">
            <div>
              <form ref={form} onSubmit={sendEmail}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm mb-2">
                      {french ? "Nom" : "Name"}
                    </label>
                    <input
                      className="border-2 rounded-lg p-2 flex border-gray-300"
                      type="text"
                      name="name"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm mb-2">Email</label>
                    <input
                      className="border-2 rounded-lg p-2 flex border-gray-300"
                      type="email"
                      name="email"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm mb-2">
                    {french ? "Sujet" : "Subject"}
                  </label>
                  <input
                    className="border-2 rounded-lg p-2 flex border-gray-300"
                    type="text"
                    name="subject"
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm mb-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-2 border-gray-300"
                    rows="8"
                    name="message"
                    required
                  ></textarea>
                </div>
                <input
                  className={
                    msgSent
                      ? "w-full p-4 text-white mt-4 shadow-xl rounded-xl uppercase bg-gradient-to-r from-[#31b92a] to-[#70ff94] hover:opacity-90 transition ease-in duration-200"
                      : "cursor-pointer w-full p-4 text-white mt-4 shadow-xl rounded-xl uppercase bg-primaryGradient hover:opacity-90 transition ease-in duration-200"
                  }
                  type="submit"
                  value={displayFormMessage()}
                ></input>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
