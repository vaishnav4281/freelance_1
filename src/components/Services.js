import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: 'shield-alt',
      title: 'Life Insurance',
      description: 'Comprehensive life insurance solutions to protect your family\'s future.',
      features: [
        'Term Life Insurance',
        'Endowment Plans',
        'Money Back Policies',
        'Child Plans',
        'Pension Plans'
      ]
    },
    {
      icon: 'home',
      title: 'Home Loans',
      description: 'Affordable home loan solutions with competitive interest rates.',
      features: [
        'New Home Purchase',
        'Home Construction',
        'Home Extension',
        'Plot Purchase',
        'Balance Transfer'
      ]
    },
    {
      icon: 'chart-line',
      title: 'Investment Plans',
      description: 'Secure your financial future with our investment solutions.',
      features: [
        'ULIPs',
        'Wealth Creation Plans',
        'Tax Saving Plans',
        'Retirement Plans',
        'Regular Income Plans'
      ]
    },
    {
      icon: 'hand-holding-heart',
      title: 'Health Insurance',
      description: 'Protect yourself and your family with comprehensive health coverage.',
      features: [
        'Medical Insurance',
        'Critical Illness Cover',
        'Personal Accident Cover',
        'Family Floater Plans',
        'Senior Citizen Plans'
      ]
    },
    {
      icon: 'building',
      title: 'Property Services',
      description: 'Complete assistance for all your property-related needs.',
      features: [
        'Property Valuation',
        'Legal Verification',
        'Documentation Support',
        'Property Insurance',
        'Advisory Services'
      ]
    },
    {
      icon: 'comments',
      title: 'Expert Consultation',
      description: 'Professional guidance for your financial planning needs.',
      features: [
        'Financial Planning',
        'Risk Assessment',
        'Portfolio Review',
        'Tax Planning',
        'Retirement Planning'
      ]
    }
  ];

  return (
    <section id="services" className="services section-padding">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>Our Services</h2>
          <p>Comprehensive Insurance & Financial Solutions</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="service-icon">
                <i className={`fas fa-${service.icon}`}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <i className="fas fa-check"></i>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="service-cta">
                Learn More <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
