
import React from 'react';
import { ArrowDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-avatar">
          <img
            src="..\public\PASSPORT SIZW.png"
            alt="Sriram Mayan P"
            className="hero-image"
          />
        </div>
        
        <h1 className="hero-title">
          SRIRAM MAYAN P
        </h1>
        
        <p className="hero-subtitle">
          AI STUDENT & ASPIRING DATA SCIENTIST
        </p>
        
        <p className="hero-description">
          A passionate and dedicated student pursuing a degree in Artificial Intelligence and Data Science Engineering. 
        </p>
        
        <div className="hero-buttons">
          <button
            onClick={scrollToAbout}
            className="hero-btn hero-btn-secondary"
          >
            Learn More About Me
          </button>
          <a
            href="#contact"
            className="hero-btn hero-btn-primary"
          >
            Get In Touch
          </a>
        </div>
      </div>
      
      <button
        onClick={scrollToAbout}
        className="hero-scroll-btn"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
};

export default Hero;
