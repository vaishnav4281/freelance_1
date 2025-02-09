import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Business Owner',
      content: 'Mr. Satheesan helped me secure a home loan with the best interest rates. His guidance throughout the process was invaluable.',
      image: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      name: 'Priya Sharma',
      role: 'IT Professional',
      content: 'The life insurance policy recommended by Satheesan sir perfectly matches my family\'s needs. Very professional service!',
      image: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
      name: 'Mohammed Ali',
      role: 'Doctor',
      content: 'Excellent financial planning advice. He helped me plan my retirement with the right mix of investments and insurance.',
      image: 'https://randomuser.me/api/portraits/men/3.jpg'
    }
  ];

  return (
    <section id="testimonials" className="testimonials section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="text-gradient">Client Testimonials</h2>
          <p>What Our Clients Say About Us</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-content">
                <i className="fas fa-quote-left quote-icon"></i>
                <p>{testimonial.content}</p>
              </div>
              <div className="testimonial-author">
                <img src={testimonial.image} alt={testimonial.name} className="author-image" />
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
