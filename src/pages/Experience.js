import React from 'react';
import Navbar from '../components/Navbar';
import '../App.css';
import Card from '../components/card';
import lingoheroImg from '../images/lingohero.png';
import ieeeImg from '../images/ieee.png';
import labstreamImg from '../images/labstream.png';

const Experience = () => {
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
      <h1 className="child-left">Experience</h1>
    </div>
    <hr></hr>
    <div className="cards-container">
    <Card header="LabStream" content1="Collaborating with a team of 8 developers under the guidance of Professor Saharnaz Baghdadchi to develop a virtual lab platform for the Electrical and Computer Engineering department at UCSD. The web application enables students to control lab equipment and conduct experiments through an interactive React-based UI, with real-time feedback provided via a live camera feed streamed through WebSockets. Student inputs, such as increasing motor speed, are processed through a Flask backend, where Python automation scripts communicate with ESP32 microcontrollers to execute commands in the lab setup. This project combines hardware automation and software development to create a hands-on, remote learning experience for students." content2="As a software developer, I designed and implemented an interactive, scalable user interface using React, focusing on reusable and efficient components to ensure seamless scalability from hundreds to thousands of users. I conducted a comprehensive evaluation of data storage solutions and selected Firebase for its cost-effectiveness, scalability, security, and performance. By integrating Firebase with React, I developed a secure user authentication system for login and signup, as well as a lab booking system that enables users to view and reserve lab slots through real-time database interactions. Additionally, I created a lab slot management system specifically for professors, streamlining the process of scheduling and managing availability. Throughout the project, I optimized database operations and system architecture to handle high traffic while maintaining performance and reliability." image={labstreamImg} linkName = "Here" link="https://github.com/Ridzz23" />
    <Card header="LingoHero" content1="Collaborated with a team of around 20 developers and designers to create LingoHero, a gamified mobile application that makes learning new languages engaging and interactive. The app incorporates mini-games and a level-based system to provide an immersive and fun learning experience." content2="As a front-end software developer, I focused on coding and enhancing the main UI framework to improve interactivity and user engagement. I independently developed four complete screens using React, ensuring a seamless and intuitive user experience. Additionally, I actively participated in weekly team meetings to review progress, address bugs, discuss improvements, and set goals for upcoming development milestones." image={lingoheroImg} linkName="LingoHero LinkedIn" link="https://www.linkedin.com/company/lingo-hero/posts/?feedView=all" />
    <Card header="Technical Chair at IEEE UCSD" content1="I joined the IEEE UCSD branch as a Technical Chair in Fall 2024. In this role, I am responsible for planning and hosting technical workshops for students throughout the academic year. During Fall 2024, the Technical Chairs successfully organized three workshops: an ESP32 workshop, a soldering workshop, and a Rust programming workshop." content2="I was actively involved in the Rust workshop, where I collaborated with my co-chairs to introduce Rust, a prominent and emerging programming language. Since Rust is quite different from other languages, we began the workshop by explaining its syntax. Then, we guided participants in building a small project—a Lorenz attractor—to help them apply what they learned.In addition, I supported the outreach team by assisting with a soldering workshop for high school students. I helped with setup, cleanup, and guided the students through the soldering process.Looking ahead, I am planning to host a React web development workshop where students will learn React by building a simple website." image={ieeeImg} linkName="IEEE UCSD Website" link="https://ieeeucsd.org/" />
    </div>
    </div>
  );
};

export default Experience;
