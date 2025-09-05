import React from 'react';
import Navbar from '../components/Navbar';
import '../App.css';
import linkedInImg from '../images/linkedin.png';
import githubImg from '../images/github.png';
import profileImg from '../images/profile.png';
import Card from '../components/card';

// Import featured projects JSON
import featuredData from '../data/featured.json';

// Import images for mapping
import neuralnetImg from '../images/neuralnet.png';
import pythonShellImg from '../images/python_shell.png';

const imageMap = {
  "neuralnet.png": neuralnetImg,
  "python_shell.png": pythonShellImg
};

const Home = () => {
  const openLink = (link) => window.open(link, "_blank");

  return (
    <div className="home-container" style={{ backgroundColor: '#f8f9fb', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      <Navbar />

      {/* Profile Section */}
      <section className="profile-section" style={{ textAlign: 'center', padding: '60px 20px 40px' }}>
        <img src={profileImg} alt="Profile" style={{ width: '140px', height: '140px', borderRadius: '50%', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }} />
        <h2 style={{ margin: '25px 0 10px', fontSize: '28px', color: '#222' }}>Ridhi Srikanth</h2>
        <p style={{ color: '#555', fontSize: '16px' }}>Computer Engineering Student at UC San Diego</p>
        <p style={{ fontSize: '15px', color: '#777', marginBottom: '20px' }}>📍 San Diego, CA</p>

        {/* Social Buttons */}
        <div className="social-buttons" style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
          <button onClick={() => openLink("https://www.linkedin.com/in/ridhi-srikanth-8495a6222/")} style={socialButtonStyle}>
            <img src={linkedInImg} alt="LinkedIn" style={{ width: '65px' }} />
          </button>
          <button onClick={() => openLink("https://github.com/Ridzz23")} style={socialButtonStyle}>
            <img src={githubImg} alt="GitHub" style={{ width: '70px' }} />
          </button>
        </div>

        {/* About */}
        <p style={{ marginTop: '30px', maxWidth: '600px', margin: '30px auto 0', fontSize: '16px', color: '#444', lineHeight: 1.6 }}>
          Curiosity drives me to explore, and determination ensures I follow through. I am a Computer Engineering student at UCSD, engaged
          in software development and CS research. I learn quickly and turn ideas into results, persisting through challenges to achieve success.
        </p>

        {/* Tech Stack */}
        <div className="tech-stack" style={{
          marginTop: '35px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '12px'
        }}>
          {['React', 'Rust', 'Flask', 'Python', 'Firebase', 'Shell', 'Java', 'C++'].map((tech) => (
            <span key={tech} style={techBadgeStyle}>{tech}</span>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="projects-section" style={{ backgroundColor: '#fff', padding: '60px 20px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '50px', fontSize: '36px', color: '#222' }}>Featured</h1>
        <div className="cards-container" style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '40px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {featuredData.map((proj, index) => (
            <Card
              key={index}
              header={proj.header}
              content1={proj.content1}
              content2={proj.content2}
              image={imageMap[proj.image]}
              linkName={proj.linkName}
              link={proj.link}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

const socialButtonStyle = {
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  borderRadius: '50%',
  width: '100px',
  height: '100px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  transition: 'transform 0.2s ease',
};

const techBadgeStyle = {
  backgroundColor: '#e9eef2',
  padding: '8px 14px',
  borderRadius: '20px',
  fontSize: '14px',
  color: '#333',
  transition: 'background 0.3s ease',
};

export default Home;
