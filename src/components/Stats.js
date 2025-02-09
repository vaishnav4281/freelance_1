import React from 'react';
import './Stats.css';

const Stats = () => {
  const stats = [
    {
      number: '20+',
      label: 'Years Experience',
      icon: 'calendar-check'
    },
    {
      number: '1000+',
      label: 'Happy Clients',
      icon: 'users'
    },
    {
      number: '₹100Cr+',
      label: 'Loan Amount',
      icon: 'money-bill-wave'
    },
    {
      number: '100%',
      label: 'Success Rate',
      icon: 'chart-line'
    }
  ];

  return (
    <section id="stats" className="stats section-padding">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div className="stat-card" key={index}>
              <div className="stat-icon">
                <i className={`fas fa-${stat.icon}`}></i>
              </div>
              <h3 className="stat-number">{stat.number}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
