import React from 'react';
import Navbar from '../Navbar';
import '../App.css';


const Home = () => {
  return (
    <div>
      <Navbar />
      <div
        className="container left-align"
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <h1 className="App-header">
          Hello World!<br></br>
          I'm Ridhi.
          </h1>
      </div>
    </div>
  );
};

export default Home;
