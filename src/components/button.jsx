import React from 'react';
import './button.css';

const Button = ({ text }) => {
  return (
    <div className="button-container">
        <button className="explore-button">
                {text}
        </button>
    </div>
  );
};

export default Button;
