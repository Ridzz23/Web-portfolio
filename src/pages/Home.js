import React from 'react';
import Navbar from '../components/Navbar';
import '../App.css';
import linkedInImg from '../images/linkedin.png';
import githubImg from '../images/github.png';
import Card from '../components/card';
import ezterminalImg from '../images/ezterminal.png';


const Home = () => {

  const openLink = (link) => {
    console.log(link);
    window.open(link, "_blank");
  }

  return (
    <div>
      <Navbar />

        <h1 className="child-left">
          Hello World!<br></br>
          I'm Ridhi.
          </h1>
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
            <Card header="LabStream" content="yellow mellow" image={githubImg} linkName = "Here" link="https://github.com/Ridzz23" />
            <Card header="EzTerminal" content="yellow mellow" image={ezterminalImg} linkName = "EzTerminal Website" link="https://ezterminal.vercel.app/" />
            <Card header="LabStream" content="yellow mellow" image={githubImg} linkName = "Here" link="https://github.com/Ridzz23" />
          </div>
    </div>
  );
};

export default Home;
