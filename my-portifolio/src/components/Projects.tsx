
import React from 'react';
import { ArrowUp } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Cancer Detection in Machine Learning",
      semester: "Semester 4",
      description: "This project focuses on the essential task of detecting cancer stage and lifetime duration using machine learning algorithms and data analysis techniques.",
      tech: ["Machine Learning", "Python", "Data Analysis"],
      highlight: true
    },
    {
      title: "Email Client using SMTP and POP3",
      semester: "Semester 5", 
      description: "We have been grouped for this project and the mail transfer has been successfully done in the C++ language using API key of Email service.",
      tech: ["C++", "SMTP", "POP3", "API Integration"],
      highlight: false
    },
    {
      title: "Geological Map using Neo4j",
      semester: "Semester 5",
      description: "In this project I have used HTML (front-end) and node.js (back-end) connected with Neo4j database for geological mapping and visualization.",
      tech: ["HTML", "Node.js", "Neo4j", "Database"],
      highlight: false
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">
          Featured Projects
        </h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`project-card ${project.highlight ? 'project-highlight' : ''}`}
            >
              <div className="project-header">
                <div className="project-info">
                  <div className="project-meta">
                    <span className="project-semester">
                      {project.semester}
                    </span>
                    <ArrowUp className="project-arrow" />
                  </div>
                  <h3 className="project-title">
                    {project.title}
                  </h3>
                </div>
              </div>
              
              <p className="project-description">
                {project.description}
              </p>
              
              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="tech-tag"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="project-overlay" />
            </div>
          ))}
        </div>
        
        <div className="projects-cta">
          <p className="cta-text">
            Interested in seeing more of my work or collaborating on a project?
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="cta-button"
          >
            Let's Connect
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
