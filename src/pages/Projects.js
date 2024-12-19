import React from 'react';
import Navbar from '../components/Navbar';
import '../App.css';
import Card from '../components/card';
import ezterminalImg from '../images/ezterminal.png';

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
        <Card header="EzTerminal" content="yellow mellow" image={ezterminalImg} linkName = "EzTerminal Website" link="https://ezterminal.vercel.app/" />
    </div>
    </div>
  );
};

export default Projects;
