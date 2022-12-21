import {AiOutlineHome, AiOutlineUser} from "react-icons/ai";
import {VscTools} from "react-icons/vsc";
import {FaSuitcase} from "react-icons/fa";
import {TbMessages} from "react-icons/tb";

export const links = [
    {id: 1, link: "#", icon: <AiOutlineHome />},
    {id: 2, link: "#about", icon: <AiOutlineUser />},
    {id: 3, link: "#skills", icon: <VscTools />},
    {id: 4, link: "#projects", icon: <FaSuitcase />},
    {id: 5, link: "#contact", icon: <TbMessages />},
];

export const tabs = [
    {
        id: 1,
        tabTitle: "FrontEnd",
        content: [
            {id: 1, skill: "HTML", experience: "Experienced"},
            {id: 2, skill: "CSS", experience: "Experienced"},
            {id: 3, skill: "JavaScript", experience: "Experienced"},
            {id: 4, skill: "React Js", experience: "Intermediate"},
            {id: 5, skill: "Next Js", experience: "Intermediate"},
            {id: 6, skill: "Tailwind", experience: "Intermediate"},
            {id: 7, skill: "Sass", experience: "Intermediate"},
            {id: 8, skill: "Material Ui v5", experience: "Intermediate"},
        ],
    },
    {
        id: 2,
        tabTitle: "BackEnd",
        content: [
            {id: 1, skill: "Node.js", experience: "Intermediate"},
            {id: 2, skill: "PHP", experience: "Basic"},
            {id: 3, skill: "MongoDB", experience: "Intermediate"},
            {id: 4, skill: "Mongoose", experience: "Intermediate"},
            {id: 5, skill: "Express.js", experience: "Intermediate"},
            {id: 6, skill: "Firebase", experience: "Basic"},
            {id: 7, skill: "Sanity", experience: "Basic"},
            {id: 8, skill: "GraphQL", experience: "Basic"},
        ],
    },
    {
        id: 3,
        tabTitle: "Misc",
        content: [
            {id: 1, skill: "Git", experience: "Intermediate"},
            {id: 2, skill: "Visual Studio Code", experience: "Intermediate"},
            {id: 3, skill: "Stripe", experience: "Basic"},
            {id: 4, skill: "Rapid API", experience: "Basic"},
        ],
    },
];

export const projectsData = [
    {
        id: 1,
        title: "CoinWatch",
        img: "/projectsImg/coinwatch.jpg",
        tech: "React / Tailwind CSS / Firebase",
        github: "https://github.com/AurelienBedouet/CoinWatch",
        demo: "https://coinwatch.aurelien-bedouet.com/",
    },
    {
        id: 2,
        title: "Phoenix Ecommerce",
        img: "/projectsImg/phoenix-ecommerce.jpg",
        tech: "Next.js / Sanity / Stripe",
        github: "https://github.com/AurelienBedouet/Phoenix-Ecommerce",
        demo: "https://phoenix-ecommerce.vercel.app/",
    },
    {
        id: 3,
        title: "Youtube Clone",
        img: "/projectsImg/youtube-clone.jpg",
        tech: "React / Material Ui v5 / RapidAPI",
        github: "https://github.com/AurelienBedouet/Youtube-Clone",
        demo: "https://ytc.aurelien-bedouet.com/",
    },
    {
        id: 4,
        title: "Forkify",
        img: "/projectsImg/forkify.jpg",
        tech: "Vanilla JavaScript App",
        github: "https://github.com/AurelienBedouet/Forkify",
        demo: "https://forkify.aurelien-bedouet.com/",
    },
    // {
    //     id: 5,
    //     title: "Mapty",
    //     img: "/projectsImg/coinwatch.jpg",
    //     tech: "React JS / Tailwind CSS / Firebase",
    //     github: "https://github.com/AurelienBedouet",
    //     demo: "https://aurelienbedouet.fr/",
    // },
    // {
    //     id: 6,
    //     title: "SoftWare Agency",
    //     img: "/projectsImg/coinwatch.jpg",
    //     tech: "React JS / Tailwind CSS / Firebase",
    //     github: "https://github.com/AurelienBedouet",
    //     demo: "https://aurelienbedouet.fr/",
    // },
];