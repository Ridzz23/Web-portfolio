import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Experience from './pages/Experience.js';
import Projects from './pages/Projects.js';
import Coursework from './pages/Coursework.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/coursework" element={<Coursework />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
