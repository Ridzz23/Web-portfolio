import React from 'react';
import Navbar from '../Navbar';
import '../App.css';

const Projects = () => {
  return (
    <div>
      <Navbar />
    <div
      className="container center-align"
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <h1 className="App-header">Projects</h1>
    </div>
    </div>
  );
};

export default Projects;
