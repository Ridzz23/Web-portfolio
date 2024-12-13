import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {

  return (
    <div class="navbar">
        <a href="/">Home</a>
        <a href="/experience">Experience</a>
        <a href="/projects">Projects</a>
        <a href="/coursework">Coursework</a>
    </div>

  );
};

export default Navbar;
