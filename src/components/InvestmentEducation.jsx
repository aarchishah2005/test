import React from 'react';
import './InvestmentEducation.css';
{/*  "Learn to take control of your finance in your hand",
    "Build the confidence & mindset needed to invest successfully",
    "Jumpstart your stock market journey and work part time",
    "Invest using simple strategy based on CAGR, Risk and Return",
    "No prior experience required to attend"  */} 

const InvestmentEducation = () => {
  const features = [
   
   "Take Control of Your Finances — No Experience Needed!",
   "Learn to manage your money with clarity and confidence",
   "Build the mindset needed to invest fearlessly",
   "Start your stock market journey — even part-time",
   "Use simple strategies based on risk & return",
   "No jargon. No confusion. Just practical tools that work"
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
