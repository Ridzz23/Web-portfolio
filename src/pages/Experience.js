import React from 'react';
import Navbar from '../components/Navbar';
import '../App.css';
import Card from '../components/card';
import githubImg from '../images/github.png';
import lingoheroImg from '../images/lingohero.png';

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
    <Card header="LabStream" content1="Collaborating with a team of 8 developers under the guidance of Professor Saharnaz Baghdadchi to develop a virtual lab platform for the Electrical and Computer Engineering department at UCSD. The web application enables students to control lab equipment and conduct experiments through an interactive React-based UI, with real-time feedback provided via a live camera feed streamed through WebSockets. Student inputs, such as increasing motor speed, are processed through a Flask backend, where Python automation scripts communicate with ESP32 microcontrollers to execute commands in the lab setup. This project combines hardware automation and software development to create a hands-on, remote learning experience for students." content2="As a software developer, I designed and implemented an interactive, scalable user interface using React, focusing on reusable and efficient components to ensure seamless scalability from hundreds to thousands of users. I conducted a comprehensive evaluation of data storage solutions and selected Firebase for its cost-effectiveness, scalability, security, and performance. By integrating Firebase with React, I developed a secure user authentication system for login and signup, as well as a lab booking system that enables users to view and reserve lab slots through real-time database interactions. Additionally, I created a lab slot management system specifically for professors, streamlining the process of scheduling and managing availability. Throughout the project, I optimized database operations and system architecture to handle high traffic while maintaining performance and reliability." image={githubImg} linkName = "Here" link="https://github.com/Ridzz23" />
    <Card header="LingoHero" content1="Collaborated with a team of around 20 developers and designers to create LingoHero, a gamified mobile application that makes learning new languages engaging and interactive. The app incorporates mini-games and a level-based system to provide an immersive and fun learning experience." content2="As a front-end software developer, I focused on coding and enhancing the main UI framework to improve interactivity and user engagement. I independently developed four complete screens using React, ensuring a seamless and intuitive user experience. Additionally, I actively participated in weekly team meetings to review progress, address bugs, discuss improvements, and set goals for upcoming development milestones." image={lingoheroImg} linkName="LingoHero LinkedIn" link="https://www.linkedin.com/company/lingo-hero/posts/?feedView=all" />
    </div>
    </div>
  );
};

export default Experience;
