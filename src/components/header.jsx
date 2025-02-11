import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <>
    <nav className="header">
      <div>
        <Link to="/">
          <img src="/assets/logo.jpeg" alt="Brand Logo" className="brand-logo" />
        </Link>
      </div>

      <div className="nav-links">
        <NavLink to="/" text="Home" />
        <NavLink to="/about" text="About" />
        <NavLink to="https://www.blissquants.com/Bliss_Coaching" text="Coaching" />
        <NavLink to="https://www.amazon.in/dp/B09NWH5S7R" text="Book" />
        <NavLink to="https://www.blissquants.com/BlissAboutUs#collapseOne" text="Contact" />
      </div>
    </nav>

    <hr className="nav-line" />
      </>
  );
};

const NavLink = ({ to, text }) => (
  <Link to={to} className="nav-link">
    <span>{text}</span>
  </Link>
);

export default Header;
