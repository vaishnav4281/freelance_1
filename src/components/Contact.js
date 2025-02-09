import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>Get in Touch</h2>
          <p>Ready to secure your future? Contact us today!</p>
        </div>

        <div className="contact-content" data-aos="fade-up" data-aos-delay="100">
          <div className="contact-info">
            <div className="contact-card">
              <i className="fas fa-phone-alt"></i>
              <h3>Call Us</h3>
              <p>Available 24/7 for your queries</p>
              <a href="tel:+919447218188" className="contact-link">
                +91 9447218188
              </a>
            </div>

            <div className="contact-card">
              <i className="fas fa-envelope"></i>
              <h3>Email Us</h3>
              <p>Get detailed information via email</p>
              <a href="mailto:k.satheeshclt@gmail.com" className="contact-link">
              k.satheeshclt@gmail.com
              </a>
            </div>

            <div className="contact-card">
              <i className="fab fa-whatsapp"></i>
              <h3>WhatsApp</h3>
              <p>Quick responses on WhatsApp</p>
              <a 
                href="https://wa.me/919447218188?text=Hi,%20I%20would%20like%20to%20know%20more%20about%20your%20services" 
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="contact-card">
              <i className="fas fa-map-marker-alt"></i>
              <h3>Visit Us</h3>
              <p>Meet us at our office</p>
              <a 
                href="https://maps.app.goo.gl/brHF22Gk3E8WAb6J8" 
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
            </div>
          </div>

          <div className="contact-cta">
            <h3>Ready to Get Started?</h3>
            <p>Choose the most convenient way to reach us. We're here to help you with all your insurance and loan needs.</p>
            <div className="cta-buttons">
              <a href="tel:+919447218188" className="cta-button primary">
                <i className="fas fa-phone-alt"></i> Call Now
              </a>
              <a 
                href="https://wa.me/919447218188" 
                className="cta-button secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp"></i> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
