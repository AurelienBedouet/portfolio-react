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
            {id: 1, skill: "HTML/CSS", experience: "Experienced"},
            {id: 2, skill: "JavaScript", experience: "Experienced"},
            {id: 3, skill: "TypeScript", experience: "Experienced"},
            {id: 4, skill: "React 18+", experience: "Intermediate"},
            {id: 5, skill: "Next.js 13", experience: "Intermediate"},
            {id: 6, skill: "Tailwind", experience: "Intermediate"},
            {id: 7, skill: "Redux/Redux Toolkit", experience: "Intermediate"},
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
            {id: 6, skill: "Firebase v9", experience: "Intermediate"},
            {id: 7, skill: "Sanity", experience: "Intermediate"},
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
            {id: 5, skill: "Jest/RTL", experience: "Basic"},
        ],
    },
];

export const projectsData = [
    {
        id: 1,
        title: "Prestige Properties",
        img: "/projectsImg/prestige-properties.jpg",
        tech: "Next.js / TypeScript / Firebase v9",
        github: "https://github.com/AurelienBedouet/property-portal",
        demo: "https://property-portal-two.vercel.app/",
    },
    {
        id: 2,
        title: "CoinWatch",
        img: "/projectsImg/coinwatch.jpg",
        tech: "React / Tailwind CSS / Firebase",
        github: "https://github.com/AurelienBedouet/CoinWatch",
        demo: "https://coinwatch.aurelien-bedouet.com/",
    },
    {
        id: 3,
        title: "Github Finder",
        img: "/projectsImg/github-finder.jpg",
        tech: "React / TypesCript / Tailwind CSS",
        github: "https://github.com/AurelienBedouet/github-finder",
        demo: "https://github-finder-zeta-green.vercel.app/",
    },
    {
        id: 4,
        title: "Phoenix Ecommerce",
        img: "/projectsImg/phoenix-ecommerce.jpg",
        tech: "Next.js / Sanity / Stripe",
        github: "https://github.com/AurelienBedouet/Phoenix-Ecommerce",
        demo: "https://phoenix-ecommerce.vercel.app/",
    },
];