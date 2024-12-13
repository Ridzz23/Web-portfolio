import React from 'react';
import Navbar from '../Navbar';
import '../App.css';

const Coursework = () => {
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
      <h1 className="App-header">Coursework</h1>
    </div>
    </div>
  );
};

export default Coursework;
