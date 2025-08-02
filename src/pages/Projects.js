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
    <div style={{ backgroundColor: '#f8f9fb', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      <Navbar />

      <section style={{ textAlign: 'center', padding: '60px 20px 20px' }}>
        <h1 style={{ fontSize: '36px', color: '#1a1f36' }}>Projects</h1>
        <p style={{ fontSize: '16px', color: '#666' }}>What I've built.</p>
      </section>

      <hr style={{ maxWidth: '1200px', margin: '0 auto 40px', borderColor: '#ddd' }} />

      <section className="cards-container" style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '40px',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px 60px'
      }}>
        <Card header="EzTerminal" content1="EzTerminal is a user-friendly and intuitive terminal application designed to simplify the command line experience for users of all skill levels. This desktop application features an improved user interface aimed at enhancing productivity and encouraging broader adoption of command-line tools. It offers a modern design with two customizable themes and includes an instant documentation finder capable of providing syntax details for over 1,000 Linux commands. Future updates will introduce advanced error-checking capabilities and automation tools to further streamline the user experience." content2="As a full-stack developer, I built this application entirely from scratch. The backend was developed using Rust, ensuring robust performance and reliability, and communicates seamlessly with the frontend via JavaScript through the Tauri framework. The frontend, crafted with HTML and CSS, was designed to provide an accessible and visually appealing user experience, making the application intuitive and easy to navigate." image={ezterminalImg} linkName="EzTerminal Website" link="https://ezterminal.vercel.app/" />

        <Card header="Hardware Blog" content1="I founded a blog showcasing Arduino projects, combining hardware development and education to cater to beginners and enthusiasts alike. The blog features detailed, step-by-step guides for building five unique devices, including a mobile phone and a gaming console, complete with helpful tips for DIY builders. Over the years, it has grown into a thriving community of over 1,000 followers, fostering engagement among learners and makers while inspiring others to explore the world of hardware development." content2="As a hardware developer, I designed and built the circuits and PCBs for these devices and coded their functionalities. I meticulously documented the design and coding processes, providing comprehensive guides to make hardware development accessible for aspiring developers and DIY enthusiasts." image={hardwareImg} linkName="Hardware Blog" link="https://hackaday.io/XtremeTech" />

        <Card header="IEEE RoboCup SSL" content1="Collaborated with a team of passionate engineers at IEEE UCSD to develop a team of autonomous soccer-playing robots for the RoboCup SSL 2024 competition in Germany, where our team successfully qualified. The project was divided into three sub-teams: software, embedded, and mechanical." content2="As a member of the embedded team, I worked on the robots' navigation system. I developed a low-pass filter to improve navigation precision and integrated circuits such as the dribbler motor circuit, ensuring seamless microcontroller integration and robot performance." image={robocupImg} linkName="Triton RCSC Paper 2023" link="https://ssl.robocup.org/wp-content/uploads/2023/04/2023_TDP_TritonsRCSC_2.pdf" />

        <Card header="Meet a Book" content1="This web application, built using the Flask framework, aims to promote reading within communities. It allows users to browse books available for borrowing in their local area and connect with other residents." content2="As the full-stack developer, I built this app using HTML, CSS, Flask (Python), and SQLAlchemy. I also added a password recovery system based on user feedback, enhancing usability and completeness of the experience." image={meetbookImg} linkName="Code on GitHub" link="https://github.com/Ridzz23/Flask-Web-Library" />

        <Card header="Game Development" content1="I am an active member of the game dev community and have developed and published four games using Unity and C#. Most of the assets were hand-crafted in GIMP and Blender." content2="I designed storylines, programmed game mechanics, and submitted to top jams like GMTK. Game dev has helped me merge creativity with C# and Unity engineering." image={gamedevImg} linkName="My Video Games" link="https://knightrunnerdev.itch.io/" />

        <Card header="Engineers for Exploration UCSD" content1="Developed machine learning solutions for environmental challenges. On the Mangrove Monitoring Team, I analyzed 10 years of satellite data using Vision Transformers to detect mangrove coverage trends." content2="In Spring 2024, I improved model accuracy through data cleaning and explored the ViT architecture for scale-optimized satellite image recognition." image={mangroveImg} linkName="Mangrove Monitoring Project" link="https://e4e.ucsd.edu/mangrove-monitoring/" />
      </section>
    </div>
  );
};

export default Projects;
