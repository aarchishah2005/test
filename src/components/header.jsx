import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <nav className="header">
      <div>
        <Link to="/">
          <img src="/assets/logo.jpeg" alt="Brand Logo" className="brand-logo" />
        </Link>
      </div>

      <div className="nav-links">
        <NavLink to="/" text="Home" />
        <NavLink to="/about" text="About" />
        <a href="https://www.blissquants.com/Bliss_Coaching" target="_blank" rel="noopener noreferrer">Coaching</a>
        <NavLink to="/book" text="Book" />
        <NavLink to="/contact" text="Contact" />
      </div>
    </nav>
  );
};

const NavLink = ({ to, text }) => (
  <Link to={to} className="nav-link">
    <span>{text}</span>
  </Link>
);

export default Header;
