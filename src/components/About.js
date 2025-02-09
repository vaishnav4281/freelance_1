import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-header">
        <h1>About Satheesan Koroth</h1>
        <p>Senior Insurance Advisor & Home Loan Associate at LIC HFL</p>
      </div>

      <div className="about-content">
        <div className="profile-section">
          <div className="profile-image">
            {/* Add Satheesan's photo here */}
            <img src={`${process.env.PUBLIC_URL}/images/profile.png`} alt="Satheesan Koroth" />
          </div>
          <div className="profile-info">
            <h2>Professional Experience</h2>
            <p>With over 20 years of experience in the insurance and home loan industry, I have helped numerous families secure their future and achieve their dream of owning a home.</p>
            
            <div className="expertise">
              <h3>Areas of Expertise</h3>
              <ul>
                <li>Life Insurance Planning</li>
                <li>Home Loan Processing</li>
                <li>Financial Advisory</li>
                <li>Risk Management</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="achievements-section">
          <h2>Achievements & Recognition</h2>
          <div className="achievements-grid">
            <div className="achievement-card">
              <i className="fas fa-trophy"></i>
              <h3>Top Performer</h3>
              <p>Consistently ranked among top insurance advisors</p>
            </div>
            <div className="achievement-card">
              <i className="fas fa-users"></i>
              <h3>Client Base</h3>
              <p>Trusted by 100+ satisfied clients</p>
            </div>
            <div className="achievement-card">
              <i className="fas fa-certificate"></i>
              <h3>Certified Professional</h3>
              <p>Licensed insurance advisor with advanced certifications</p>
            </div>
          </div>
        </div>

        <div className="mission-section">
          <h2>Our Mission</h2>
          <p>To provide comprehensive financial solutions that help individuals and families achieve their life goals while ensuring their financial security. We believe in building long-term relationships based on trust, transparency, and personalized service.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
