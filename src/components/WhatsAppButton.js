import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const phoneNumber = '+919447218188'; // Replace with actual phone number
  const message = 'Hello, I would like to know more about your services.';
  
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <button className="whatsapp-button" onClick={handleWhatsAppClick}>
      <i className="fab fa-whatsapp"></i>
      <span className="tooltip">Chat on WhatsApp</span>
    </button>
  );
};

export default WhatsAppButton;
