import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="container hero-container">
          <div className="hero-content" data-aos="fade-right">
            <h1>
              Secure Your Future with
              <span className="text-gradient"> Expert Financial Solutions</span>
            </h1>
            <p>
              As a Senior Insurance Advisor & Home Loan Associate at LIC HFL,
              I help individuals and families achieve their financial goals through
              comprehensive insurance coverage and hassle-free home loans.
            </p>
            <div className="hero-cta">
              <a href="#services" className="btn btn-primary">
                Explore Services
              </a>
              <a href="#contact" className="btn btn-outline">
                Get Free Consultation
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat-item" data-aos="fade-up" data-aos-delay="100">
                <h3>20+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-item" data-aos="fade-up" data-aos-delay="200">
                <h3>1000+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="stat-item" data-aos="fade-up" data-aos-delay="300">
                <h3>₹100Cr+</h3>
                <p>Loans Processed</p>
              </div>
            </div>
          </div>
          <div className="hero-image" data-aos="fade-left">
            <div className="image-container">
              <img src={`${process.env.PUBLIC_URL}/images/profile.png`} alt="Satheesan Koroth" />
            </div>
            <div className="experience-badge">
              <span>20+</span>
              <p>Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-shape">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
