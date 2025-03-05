import React from 'react';
import { Link } from 'react-router-dom';
import './button.css';

const Button = ({ text }) => {
  return (
    <div className="button-container">
      <Link to="/EfqLanding" className="explore-button">
        {text}
      </Link>
    </div>
  );
};

export default Button;