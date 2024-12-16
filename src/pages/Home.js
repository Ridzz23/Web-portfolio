import React from 'react';
import Navbar from '../components/Navbar';
import '../App.css';


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
              <button class="button1" type="button" onClick={() => openLink("https://www.linkedin.com/in/ridhi-srikanth-8495a6222/")}>LinkedIn</button>
              <button class="button1" type="button" onClick={() => openLink("https://github.com/Ridzz23")}>Github</button>
            </div>
          </div>
    </div>
  );
};

export default Home;
