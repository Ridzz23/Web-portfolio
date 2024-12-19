import React from 'react';
import Navbar from '../components/Navbar';
import '../App.css';

const Coursework = () => {
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
      <h1 className="child-left">Coursework</h1>
    </div>
    </div>
  );
};

export default Coursework;
