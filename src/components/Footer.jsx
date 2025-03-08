import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import Disclaimer from './Disclaimer';
import TermsOfService from './TermsOfService';
import PrivacyPolicy from './PrivacyPolicy';
import RefundPolicy from './RefundPolicy';
import Policies from './Policies';

// Import social media icons from react-icons
import { FaFacebookF, FaInstagram, FaGoogle, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);
    const [isTermsOpen, setIsTermsOpen] = useState(false);
    const [isPolicyOpen, setIsPolicyOpen] = useState(false);
    const [isRefundOpen, setIsRefundOpen] = useState(false);


  const openDisclaimer = (e) => {
    e.preventDefault();
    setIsDisclaimerOpen(true);
  };

  const closeDisclaimer = () => {
    setIsDisclaimerOpen(false);
  };

  const openTerms = (e) => {
    e.preventDefault();
    setIsTermsOpen(true);
  };

  const closeTerms = () => {
    setIsTermsOpen(false);
  };

  const openPolicy = (e) => {
    e.preventDefault();
    setIsPolicyOpen(true);
  };

  const closePolicy = () => {
    setIsPolicyOpen(false);
  };

  const openRefund = (e) => {
    e.preventDefault();
    setIsRefundOpen(true);
  };

  const closeRefund = () => {
    setIsRefundOpen(false);
  };

// const scrollToContact = () => {
//   const contactSection = document.getElementById("contact");
//   if (contactSection) {
//     contactSection.scrollIntoView({ behavior: "smooth" });
//     setMenuOpen(false); // Close menu after clicking
//   }
// };
    
  return (
    <>
      <footer className="footer">
        <div className="footer-wrapper">
          <div className="footer-content">
            <div className="copyright">
              <span>© 2025 BlissQuants Datalytics LLP All rights reserved</span>
            </div>
            
            <div className="footer-links">
                    <div className="separator">|</div>
                    <a href="https://blissquants.com/BlissAboutUs#collapseOne" className="footer-link" target="_blank" rel="noopener noreferrer">Company</a>
                    <div className="separator">|</div>
                    <a href="https://blissquants.com/BlissPeople" className="footer-link" target="_blank" rel="noopener noreferrer">Team</a>
                    <div className="separator">|</div>
                    <a href="https://blissquants.com/BlissAboutUs#collapseThree" className="footer-link" target="_blank" rel="noopener noreferrer">Career</a>
                    <div className="separator">|</div>
                    <a href="https://blissquants.com/BlissAboutUs#collapseFive" className="footer-link" target="_blank" rel="noopener noreferrer">Contact Us</a>
{/*                     <span className="footer-link" onClick={scrollToContact} style={{ cursor: "pointer" }}>
                        Contact Us
                    </span> */}

                    // <NavLink to="#contact" text="Contact" onClick={scrollToContact} /> 
                    <div className="separator">|</div>
                    <a href="#" className="footer-link" onClick={openDisclaimer}>Disclaimer</a>
                    <div className="separator">|</div>
                    <a href="#" className="footer-link" onClick={openTerms}>Terms of Service</a>
                    <div className="separator">|</div>
                    <a href="#" className="footer-link" onClick={openPolicy}>Privacy Policy</a>
                    <div className="separator">|</div>
                    <a href="#" className="footer-link" onClick={openRefund}>Refund Policy</a>
                    <div className="separator">|</div>
                    <Link to="/Policies" className="footer-link">Policies</Link>
                    <div className="separator">|</div>
                </div>
          </div>
          
          <div className="social-icons">
            <a href="https://www.facebook.com/blissquants" className="social-icon facebook" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
                <a href="https://www.instagram.com/falgunivahora/ " className="social-icon instagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a> 
            <a href="https://workspaceupdates.googleblog.com/2023/04/new-community-features-for-google-chat-and-an-update-currents%20.html" className="social-icon google" target="_blank" rel="noopener noreferrer">
              <FaGoogle />
            </a>
            <a href="https://www.linkedin.com/company/blissquants/" className="social-icon linkedin" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </footer>

      <Disclaimer isOpen={isDisclaimerOpen} onClose={closeDisclaimer} />
      <TermsOfService isOpen={isTermsOpen} onClose={closeTerms} />
      <PrivacyPolicy isOpen={isPolicyOpen} onClose={closePolicy} />
      <RefundPolicy isOpen={isRefundOpen} onClose={closeRefund} />
    </>
  );
};

export default Footer;
