
import React, { useState, useEffect, useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    { name: 'C++', level: 70, category: 'Programming' },
    { name: 'Python', level: 85, category: 'Programming' },
    { name: 'Java', level: 65, category: 'Programming' },
    { name: 'HTML/CSS', level: 80, category: 'Web Development' },
    { name: 'Machine Learning', level: 75, category: 'AI/ML' },
    { name: 'Data Science', level: 70, category: 'AI/ML' },
    { name: 'React', level: 60, category: 'Web Development' },
    { name: 'Node.js', level: 55, category: 'Backend' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">
          Skills & Expertise
        </h2>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={skill.name} className="skill-card">
              <div className="skill-header">
                <h3 className="skill-name">{skill.name}</h3>
                <span className="skill-category">{skill.category}</span>
              </div>
              
              <div className="skill-bar-container">
                <div
                  className="skill-bar"
                  style={{
                    width: isVisible ? `${skill.level}%` : '0%',
                    transitionDelay: `${index * 100}ms`
                  }}
                />
              </div>
              
              <div className="skill-footer">
                <span className="skill-label">Proficiency</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>

        <div className="certifications-section">
          <h3 className="certifications-title">Certifications</h3>
          <div className="certifications-grid">
            <div className="certifications-column">
              <div className="certification-item purple">
                <h4 className="certification-name">ONECREDIT COURSE - NLP</h4>
              </div>
              <div className="certification-item blue">
                <h4 className="certification-name">NPTEL- Certification on Python</h4>
              </div>
              <div className="certification-item teal">
                <h4 className="certification-name">NPTEL- Certification on Java</h4>
              </div>
            </div>
            <div className="certifications-column">
              <div className="certification-item purple">
                <h4 className="certification-name">NPTEL- Responsible & Safe AI Systems</h4>
              </div>
              <div className="certification-item blue">
                <h4 className="certification-name">IEEE Course-English for Technical Professionals (2023)</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
