import React from 'react';
import './financialprograms.css';

const FinancialPrograms = ({ heading, subheading }) => {
  return (
    <div className="financial-container">
      <div className="financial-content">
        <h1 className="financial-title">{heading}</h1>
        <p className="financial-text">{subheading}</p>
      </div>
    </div>
  );
};

export default FinancialPrograms;
