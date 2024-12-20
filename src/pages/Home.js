import React from 'react';
import Navbar from '../components/Navbar';
import '../App.css';
import linkedInImg from '../images/linkedin.png';
import githubImg from '../images/github.png';
import Card from '../components/card';
import ezterminalImg from '../images/ezterminal.png';
import labstreamImg from '../images/labstream.png';


const Home = () => {

  const openLink = (link) => {
    console.log(link);
    window.open(link, "_blank");
  }

  return (
    <div>
      <Navbar />

        <div className="child-left">
        <h3>
          Hello World!<br></br>
          I'm Ridhi.
          </h3>
          <p>Computer Engineering Major at UC San Diego with a 4.0 GPA.</p>
          </div>
          <div class="child-right">
            <div class="button-container">
              <button class="button1" type="button" onClick={() => openLink("https://www.linkedin.com/in/ridhi-srikanth-8495a6222/")}>
                <img src={linkedInImg} alt="LinkedIn" />
              </button>
              <button class="button1" type="button" onClick={() => openLink("https://github.com/Ridzz23")}>
                <img src={githubImg} alt="GitHub" />
              </button>
            </div>
          </div>
          <hr></hr>
          <div class="header">
            <h1>Highlights</h1>
          </div>
          <div className="cards-container">
          <Card header="LabStream" content1="Collaborating with a team of 8 developers under the guidance of Professor Saharnaz Baghdadchi to develop a virtual lab platform for the Electrical and Computer Engineering department at UCSD. The web application enables students to control lab equipment and conduct experiments through an interactive React-based UI, with real-time feedback provided via a live camera feed streamed through WebSockets. Student inputs, such as increasing motor speed, are processed through a Flask backend, where Python automation scripts communicate with ESP32 microcontrollers to execute commands in the lab setup. This project combines hardware automation and software development to create a hands-on, remote learning experience for students." content2="As a software developer, I designed and implemented an interactive, scalable user interface using React, focusing on reusable and efficient components to ensure seamless scalability from hundreds to thousands of users. I conducted a comprehensive evaluation of data storage solutions and selected Firebase for its cost-effectiveness, scalability, security, and performance. By integrating Firebase with React, I developed a secure user authentication system for login and signup, as well as a lab booking system that enables users to view and reserve lab slots through real-time database interactions. Additionally, I created a lab slot management system specifically for professors, streamlining the process of scheduling and managing availability. Throughout the project, I optimized database operations and system architecture to handle high traffic while maintaining performance and reliability." image={labstreamImg} linkName = "Here" link="https://github.com/Ridzz23" />
          <Card header="EzTerminal" content1="EzTerminal is a user-friendly and intuitive terminal application designed to simplify the command line experience for users of all skill levels. This desktop application features an improved user interface aimed at enhancing productivity and encouraging broader adoption of command-line tools. It offers a modern design with two customizable themes and includes an instant documentation finder capable of providing syntax details for over 1,000 Linux commands. Future updates will introduce advanced error-checking capabilities and automation tools to further streamline the user experience." content2="As a full-stack developer, I built this application entirely from scratch. The backend was developed using Rust, ensuring robust performance and reliability, and communicates seamlessly with the frontend via JavaScript through the Tauri framework. The frontend, crafted with HTML and CSS, was designed to provide an accessible and visually appealing user experience, making the application intuitive and easy to navigate." image={ezterminalImg} linkName = "EzTerminal Website" link="https://ezterminal.vercel.app/" />
          </div>
    </div>
  );
};

export default Home;
