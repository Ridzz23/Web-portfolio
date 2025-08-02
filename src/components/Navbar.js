import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar-new">
      <div className="navbar-left">
        <a href="/" className="navbar-brand">Ridhi Srikanth</a>
      </div>
      <div className="navbar-right">
        <a href="/">Home</a>
        <a href="/experience">Experience</a>
        <a href="/projects">Projects</a>
      </div>
    </nav>
  );
};

export default Navbar;
