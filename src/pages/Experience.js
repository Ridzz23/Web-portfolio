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
    <Card header="LabStream" content="yellow mellow" image={githubImg} linkName = "Here" link="https://github.com/Ridzz23" />
    </div>
    </div>
  );
};

export default Experience;
