import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="copyright">
          © 2025 Falguni Vahora. All Rights Reserved.
        </div>
        <div className="legal-links">
          <Link to="/disclaimer" className="footer-link">Disclaimer</Link>
          <Link to="/privacy" className="footer-link">Privacy Policy</Link>
          <Link to="/terms" className="footer-link">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );

};

export default Footer;
