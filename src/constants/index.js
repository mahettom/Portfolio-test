import code from '../assets/code.png'
import pursuit from '../assets/pursuit.png'
import sightings from '../assets/sightings.png'

import {
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
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
        id: "project",
        title: "Project",
    },
];

const objectifs = [
    {
        title: "Join an inspiring project",
    },
    {
        title: "Work in a team",
    },
    {
        title: "Keep learning & discovering new techniques",
    },
    {
        title: "Then pass on what I have learn",
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
        name: "React JS",
        icon: reactjs,
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
];

const experiences = [
    {
        title: "Shipping Manager",
        company_name: "Witroc at Saint-Brieuc",
        date: "Fev 2019 -  Fev 2022",
        points: [
            "Launch of a live sales project on facebook",
            "Occasional technical support on OBS streaming",
            "Sends around 250 packages per week + after-sales service",
            "Management of interim assignments",
            "Claims management"
        ],
    },
    {
        title: "Store manager",
        company_name: "Witroc at Guingamp",
        date: "Nov 2017 - Jan 2019",
        points: [
            "Opening of a pilot store as a micro-entrepreneur status",
            "Weekly communication on social networks",
            "Analysis of turnover for the future franchisee",
            "Support for the launch of the first franchise store"
        ],
    },
    {
        title: "Vendeur",
        company_name: "Wishop",
        date: "2015 - 2017",
        points: [
            "Cooperative training course the first year",
            "Then as a seller the second year",
        ],
    },
];

const projects = [
    {
        name: "Pixel Pursuit",
        id: "Project 1",
        week: "Week 3",
        description: "Catch the points without collide with a ennemy. Ennemy will spawn at the top, be careful the closer you are from 20 points the faster they will go.",
        requirement: ["For the first project, we were asked to render a game in the browser.", "He should have logic for winning and/or losing.", "Show feedback to the player in either case."],
        challenge: ["I had to start all over again on Wednesday except for the grid, because I keep thinking about new features and it got too complicated.", "Time management, didn't have time to style the game!", "Keeping track of all the class and their relationships together.", "For this project I was not use to read and understand errors in the console, but it trained me.", "Keep the code clean with a lot of classes."],
        improvement: ["The overall style", "Make more comment for describe each step.", "Create some difficulty levels (more easy for beggining and improve after)."],
        image: pursuit,
        source_code_link: "https://github.com/mahettom/Pixel-Pursuit",
        tags: [
            {
                name: "HTML",
                color: "text-tertiary",
            },
            {
                name: "CSS",
                color: "text-tertiary",
            },
            {
                name: "javascript",
                color: "text-tertiary",
            },
        ],
    },
    {
        name: "Bigfoot Sightings",
        id: "Project 2",
        week: "Week 8",
        description: "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        requirement: ["Encrypted passwords and authorization (logged in users can do extra things).", "Use Mongoose for models and database communication.", "Show feedback to the player in either case.", "Have at least 2 models.", "Feedback for users if their submission is invalid.", "Use Express as a foundation.", "Implement all CRUD actions on models other than users."],
        challenge: ["I had to start all over again on Wednesday except for the grid", "Time management, didn't have time to style the game!", "Keeping track of all the class and their relationships together.", "For this project I was not use to read and understand errors in the console, but it trained me.", "Keep the code clean with a lot of classes."],
        improvement: ["The overall style", "Make more comment for describe each step.", "Create some difficulty levels."],
        image: sightings,
        source_code_link: "https://github.com/keifershearer/BigFoot_Sightings",
        tags: [
            {
                name: "react",
                color: "text-tertiary",
            },
            {
                name: "restapi",
                color: "text-tertiary",
            },
            {
                name: "scss",
                color: "text-tertiary",
            },
        ],
    },
    {
        name: "Code SOS",
        id: "Project 3",
        description: "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        requirement: ["Implementing all CRUD actions.", "Have a REST API backend built with ExpressJS, MongoDB and Mongoose, that your React app will communicate with.", "Have a REST API backend with routes that perform all CRUD actions for at least one model (excluding the user model).", "Have 3 database models or more. Having one model for users is the first step. The other two (or more) models should represent the main functionality of your app.", "Include sign-up, log-in and log-out functionality with encrypted passwords (or social login) and authorization (logged-in users can do additional things).", "Have two separate repos on GitHub. One repo is for your frontend React application and the other is for your backend REST API."],
        challenge: ["Time management.", "The authentification part take us more time that we expect (Json Web Token)", "I spent quite some time on Postman checking the route during the last days, because of a error I made on github"],
        improvement: ["Make the application more clear to read and more scalable using a lot of components", "Make more comment for describe each step.", "The choice of the model :", "at first we want the tutor to have a specific model. Inside of witch he had technologies, yearsOfExperience, studentHelpCount, isAvailable...", "in his profile he could checked the I'm available checkbox and be display on the page where all tutor available are.", "student can, once on that page sort or filter the tutors available by yearsOfExperience or technologie", "Use a tool like Trello for keeping track of what needs to be done and what is not worth it."],
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
        source_code_link: "https://github.com/mahettom/code-sos-backend",
    },
];

export { objectifs, technologies, experiences, projects };