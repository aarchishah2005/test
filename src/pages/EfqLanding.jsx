import React, { useEffect } from "react";
import "./EfqLanding.css";
import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSlider";
import Heading from "../components/heading";
import RegistrationForm from "../components/RegistrationForm";
import FeatureCards from "../components/FeatureCards";
import LogoScroller from "../components/LogoScroller";
import InvestmentEducation from "../components/InvestmentEducation";
import ContactForm from "../components/ContactForm";
import TestimonialCarousel from "../components/TestimonialCarousel";

function EfqLanding() {
  useEffect(() => {
    console.log("Scrolling to top...");
    window.scrollTo(0, 0); // Scrolls to the top when component mounts
  }, []);

  const handleFormSubmit = (data) => {
    console.log("Form submitted with data:", data);
  };

  return (
    <div className="EfqLanding">
      <div className="background">
        <Heading
          mainText="Feeling Clueless, Confused, or unsure how to start investing? "
          style={{ color: "#84c225",paddingTop: "20px", paddingBottom: "30px", fontSize: "20px", fontWeight: 700 }}
        />
        {/* Master Your Finances. Explore the World of Investment. Launch Your Career in the Stock Market.  Making Money Mistakes?  Fed up with Investment?   Dreaming of a Career in Stocks   */}
        <Heading
          mainText={
            <>
              Over 1,500+ people transformed financial fears 
              <br />
             into confidence with our Financial System - 
              <br />
               using easy steps and zero pressure.
            </>
          }
          style={{
            fontWeight: 999,
            fontSize: "35px",
            backgroundColor: "#ffff",
            paddingRight: "20px",
            paddingLeft: "20px",
            color:"#3B3531",
            borderRadius: "9px"
          }}
        />
        {/* Boost Your Financial Confidence with Our Program Our exclusive - EFQ session  Enrich Your Financial Quotient  #3B3531  background: linear-gradient(to right, #0d0c40, #4b0b64) */}

        <Heading
          mainText=
          {
            <>
              Whether your goal is ₹1L, ₹5L, or simply peace of mind -
              <br />
              it’s not just about money, it’s about freedom, confidence and
              <br />
              the life you truly deserve. Turn confusion into clarity, 
              <br/>
              start your investing journey and build unshakable money confidence - 
              <br/>
             even if you're starting from scratch.              
            </>
          }
          style={{
            color: "#84c225",
            paddingBottom: "20px",
            paddingTop: "20px",
            fontSize: "25px",
            fontWeight: 800,
          }}
        />
        <RegistrationForm onSubmit={handleFormSubmit} />
        <FeatureCards />
        <ImageSlider />
        <TestimonialCarousel />
        <InvestmentEducation />
        <LogoScroller />
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
            desk of 40+ professionals, and has trained 800+ individuals in
            investment and trading. A SEBI-registered research analyst and
            author of Mastering Options Delta Trading, she blends expertise in
            data analytics, risk management, and coaching to transform
            financial education.
          </div>
        }
      />
        <Footer />
      </div>
    </div>
  );
}

export default EfqLanding;
