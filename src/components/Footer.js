import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact Info</h3>
            <p>
              <i className="fas fa-phone"></i>
              <a href="tel:+919447218188">+91 9447218188</a>
            </p>
            <p>
              <i className="fas fa-envelope"></i>
              <a href="mailto:k.satheeshclt@gmail.com">k.satheeshclt@gmail.com</a>
            </p>
            <p>
              <i className="fas fa-map-marker-alt"></i>
              Calicut, Kerala, India
            </p>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li>Life Insurance</li>
              <li>Home Loans</li>
              <li>Financial Planning</li>
              <li>Documentation</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Connect With Us</h3>
            <div className="social-links">
              <a href="https://www.facebook.com/satheesh.koroth.5" className="social-link">
                <i className="fab fa-facebook-f"></i>
             </a>
              <a href="https://x.com/" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com" className="social-link">
                <i className="fab fa-linkedin-in"></i>
              </a> 
              <a href="https://www.instagram.com/koroth_satheesh/" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Satheesan Koroth. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
