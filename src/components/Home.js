import React from 'react';
import './Home.css';

const Home = () => {
  const scrollToServices = () => {
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content animate__animated animate__fadeIn">
          <h1 className="animate__animated animate__fadeInDown">Satheesan Koroth</h1>
          <h2 className="animate__animated animate__fadeInUp">Senior Insurance Advisor & Home Loan Associate</h2>
          <p className="animate__animated animate__fadeIn animate__delay-1s">
            Securing Your Future with Expert Financial Solutions
          </p>
          <div className="cta-buttons animate__animated animate__fadeIn animate__delay-1s">
            <button onClick={scrollToServices} className="cta-button primary">
              Explore Services
            </button>
            <a href="#contact" className="cta-button secondary">
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      <div className="quick-info">
        <div className="info-card animate__animated animate__fadeInUp">
          <i className="fas fa-shield-alt"></i>
          <h3>Life Insurance</h3>
          <p>Comprehensive coverage for you and your family</p>
        </div>
        <div className="info-card animate__animated animate__fadeInUp animate__delay-1s">
          <i className="fas fa-home"></i>
          <h3>Home Loans</h3>
          <p>Hassle-free home loan solutions</p>
        </div>
        <div className="info-card animate__animated animate__fadeInUp animate__delay-2s">
          <i className="fas fa-chart-line"></i>
          <h3>Financial Planning</h3>
          <p>Expert guidance for your financial future</p>
        </div>
      </div>

      <div className="stats-section">
        <div className="stat-card animate__animated animate__fadeIn">
          <h3>20+</h3>
          <p>Years Experience</p>
        </div>
        <div className="stat-card animate__animated animate__fadeIn animate__delay-1s">
          <h3>1000+</h3>
          <p>Happy Clients</p>
        </div>
        <div className="stat-card animate__animated animate__fadeIn animate__delay-2s">
          <h3>₹100Cr+</h3>
          <p>Loans Processed</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
