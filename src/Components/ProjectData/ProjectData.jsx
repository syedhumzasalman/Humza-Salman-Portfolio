import adminPanel from "../../assets/project-images/admin panel.png";
import carWebsite from "../../assets/project-images/car website.png";
import checkBlood from "../../assets/project-images/check blodd.png";
import environmental from "../../assets/project-images/Enviromental.png";
import figma1 from "../../assets/project-images/FigmaDesign1.png";
import figma2 from "../../assets/project-images/FigmaDesign2.png";
import figma3 from "../../assets/project-images/FigmaDesign3.png";
import firebaseAuth from "../../assets/project-images/Firebase Authentication.png";
import foodpanda from "../../assets/project-images/Foodpanda.png";
import fightingGame from "../../assets/project-images/fughting game.png";
import githubApi from "../../assets/project-images/Github-api.png";
import hackathon from "../../assets/project-images/HACKATHON.png";
import namazTracker from "../../assets/project-images/namaz-tracker.png";
import nasa from "../../assets/project-images/NASA.png";
import newsApp from "../../assets/project-images/News app.png";
import passwordGenerator from "../../assets/project-images/password generator.png";
import postApp from "../../assets/project-images/post app.png";
import productRendering from "../../assets/project-images/Product Rendering.png";
import protonic from "../../assets/project-images/Protonic.png";
import quizApp from "../../assets/project-images/Quiz app.png";
import reactEcommerce from "../../assets/project-images/reactecommerce.png";
import reactGithubApi from "../../assets/project-images/reactgithubapi.png";
import reactTodo from "../../assets/project-images/reacttodoapp.png";
import studentPortal from "../../assets/project-images/student portal.png";
import todo from "../../assets/project-images/todo.png";
import weather from "../../assets/project-images/Weather ForeCast.png";
import pitchcraft from "../../assets/project-images/pitchcraft.png";


const projectsData = [
    {
        image: pitchcraft,
        tech: ["React"],
        title: "PitchCraft",
        description: `PitchCraft is an AI-powered platform developed during the SMIT (Saylani Mass IT Training) Hackathon. Every student or founder has an idea 💡 but the challenge is — how to create a pitch, write taglines, or explain it to investors? PitchCraft is your personal AI startup partner that helps you create professional startup pitches instantly!`,
        live: "https://smit-pitchcraft.netlify.app/",
        github: "https://github.com/syedhumzasalman/Smit-Hackathon"
    },
    {
        image: reactEcommerce,
        tech: ["React"],
        title: "Shopfinity - E-Commerce Website",
        description: "A modern and fully responsive e-commerce platform built with React, featuring product browsing, category filtering, and a seamless shopping experience.",
        live: "https://shopfinity-e-commerce.netlify.app/",
        github: "https://github.com/syedhumzasalman/Shopfinity"
    },
    {
        image: namazTracker,
        tech: ["JavaScript", "Firebase"],
        title: "Namaz Tracking App",
        description: "A Namaz Tracking web app that allows users to log daily prayers, view completed, pending, Qaza, and missing Namaz records, and track progress over time. Built with JavaScript and Firebase, the app features real-time updates, Firestore integration, and a smooth user experience focused on spiritual accountability.",
        live: "https://namaz-tracker.netlify.app/",
        github: "https://github.com/syedhumzasalman/Namaz-Tracking-System"
    },
    {
        image: reactGithubApi, 
        tech: ["React"],
        title: "GitHub API",
        description: "A React app that integrates with the GitHub API to fetch and display user profiles, including repositories, followers, and other details in a clean UI",
        live: "https://github-api-integration-react.netlify.app/",
        github: "https://github.com/syedhumzasalman/React-GitHub-API-Integration"
    },
    {
        image: todo,
        tech: ["JavaScript", "Firebase"],
        title: "ToDo Web App",
        description: "A simple and efficient ToDo web app where users can add, update, and delete tasks. Built using JavaScript and Firebase, it offers real-time data storage, user authentication, and a clean interface to help users stay organized and productive.",
        live: "https://fire-base-todolist.netlify.app/",
        github: "https://github.com/syedhumzasalman/Todo-List"
    },
    {
        image: reactTodo,
        tech: ["React"],
        title: "React To-Do App",
        description: "A simple yet efficient task management app built with React, allowing users to add, edit, and delete tasks with a clean and responsive interface.",
        live: "https://myreact-todo-web-app.netlify.app/",
        github: "https://github.com/syedhumzasalman/React-ToDo-App"
    },
    {
        image: studentPortal,
        tech: ["JavaScript", "Firebase"],
        title: "Skillshelf Student Portal",
        description: "A student portal web app where users can log in, enroll in courses, track attendance, and view assignments. Built with JavaScript and Firebase, this project gave me hands-on experience with dynamic content rendering and backend integration.",
        live: "https://skillshelf.netlify.app/",
        github: "https://github.com/syedhumzasalman/Student-Portal"
    },
    {
        image: hackathon,
        tech: ["HTML", "CSS"],
        title: "SMIT HACKATHON (HTML & CSS)",
        description: "I participated in the SMIT HTML & CSS Hackathon where I showcased my skills in creating responsive layouts and clean user interfaces.",
        live: "https://syedhumzasalman.github.io/SMIT-Hackathon/",
        github: "https://github.com/syedhumzasalman/SMIT-Hackathon-HTML-CSS"
    },
    {
        image: quizApp,
        tech: ["JavaScript"],
        title: "Quiz App",
        description: "An interactive quiz application with timed questions, score tracking, and instant feedback.",
        live: "https://smit-quizz.netlify.app/",
        github: "https://github.com/syedhumzasalman/Quiz-App"
    },
    {
        image: firebaseAuth,
        tech: ["JavaScript", "Firebase"],
        title: "Firebase Authentication App",
        description: "This project uses Firebase Authentication to register, login, and logout users securely.",
        live: "https://firebase-first-assignment.netlify.app/",
        github: "https://github.com/syedhumzasalman/Firebase-Authentication"
    },
    {
        image: productRendering,
        tech: ["JavaScript"],
        title: "Product Rendering",
        description: "This project demonstrates dynamic product rendering using JavaScript.",
        live: "https://smit-store.netlify.app/",
        github: "https://github.com/syedhumzasalman/Product-Rendrering"
    },
    {
        image: githubApi,
        tech: ["JavaScript", "CSS"],
        title: "GitHub API Integration",
        description: "This project integrates the GitHub API to fetch and display user profiles and repositories.",
        live: "https://github-api-pro.netlify.app/",
        github: "https://github.com/syedhumzasalman/Github-API"
    },
    {
        image: weather,
        tech: ["JavaScript"],
        title: "Weather Forecast App",
        description: "A real-time weather app built using a public weather API.",
        live: "https://weather-web-app-smit.netlify.app/",
        github: "https://github.com/syedhumzasalman/Weather-Forecast"
    },
    {
        image: postApp,
        tech: ["JavaScript"],
        title: "JS Connect - Post App",
        description: "This app allows users to post and view messages in a dynamic feed.",
        live: "https://js-connect.netlify.app/",
        github: "https://github.com/syedhumzasalman/JS-Connect"
    },
    {
        image: adminPanel,
        tech: ["JavaScript"],
        title: "Restaurant Admin Panel",
        description: "A custom admin panel for managing restaurant orders, menu items, and categories.",
        live: "https://resturant-admin-panel.netlify.app/",
        github: "https://github.com/syedhumzasalman/Resturant-Frontend"
    },
    {
        image: newsApp,
        tech: ["JavaScript"],
        title: "News App",
        description: "A JavaScript-powered news application that fetches top headlines using a news API.",
        live: "https://news-app-team-h-a-s-f.netlify.app/",
        github: "https://github.com/syedhumzasalman/News-app"
    },
    {
        image: checkBlood,
        tech: ["JavaScript"],
        title: "Check Your Blood Type",
        description: "An interactive app where users can input blood donor and recipient types to check compatibility.",
        live: "https://check-blood-type.netlify.app/",
        github: "https://github.com/syedhumzasalman/Find-Blood-type"
    },
    {
        image: passwordGenerator,
        tech: ["JavaScript"],
        title: "Password Generator",
        description: "This app generates secure, random passwords based on user-selected criteria.",
        live: "https://generate-easy-passwords.netlify.app/",
        github: "https://github.com/syedhumzasalman/Password-Generator"
    },
    {
        image: carWebsite,
        tech: ["JavaScript"],
        title: "Car Website",
        description: "A car-themed website that showcases different vehicle models with images, specs, and pricing.",
        live: "https://humza-autos.netlify.app/",
        github: "https://github.com/syedhumzasalman/Humza-Autos"
    },
    {
        image: fightingGame,
        tech: ["JavaScript"],
        title: "Street Warriors - Fighting Game",
        description: "A 2D JavaScript fighting game with character selection and animations.",
        live: "https://street-warriors-karachi.netlify.app/",
        github: "https://github.com/syedhumzasalman/JavaScript-Game"
    },
    {
        image: environmental,
        tech: ["HTML", "CSS"],
        title: "Enviromental Protection Protocol",
        description: "This project highlights key environmental issues through a clean UI.",
        live: "https://environmental-protection-protocol.netlify.app/",
        github: "https://github.com/syedhumzasalman/Enviromental-Protection-Protocol"
    },
    {
        image: foodpanda,
        tech: ["HTML", "CSS"],
        title: "Foodpanda Home Page UI Clone",
        description: "A front page clone of the Foodpanda website built using HTML and CSS.",
        live: "https://foodpanda-assignment.netlify.app/",
        github: "https://github.com/syedhumzasalman/Foodpanda-assignment"
    },
    {
        image: nasa,
        tech: ["HTML", "CSS"],
        title: "NASA Home Page UI Clone",
        description: "A UI clone of the official NASA homepage designed with HTML and CSS.",
        live: "https://nasa-assignment.netlify.app/",
        github: "https://github.com/syedhumzasalman/Nasa-Assignment"
    },
    {
        image: protonic,
        tech: ["HTML", "CSS"],
        title: "Protonic Home Page UI Clone",
        description: "A clone of the Protonic homepage using HTML and CSS.",
        live: "https://portronics.netlify.app/",
        github: "https://github.com/syedhumzasalman/Portronic-Clone-Website"
    },
    {
        image: figma1,
        tech: ["HTML", "CSS"],
        title: "Figma Design 01",
        description: "Converted a Figma UI design into HTML and CSS.",
        live: "https://smit-assignment-six.netlify.app/",
        github: "https://github.com/syedhumzasalman/figma-design-1"
    },
    {
        image: figma2 ,
        tech: ["HTML", "CSS"],
        title: "Figma Design 02",
        description: "A pixel-perfect HTML and CSS conversion of a Figma design.",
        live: "https://smit-assignment-5.netlify.app/",
        github: "https://github.com/syedhumzasalman/figma.design"
    },
    {
        image: figma3 ,
        tech: ["HTML", "CSS"],
        title: "Figma Designs 03",
        description: "Recreated a complex UI from a Figma mockup using HTML and CSS.",
        live: "https://figmadesign-assignment.netlify.app/",
        github: "https://github.com/syedhumzasalman/Figma-Designs-Assignment"
    }
];

export default projectsData;