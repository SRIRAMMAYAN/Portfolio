
import React from 'react';
import { Mail, Linkedin, Github, ArrowUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-info">
            <h3 className="footer-name">SRIRAM MAYAN P</h3>
            <p className="footer-title">AI Student & Aspiring Data Scientist</p>
          </div>
          
          <div className="footer-social">
            <a
              href="mailto:mayansriram@gmail.com"
              className="social-link"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sriram-mayan-/"
              className="social-link"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/SRIRAMMAYAN"
              className="social-link"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Sriram Mayan P. All rights reserved.</p>
          <p className="footer-tech">Built with React & CSS</p>
        </div>
      </div>
      
      <button
        onClick={scrollToTop}
        className="scroll-top-btn"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
