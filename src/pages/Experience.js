import React from 'react';
import Navbar from '../components/Navbar';
import '../App.css';
import Card from '../components/card';
import lingoheroImg from '../images/lingohero.png';
import ieeeImg from '../images/ieee.png';
import labstreamImg from '../images/labstream.png';
import wicImg from '../images/wic.png';

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
          <Card
            header="LabStream"
            content1="Collaborating with a team of 8 developers and a professor to build a remote lab platform using React, Flask, and Firebase. Enables students to control real lab hardware remotely via a live-streaming interface."
            content2="Created the UI, secure login, Firebase-integrated booking system, and professor portal for lab slot management. Optimized performance for high-volume use."
            image={labstreamImg}
            linkName="Code on GitHub"
            link="https://github.com/UCSD-LabStream/Frontend"
          />
          <Card
            header="LingoHero"
            content1="Worked with ~20 devs/designers to build a gamified mobile app for language learning using mini-games and levels."
            content2="Built 4 full UI screens using React, improved interactivity, and participated in weekly team meetings to align on goals and fixes."
            image={lingoheroImg}
            linkName="LingoHero LinkedIn"
            link="https://www.linkedin.com/company/lingo-hero/posts/?feedView=all"
          />
          <Card
            header="Technical Chair at IEEE UCSD"
            content1="Planned and led technical workshops, including an ESP32, soldering, and Rust workshop. Promoted hands-on learning."
            content2="Taught Rust concepts and built a Lorenz attractor project. Helped host and mentor at a high school soldering workshop."
            image={ieeeImg}
            linkName="IEEE UCSD Website"
            link="https://ieeeucsd.org/"
          />
          <Card
            header="WIC Beginner Programming Competition"
            content1="WIC's BPC welcomes 100+ students each quarter with 10 beginner-friendly coding challenges in Python, Java, or C."
            content2="Wrote questions, solutions, and test cases. Managed logistics and helped execute three successful competitions."
            image={wicImg}
            linkName="WIC UCSD"
            link="https://wic.ucsd.edu/"
          />
        </div>
      </section>
    </div>
  );
};

export default Experience;
