import React, { useEffect } from "react";
import "./EfqLanding.css";
import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSlider";
import Heading from "../components/heading";
import RegistrationForm from "../components/RegistrationForm";
import FeatureCards from "../components/FeatureCards";
import LogoScroller from "../components/LogoScroller";
import InvestmentEducation from "../components/InvestmentEducation";
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
              Over 1,500+ people transformed financial fears into confidence
              <br />
              with our Financial System — using
              <br />
              simple language, easy steps, and zero pressure.
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
          mainText="Whether your goal is ₹1L, ₹5L, or simply peace of mind — it’s not just about money, it’s about freedom, confidence, and the life you truly deserve. Turn confusion into clarity, start your investing journey and build unshakable money confidence — even if you're starting from scratch."
          style={{
            color: "#84c225",
            paddingBottom: "20px",
            paddingTop: "20px",
            fontSize: "30px",
            fontWeight: 500,
          }}
        />
        <RegistrationForm onSubmit={handleFormSubmit} />

        <FeatureCards />
        <ImageSlider />
        <TestimonialCarousel />
        <InvestmentEducation />
        <LogoScroller />

        <Footer />
      </div>
    </div>
  );
}

export default EfqLanding;
