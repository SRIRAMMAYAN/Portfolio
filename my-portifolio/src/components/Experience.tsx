
import React from 'react';
import './Experience.css';

const Experience = () => {
  const education = [
    {
      institution: "MEDCO ENGINEERING COLLEGE, SIVAKASI",
      degree: "AI & Data Science Engineering",
      period: "2022-2026",
      details: "CGPA - 6.58 (sem6)"
    },
    {
      institution: "KEREN METRIC HR SEC SCHOOL, MADURAI",
      degree: "HSC (COMPUTER SCIENCE)",
      period: "2021-2022",
      details: "88.74% • SSLC • 66.8%"
    }
  ];

  const activities = [
    "Image Prompting",
    "Brainstorming Session", 
    "Technical Quiz",
    "Badminton Zonals",
    "Chess District Level",
    "Yoga District Level"
  ];

  const events = [
    "Hatsun Dairy Institute- Tirunelveli",
    "Science Park- Tirunelveli", 
    "IT Institute- Bangalore",
    "ISRO- Bangalore"
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2 className="experience-title">
          Education & Experience
        </h2>
        
        <div className="experience-grid">
          {/* Education Timeline */}
          <div className="education-section">
            <h3 className="section-title">Education</h3>
            {education.map((edu, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-line"></div>
                
                <div className="education-card">
                  <div className="education-header">
                    <h4 className="education-institution">{edu.institution}</h4>
                    <span className="education-period">{edu.period}</span>
                  </div>
                  <p className="education-degree">{edu.degree}</p>
                  <p className="education-details">{edu.details}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Activities & Events */}
          <div className="activities-section">
            <div className="activities-block">
              <h3 className="section-title">Co-Curricular Activities</h3>
              <div className="activities-card">
                <div className="activities-grid">
                  {activities.map((activity, index) => (
                    <div key={index} className="activity-item">
                      <div className="activity-dot"></div>
                      <span className="activity-text">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="events-block">
              <h3 className="section-title">Events Attended</h3>
              <div className="events-card">
                <div className="events-list">
                  {events.map((event, index) => (
                    <div key={index} className="event-item">
                      <div className="event-dot"></div>
                      <span className="event-text">{event}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
