import React, { useEffect } from "react";
import ContactForm from "../components/ContactForm";
import Information from "../components/Information";
import Footer from "../components/Footer";
import './Contact.css';

function Contact() {
  useEffect(() => {
    console.log("Scrolling to top...");
    window.scrollTo(0, 0);  // Scroll to top on component mount
  }, []);

  return (
    <div className="contact">
      <ContactForm
        infoText={
          <div style={{ fontSize: "18px", lineHeight: "1.7" }}>
            <span style={{ fontWeight: "bold" }}>Let's Connect</span>
            <br />
            <br />
            Falguni Vahora is a fearless finance leader, investor, and
            advocate for financial empowerment, especially for women.
            <br />
            <br />
            A BE-EC graduate from NIT Surat, she has 27+ years of experience
            spanning software development, teaching, finance, and stock market
            trading. She co-founded BlissQuants Analytics, leads a trading
            desk of 40+ professionals, and has trained 1500+ individuals in
            investment and trading. A SEBI-registered research analyst and
            author of Mastering Options Delta Trading, she blends expertise in
            data analytics, risk management, and coaching to transform
            financial education.
          </div>
        }
      />

      <Information />

      {/* <SocialMedia /> */}
      {/* <Update /> */}

      <Footer />
    </div>
  );
}

export default Contact;
