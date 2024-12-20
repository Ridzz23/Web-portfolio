import React from 'react';
import Navbar from '../components/Navbar';
import '../App.css';
import Card from '../components/card';
import ezterminalImg from '../images/ezterminal.png';
import hardwareImg from '../images/hardwareBlog.png';
import meetbookImg from '../images/meetBook.png';
import robocupImg from '../images/robo.png';
import mangroveImg from '../images/mangrove.png';
import gamedevImg from '../images/games.png';

const Projects = () => {
  return (
    <div>
      <Navbar />
    <div
      className="container center-align"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <h1 className="child-left">Projects</h1>
    </div>
    <hr></hr>
    <div className="cards-container">
    <Card header="EzTerminal" content1="EzTerminal is a user-friendly and intuitive terminal application designed to simplify the command line experience for users of all skill levels. This desktop application features an improved user interface aimed at enhancing productivity and encouraging broader adoption of command-line tools. It offers a modern design with two customizable themes and includes an instant documentation finder capable of providing syntax details for over 1,000 Linux commands. Future updates will introduce advanced error-checking capabilities and automation tools to further streamline the user experience." content2="As a full-stack developer, I built this application entirely from scratch. The backend was developed using Rust, ensuring robust performance and reliability, and communicates seamlessly with the frontend via JavaScript through the Tauri framework. The frontend, crafted with HTML and CSS, was designed to provide an accessible and visually appealing user experience, making the application intuitive and easy to navigate." image={ezterminalImg} linkName = "EzTerminal Website" link="https://ezterminal.vercel.app/" />
    <Card header="Hardware Blog" content1="I founded a blog showcasing Arduino projects, combining hardware development and education to cater to beginners and enthusiasts alike. The blog features detailed, step-by-step guides for building five unique devices, including a mobile phone and a gaming console, complete with helpful tips for DIY builders. Over the years, it has grown into a thriving community of over 1,000 followers, fostering engagement among learners and makers while inspiring others to explore the world of hardware development." content2="As a hardware developer, I designed and built the circuits and PCBs for these devices and coded their functionalities. I meticulously documented the design and coding processes, providing comprehensive guides to make hardware development accessible for aspiring developers and DIY enthusiasts. Through this blog, I aim to share knowledge, encourage creativity, and support the growth of the hardware development community." image={hardwareImg} linkName="Hardware Blog" link="https://hackaday.io/XtremeTech" />
    <Card header="IEEE RoboCup SSL" content1="Collaborated with a team of passionate engineers at IEEE UCSD to develop a team of autonomous soccer-playing robots for the RoboCup SSL 2024 competition in Germany, where our team successfully qualified. The project was divided into three sub-teams: software, embedded, and mechanical, each contributing to the functionality and performance of the robots." content2="As a member of the embedded team, I worked extensively on the robots' navigation system. During initial testing, we observed that the robots were tilting to the left, which affected navigation accuracy. To address this issue, I developed a low-pass filter that significantly improved navigation precision. Additionally, I integrated various circuits into the robots, including the dribbler motor circuit, which enables the robots to dribble the soccer ball while in motion. I focused on ensuring seamless integration of this circuit with the microcontroller, contributing to the overall functionality and performance of the robots." image={robocupImg} linkName="Triton RCSC Paper 2023" link="https://ssl.robocup.org/wp-content/uploads/2023/04/2023_TDP_TritonsRCSC_2.pdf" />
    <Card header="Meet a Book" content1="This web application, built using the Flask framework, aims to promote reading within communities. It allows users to browse books available for borrowing in their local area and connect with other residents to borrow them. The goal of this application is to foster community connections, encourage the reuse of resources, and help conserve paper." content2="As the full-stack developer, I built this application entirely, using HTML and CSS for the front-end, Python with the Flask framework for the back-end, and SQLAlchemy for data storage. Through this project, I gained valuable experience in web application development with Flask and learned the importance of incorporating user feedback to improve functionality. For example, a user suggested adding a way to recover forgotten passwords. In response, I implemented a password recovery system that sends an email with a recovery link to reset the password." image={meetbookImg} linkName="Code on GitHub" link="https://github.com/Ridzz23/Flask-Web-Library" />
    <Card header="Game Development" content1="I am an active member of the video game development community, frequently participating in game jams where games are built within tight deadlines around specific themes. I have developed and published four video games using Unity, programming in C#. Most of my 2D assets are hand-drawn using GIMP, while 3D assets are modeled in Blender, making all assets self-developed." content2="As a game developer, I have designed the storylines and levels for my games, bringing characters and objects to life with both artistic and technical skills. Through game development, I’ve honed my C# programming abilities and utilized Unity to seamlessly integrate assets and gameplay mechanics. Notably, I created a game for the GMTK Game Jam—one of the largest with over 6,000 entries—in just two days." image={gamedevImg}  linkName="My Video Games" link="https://knightrunnerdev.itch.io/" />
    <Card header="Engineers for Exploration UCSD" content1="Developed innovative machine learning solutions to tackle environmental challenges. As part of the Mangrove Monitoring Team, I contributed to analyzing 10 years of satellite data to classify and monitor mangrove coverage trends using Vision Transformers. The work was based on the research paper 'Image Recognition at Scale: https://arxiv.org/abs/2010.11929v2 '" content2="During the Spring quarter of 2024, I gained hands-on experience with the Vision Transformer (ViT) model, focusing on improving its accuracy through data cleaning techniques and exploring the codebase to understand and optimize its functionality." image={mangroveImg} linkName="Mangrove Monitoring Project" link="https://e4e.ucsd.edu/mangrove-monitoring/" />
    </div>
    </div>
  );
};

export default Projects;
