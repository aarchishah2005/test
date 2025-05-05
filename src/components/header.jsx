import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { Menu } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Close menu after clicking
    }
  };

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      <nav className="header">
        <div className="header-left"></div>

        <div className="brand-container">
          <Link to="/">
          <>
            <img src="/assets/logofinal.jpeg" alt="Brand Logo" className="brand-logo" />
          </>
          </Link>
        </div>

        {/* <div className="menu-button-container">
          <button className="menu-button" onClick={toggleMenu}>Menu</button>
        </div> */}

    <div className="menu-button-container">
        <button className="menu-button" onClick={toggleMenu}>
          <Menu size={24} />
        </button>
    </div>

      </nav>

      {/* Dropdown menu */}
      <div ref={menuRef} className={`dropdown-menu ${menuOpen ? 'open' : ''}`}>

        <NavLink to="/" text="Home" onClick={toggleMenu} />
{/*         <NavLink to="/about" text="About" onClick={toggleMenu} /> */}
     {/*   <NavLink to="/Coaching" text="Coaching" onClick={toggleMenu} /> */}
{/*          <NavLink to="/EfqLanding" text="Session" onClick={toggleMenu} /> {/* Updated Contact */} */}
        <NavLink to="/EfqLanding_kids" text="Session" onClick={toggleMenu} /> {/* Updated Contact */}
        <NavLink to="https://www.amazon.in/dp/B09NWH5S7R" text="Book" onClick={toggleMenu} />
        <NavLink to="/Contact" text="Contact" onClick={scrollToContact} />
        
      </div>
   

      <hr
        style={{
          width: "100%",
          margin: "0 auto",
          border: "none",
          height: "1px",
          backgroundColor: "white",
        }}
      />
    </>
  );
};

const NavLink = ({ to, text, onClick }) => {
  const isExternal = to.startsWith("http");

  return isExternal ? (
    <a 
      href={to} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="nav-link"
      onClick={onClick}
    >
      <span>{text}</span>
    </a>
  ) : (
    <Link to={to} className="nav-link" onClick={onClick}>
      <span>{text}</span>
    </Link>
  );
};

export default Header;
