import React from 'react';
import Navbar from '../components/Navbar';
import '../App.css';
import Card from '../components/card';
import githubImg from '../images/github.png';

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
    <Card header="LabStream" content1="Collaborating with a team of 8 developers under the guidance of Professor Saharnaz Baghdadchi to develop a virtual lab platform for the Electrical and Computer Engineering department at UCSD. The web application enables students to control lab equipment and conduct experiments through an interactive React-based UI, with real-time feedback provided via a live camera feed streamed through WebSockets. Student inputs, such as increasing motor speed, are processed through a Flask backend, where Python automation scripts communicate with ESP32 microcontrollers to execute commands in the lab setup. This project combines hardware automation and software development to create a hands-on, remote learning experience for students." content2="hello" image={githubImg} linkName = "Here" link="https://github.com/Ridzz23" />
    </div>
    </div>
  );
};

export default Experience;
