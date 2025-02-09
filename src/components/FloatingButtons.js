import React from 'react';
import './FloatingButtons.css';

const FloatingButtons = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="floating-buttons">
      <button
        className="scroll-top-button"
        onClick={handleScrollToTop}
        aria-label="Scroll to top"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  );
};

export default FloatingButtons;
