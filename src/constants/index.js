import code from '../assets/code.png'
import pursuit from '../assets/pursuit.png'
import sightings from '../assets/sightings.png'

import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    starbucks,
    tesla,
    shopify,
    threejs,
} from "../assets";


export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Rejoindre un projet inspirant",
        icon: web,
    },
    {
        title: "Rejoindre une équipe motivante",
        icon: mobile,
    },
    {
        title: "Continuer d'apprendre et découvrir de nouvelles techniques",
        icon: backend,
    },
    {
        title: "Puis transmettre ce que je vais apprendre",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Responsable expédition",
        company_name: "Witroc à Saint-Brieuc",
        icon: starbucks,
        iconBg: "#383E56",
        date: "Fev 2019 -  Fev 2022",
        points: [
            "Lancement d'un projet de vente en live sur facebook",
            "Assistance technique occasionnel sur OBS streaming",
            "Mise en place des modules Stripe & Sendcloud",
            "Management de mission intérim",
            "Gestion des réclamations"
        ],
    },
    {
        title: "Responsable de magasin",
        company_name: "Witroc à Guingamp",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Nov 2017 - Jan 2019",
        points: [
            "Ouverture d'un magasin pilote en micro-entrepreneur",
            "Communication hebdomadaire sur les réseaux sociaux",
            "Analyse du chiffre d'affaire et fixation d'objectifs",
        ],
    },
    {
        title: "Vendeur",
        company_name: "Wishop",
        icon: shopify,
        iconBg: "#383E56",
        date: "2015 - 2017",
        points: [
            "En alternance la première année",
            "Puis en tant que vendeur la deuxième année",
        ],
    },
];

const projects = [
    {
        name: "Pixel pursuit",
        id: "Project 1",
        week: "Week 3",
        description:
            "For the first project, we were asked to render a game in the browser. And he should have logic for winning and/or losing and show feedback to the player in either case.",
        tags: [
            {
                name: "javascript",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: pursuit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Bigfoot Sightings",
        id: "Project 2",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: sightings,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        id: "Project 3",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: code,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, projects };