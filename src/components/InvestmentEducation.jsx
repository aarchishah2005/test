import React from 'react';
import './InvestmentEducation.css';

const InvestmentEducation = () => {
  const features = [
    "Learn to take control of your finance in your hand",
    "Build the confidence & mindset needed to invest successfully",
    "Jumpstart your stock market journey and work part time",
    "Invest using simple strategy based on CAGR, Risk and Return",
    "No prior experience required to attend"
  ];

  return (
    <div className="investment-container">
      <div className="features-list">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            {feature}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvestmentEducation;