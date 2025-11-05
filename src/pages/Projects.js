import React from 'react';
import Navbar from '../components/Navbar';
import '../App.css';
import Card from '../components/card';
import projectsData from '../data/projects.json';

// Import all images
import ezterminalImg from '../images/ezterminal.png';
import hardwareImg from '../images/hardwareBlog.png';
import meetbookImg from '../images/meetBook.png';
import robocupImg from '../images/robo.png';
import mangroveImg from '../images/mangrove.png';
import gamedevImg from '../images/games.png';

// Map image names from JSON to actual imports
const imageMap = {
  "ezterminal.png": ezterminalImg,
  "hardwareBlog.png": hardwareImg,
  "meetBook.png": meetbookImg,
  "robo.png": robocupImg,
  "mangrove.png": mangroveImg,
  "games.png": gamedevImg
};

const Projects = () => {
  return (
    <div style={{ backgroundColor: '#f8f9fb', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      <Navbar />

      <section style={{ textAlign: 'center', padding: '60px 20px 20px' }}>
        <h1 style={{ fontSize: '36px', color: '#1a1f36' }}>Projects</h1>
        <p style={{ fontSize: '16px', color: '#666' }}>What I have built.</p>
      </section>

      <hr style={{ maxWidth: '1200px', margin: '0 auto 40px', borderColor: '#ddd' }} />

      <section className="cards-container" style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '40px',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px 60px'
      }}>
        {projectsData.map((project, index) => (
          <Card
            key={index}
            header={project.header}
            content1={project.content1}
            content2={project.content2}
            image={imageMap[project.image]}
            linkName={project.linkName}
            link={project.link}
          />
        ))}
      </section>
    </div>
  );
};

export default Projects;
