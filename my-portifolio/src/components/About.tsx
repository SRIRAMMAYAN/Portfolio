
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">
          About Me
        </h2>
        
        <div className="about-grid">
          <div className="about-left">
            <div className="about-card">
              <h3 className="about-card-title">Profile</h3>
              <p className="about-card-text">
                A passionate and dedicated student currently pursuing a degree in Artificial Intelligence and Data Science Engineering. 
                My academic background is complemented by hands-on projects, where I have applied AI techniques to real-world problems.
              </p>
            </div>
            
            <div className="about-card">
              <h3 className="about-card-title">Personal Info</h3>
              <div className="about-info">
                <p><strong>Phone:</strong> +91 9843227159</p>
                <p><strong>Email:</strong> mayansriram@gmail.com</p>
                <p><strong>Location:</strong> 13/7 2nd St, Madurai</p>
                <p><strong>LinkedIn:</strong> https://www.linkedin.com/in/sriram-mayan-/</p>
                <p><strong>GitHub:</strong> https://github.com/SRIRAMMAYAN</p>
              </div>
            </div>
          </div>
          
          <div className="about-right">
            <div className="about-card">
              <h3 className="about-card-title">Languages</h3>
              <div className="about-languages">
                <div className="language-item">
                  <span className="language-name">Tamil</span>
                  <span className="language-level">(Fluent)</span>
                </div>
                <div className="language-item">
                  <span className="language-name">English</span>
                  <span className="language-level">(Fluent)</span>
                </div>
                <div className="language-item">
                  <span className="language-name">French</span>
                  <span className="language-level">(Basic)</span>
                </div>
              </div>
            </div>
            
            <div className="about-card">
              <h3 className="about-card-title">Interests</h3>
              <div className="about-interests">
                {['Machine Learning', 'Data Science', 'Web Development', 'Chess', 'Yoga', 'Badminton'].map((interest) => (
                  <span key={interest} className="interest-tag">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
