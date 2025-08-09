import React from 'react';
import Navbar from '../components/Navbar';
import '../App.css';
import Card from '../components/card';
import experienceData from '../data/experience.json';

// Import images
import lingoheroImg from '../images/lingohero.png';
import ieeeImg from '../images/ieee.png';
import labstreamImg from '../images/labstream.png';
import wicImg from '../images/wic.png';

// Map image file names from JSON to imported images
const imageMap = {
  "lingohero.png": lingoheroImg,
  "ieee.png": ieeeImg,
  "labstream.png": labstreamImg,
  "wic.png": wicImg
};

const Experience = () => {
  return (
    <div style={{ backgroundColor: '#f8f9fb', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      <Navbar />

      <section className="experience-header" style={{ textAlign: 'center', padding: '60px 20px 40px' }}>
        <h1 style={{ fontSize: '36px', color: '#222', marginBottom: '10px' }}>Experience</h1>
        <p style={{ fontSize: '16px', color: '#666' }}>What I've worked on and contributed to.</p>
      </section>

      <section className="cards-section" style={{ backgroundColor: '#fff', padding: '60px 20px' }}>
        <div className="cards-container" style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '40px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {experienceData.map((exp, index) => (
            <Card
              key={index}
              header={exp.header}
              content1={exp.content1}
              content2={exp.content2}
              image={imageMap[exp.image]}
              linkName={exp.linkName}
              link={exp.link}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Experience;
