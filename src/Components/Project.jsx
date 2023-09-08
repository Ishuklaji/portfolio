import React, { useState } from "react";
import ProjectsCon from "../css/Projects.styled";
import Singleproject from "./Signleproject";
import tictac from "../assets/Project-img/tic.png";
import sugarImg from "../assets/Project-img/home.png";
import fpostImg from "../assets/Project-img/fpost.png";
import spoimg from "../assets/Project-img/spo.png";
import GameImg from "../assets/Project-img/Homepage-2.png";
import hinImg from "../assets/Project-img/hinImg.png"
import snake from "../assets/Project-img/snake.png"
import drago from "../assets/Project-img/drago.png"
import Notem from "../assets/Project-img/Notem.png"
import charla from "../assets/Project-img/charla.png";
import tasky from "../assets/Project-img/tasky.png";
import cmsy from "../assets/Project-img/cmsy.png";


let projectData = [
  {
    id: 1,
    heroImage: `${GameImg}`,
    title: "Justice Sword Game",
    desc: "It's a 2D action adventure game that will remind you the days of mario and with inreasing levels interest in playing will also increase here you can fight with enemies and discover treasures accross the gameplay",
    team: "A collaborative project, built in 2 weeks by team of 3 members",
    git: "https://github.com/Ishuklaji/Justice-Sword",
    deployed: "https://tiny-centaur-b6e6d1.netlify.app/",
    techStack: "HTML5 | CSS3 | Javascript | ES6 |Basic Graphic designs | git ",
    blog: "#",
    rank: 1,
  },
  {
    id: 2,
    heroImage: `${sugarImg}`,
    title: "Sugar Cosmetics Clone",
    desc: "Clone of Sugar Cosmetics website. Login, signup and user profile. All Ticket searching , sorting , filtering and cartpage functionalities,User can buy selected products , User can LogIn with his username , User can avail Promocode and get discounts on purchase ",
    team: "A collaborative project, built in 5 days by team of 5 members.",
    git: "https://github.com/Ishuklaji/sugarmern",
    deployed: "https://sugar-cosmetics-mern.netlify.app/",
    techStack:
      " ReactJS | MongoDB | NodeJS | ExpressJS | Chakra UI | Javascript | JSON Server | Stripe | Render App | Bootstrap | git",
    blog: "#",
    rank: 2,
  },

  {
    id: 3,
    heroImage: `${fpostImg}`,
    title: "FirstPost Clone",
    desc: "Its a Newsteller and daily updates related website which has user and admin panel where user can see , read , search , subscribe and watch videos of news related content and admin has the access to update , add and delete a news feed . User can also LogIn and get access to more detailed news and updates",
    team: "A collaborative project, built in 5 days by team of 4 members.",
    git: "https://github.com/Royanosh/firstpost",
    deployed: "https://firstpost-clone.netlify.app/",
    techStack:
      "HTML5 | CSS3 | AdvancedJavascript | Local Storage | Herokuu App | JSON server | Netlify | git",
    blog: "#",
    rank: null,
  },
  {
    id: 4,
    heroImage: `${hinImg}`,
    title: "The Hindu Clone",
    desc: "The Hindu is a famous newsteller website . This is a basic clone of that including LogIn , SignUp , Subscribtion , Payment , detailed news related featues",
    team: "This was my 1st MASAI construct week made by team of 5 members in 7 days",
    git: "https://github.com/Ishuklaji/Project007/tree/master/Final",
    deployed: "https://starlit-selkie-e3bd4a.netlify.app/",
    techStack: "HTML5 | CSS3 | Javascript | Local Storage",
    blog: "#",
    rank: null,
  },
  {
    id: 5,
    heroImage: `${tictac}`,
    title: "Tic Tac Toe",
    desc: "It is a web application where you can play a cross X and not 0 and play it with another person and whoever puts 3 simultaneous X or 0 will be the winner",
    team: "Solo Project build in three hours",
    git: "https://github.com/Ishuklaji/TicTacToe",
    deployed: "https://starlit-fairy-fac3af.netlify.app/",
    techStack: "HTML5 | CSS3 | Javascript | DSA",
    blog: "#",
    rank: null,
  },
  {
    id: 6,
    heroImage: `${spoimg}`,
    title: "Spotify Clone",
    desc: "It's a web application for listening music online and chilling out ",
    team: "Solo Project build in two hours",
    git: "https://github.com/Ishuklaji/Spotify",
    deployed: "https://gilded-trifle-02086d.netlify.app/",
    techStack: "React.js | Bootstrap | HTML5 | CSS3 | Javascript | git",
    blog: "#",
    rank: null,
  },
  {
    id: 7,
    heroImage: `${snake}`,
    title: "Snake Game",
    desc: "It is a web application where you can play as a moving snake and more it eats bigger it becomes and also you have to manage to not to get hit by yourself or to the walls",
    team: "Solo Project build in three hours",
    git: "https://github.com/Ishuklaji/SnakeGame",
    deployed: "https://snakewalk.netlify.app/",
    techStack: "HTML5 | CSS3 | Javascript | DSA",
    blog: "#",
    rank: null,
  },
  {
    id: 8,
    heroImage: `${drago}`,
    title: "Dragon Game",
    desc: "It is a 2D web application game where you can play with a moving dianasaur and avoid upcoming attacks.Similar to the game you play when internet is not working on your computer",
    team: "Solo Project build in three hours",
    git: "https://github.com/Ishuklaji/Dragon",
    deployed: "https://dragonjumper.netlify.app/",
    techStack: "HTML5 | CSS3 | Javascript | DSA",
    blog: "#",
    rank: null,
  },
  {
    id: 9,
    heroImage: `${Notem}`,
    title: "Notes App",
    desc: "It is a full stack web application used to Create Read Update Delete sticky notes in online format",
    team: "Solo Project build in three days",
    git: "https://github.com/Ishuklaji/NotesMern",
    deployed: "https://notesmern.netlify.app/",
    techStack:
      "HTML5 | CSS3 | Javascript | ReactJS | ExpressJS | NodeJS | MongoDB | ChakraUI",
    blog: "#",
    rank: null,
  },
  {
    id: 10,
    heroImage: `${charla}`,
    title: "My Chat App",
    desc: "La Charla is a chat app where you can chat with users and also create your own friends group and interact with them.",
    team: "Solo Project build in 2 weeks",
    git: "https://github.com/Ishuklaji/MyChat",
    deployed: "https://la-charla.netlify.app/",
    techStack:
      "HTML5 | CSS3 | Javascript | ReactJS | ExpressJS | NodeJS | MongoDB | ChakraUI | Socket IO",
    blog: "#",
    rank: null,
  },
  {
    id: 11,
    heroImage: `${tasky}`,
    title: "Todo App",
    desc: "It is a Todo app based on react JS having drag and drop functionality.",
    team: "Solo Project build in 1 day",
    git: "https://github.com/Ishuklaji/TodoTS",
    deployed: "https://0-todo.netlify.app/",
    techStack: "HTML5 | CSS3 | Typescript | ReactJS | React-beautiful-dnd",
    blog: "#",
    rank: null,
  },
  {
    id: 12,
    heroImage: `${cmsy}`,
    title: "Contact CRUD App",
    desc: "It is a basic CRUD app used to manage contact details created by MERN stack and file-handling",
    team: "Solo Project build in 2 hours",
    git: "https://github.com/Ishuklaji/ContactCRUD",
    deployed: "https://cmscrud.netlify.app/",
    techStack:
      "HTML5 | CSS3 | Javascript | ReactJS | ExpressJS | NodeJS | FileHandler",
    blog: "#",
    rank: null,
  },
];

const Projects = () => {
  const [data, setData] = useState(projectData);

  return (
    <>
      <ProjectsCon id="projects">
        <h1 style={{ color: "white" }} className="subTitle">Projects</h1>
        <div className="projectCon">
          {data.map((el) => {
            return <Singleproject key={el.id} {...el} />;
          })}
        </div>
      </ProjectsCon>
    </>
  );
};

export default Projects;
