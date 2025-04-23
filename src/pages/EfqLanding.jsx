import React, { useEffect } from "react";
import "./EfqLanding.css";
import Footer from "../components/Footer";
import ImageSlider from '../components/ImageSlider';
import Heading from '../components/heading';
import DateDay from "../components/DateDay";
import RegistrationForm from '../components/RegistrationForm';
import FeatureCards from '../components/FeatureCards';
import LogoScroller from "../components/LogoScroller";
import InvestmentEducation from "../components/InvestmentEducation";
import TestimonialCarousel from "../components/TestimonialCarousel";

function EfqLanding() {

useEffect(() => {
    console.log("Scrolling to top...");
    window.scrollTo(0, 0);  // Scrolls to the top when component mounts
  }, []);


  const images1 = [
    { src: "/assets/book_launch.jpeg", alt: "Conference room with people at computers" },
    { src: "/assets/ioc_3_1.jpeg", alt: "Meeting hall with presentation" },
    { src: "/assets/kolkata_training_1.jpeg", alt: "Board room meeting" },
    { src: "/assets/kolkata_training_2.jpeg", alt: "Team workshop session" },
    { src: "/assets/kolkata_training_3.jpeg", alt: "Team workshop session" },
    { src: "/assets/pune_training_1.jpeg", alt: "Team workshop session" },
    { src: "/assets/ioc_1_1.jpg", alt: "Team workshop session" },
    { src: "/assets/ioc_1_2.jpg", alt: "Team workshop session" },
    { src: "/assets/kolkata_training_4.jpg", alt: "Team workshop session" },
    { src: "/assets/1-552x412.png", alt: "Team workshop session" },
    { src: "/assets/2-552x412.png", alt: "Team workshop session" },
    { src: "/assets/copy-of-untitled-552x412.png", alt: "Team workshop session" },
    { src: "/assets/indor_training_1.png", alt: "Team workshop session" },
    { src: "/assets/indor_training_2.png", alt: "Team workshop session" },
    { src: "/assets/ioc_5_1.png", alt: "Team workshop session" },
    { src: "/assets/ioc_5_2.png", alt: "Team workshop session" },
    { src: "/assets/book_launch.jpeg", alt: "Conference room with people at computers" },
    { src: "/assets/ioc_3_1.jpeg", alt: "Meeting hall with presentation" },
    { src: "/assets/kolkata_training_1.jpeg", alt: "Board room meeting" },
    { src: "/assets/kolkata_training_2.jpeg", alt: "Team workshop session" },
    { src: "/assets/kolkata_training_3.jpeg", alt: "Team workshop session" },
    { src: "/assets/pune_training_1.jpeg", alt: "Team workshop session" },
    { src: "/assets/ioc_1_1.jpg", alt: "Team workshop session" },
    { src: "/assets/ioc_1_2.jpg", alt: "Team workshop session" },
    { src: "/assets/kolkata_training_4.jpg", alt: "Team workshop session" },
    { src: "/assets/1-552x412.png", alt: "Team workshop session" },
    { src: "/assets/2-552x412.png", alt: "Team workshop session" },
    { src: "/assets/copy-of-untitled-552x412.png", alt: "Team workshop session" },
    { src: "/assets/indor_training_1.png", alt: "Team workshop session" },
    { src: "/assets/indor_training_2.png", alt: "Team workshop session" },
    { src: "/assets/ioc_5_1.png", alt: "Team workshop session" },
    { src: "/assets/ioc_5_2.png", alt: "Team workshop session" },
    { src: "/assets/book_launch.jpeg", alt: "Conference room with people at computers" },
    { src: "/assets/ioc_3_1.jpeg", alt: "Meeting hall with presentation" },
    { src: "/assets/kolkata_training_1.jpeg", alt: "Board room meeting" },
    { src: "/assets/kolkata_training_2.jpeg", alt: "Team workshop session" },
    { src: "/assets/kolkata_training_3.jpeg", alt: "Team workshop session" },
    { src: "/assets/pune_training_1.jpeg", alt: "Team workshop session" },
    { src: "/assets/ioc_1_1.jpg", alt: "Team workshop session" },
    { src: "/assets/ioc_1_2.jpg", alt: "Team workshop session" },
    { src: "/assets/kolkata_training_4.jpg", alt: "Team workshop session" },
    { src: "/assets/1-552x412.png", alt: "Team workshop session" },
    { src: "/assets/2-552x412.png", alt: "Team workshop session" },
    { src: "/assets/copy-of-untitled-552x412.png", alt: "Team workshop session" },
    { src: "/assets/indor_training_1.png", alt: "Team workshop session" },
    { src: "/assets/indor_training_2.png", alt: "Team workshop session" },
    { src: "/assets/ioc_5_1.png", alt: "Team workshop session" },
    { src: "/assets/ioc_5_2.png", alt: "Team workshop session" },
    { src: "/assets/book_launch.jpeg", alt: "Conference room with people at computers" },
    { src: "/assets/ioc_3_1.jpeg", alt: "Meeting hall with presentation" },
    { src: "/assets/kolkata_training_1.jpeg", alt: "Board room meeting" },
    { src: "/assets/kolkata_training_2.jpeg", alt: "Team workshop session" },
    { src: "/assets/kolkata_training_3.jpeg", alt: "Team workshop session" },
    { src: "/assets/pune_training_1.jpeg", alt: "Team workshop session" },
    { src: "/assets/ioc_1_1.jpg", alt: "Team workshop session" },
    { src: "/assets/ioc_1_2.jpg", alt: "Team workshop session" },
    { src: "/assets/kolkata_training_4.jpg", alt: "Team workshop session" },
    { src: "/assets/1-552x412.png", alt: "Team workshop session" },
    { src: "/assets/2-552x412.png", alt: "Team workshop session" },
    { src: "/assets/copy-of-untitled-552x412.png", alt: "Team workshop session" },
    { src: "/assets/indor_training_1.png", alt: "Team workshop session" },
    { src: "/assets/indor_training_2.png", alt: "Team workshop session" },
    { src: "/assets/ioc_5_1.png", alt: "Team workshop session" },
    { src: "/assets/ioc_5_2.png", alt: "Team workshop session" },
    { src: "/assets/book_launch.jpeg", alt: "Conference room with people at computers" },
    { src: "/assets/ioc_3_1.jpeg", alt: "Meeting hall with presentation" },
    { src: "/assets/kolkata_training_1.jpeg", alt: "Board room meeting" },
    { src: "/assets/kolkata_training_2.jpeg", alt: "Team workshop session" },
    { src: "/assets/kolkata_training_3.jpeg", alt: "Team workshop session" },
    { src: "/assets/pune_training_1.jpeg", alt: "Team workshop session" },
    { src: "/assets/ioc_1_1.jpg", alt: "Team workshop session" },
    { src: "/assets/ioc_1_2.jpg", alt: "Team workshop session" },
    { src: "/assets/kolkata_training_4.jpg", alt: "Team workshop session" },
    { src: "/assets/1-552x412.png", alt: "Team workshop session" },
    { src: "/assets/2-552x412.png", alt: "Team workshop session" },
    { src: "/assets/copy-of-untitled-552x412.png", alt: "Team workshop session" },
    { src: "/assets/indor_training_1.png", alt: "Team workshop session" },
    { src: "/assets/indor_training_2.png", alt: "Team workshop session" },
    { src: "/assets/ioc_5_1.png", alt: "Team workshop session" },
    { src: "/assets/ioc_5_2.png", alt: "Team workshop session" },
    { src: "/assets/book_launch.jpeg", alt: "Conference room with people at computers" },
    { src: "/assets/ioc_3_1.jpeg", alt: "Meeting hall with presentation" },
    { src: "/assets/kolkata_training_1.jpeg", alt: "Board room meeting" },
    { src: "/assets/kolkata_training_2.jpeg", alt: "Team workshop session" },
    { src: "/assets/kolkata_training_3.jpeg", alt: "Team workshop session" },
    { src: "/assets/pune_training_1.jpeg", alt: "Team workshop session" },
    { src: "/assets/ioc_1_1.jpg", alt: "Team workshop session" },
    { src: "/assets/ioc_1_2.jpg", alt: "Team workshop session" },
    { src: "/assets/kolkata_training_4.jpg", alt: "Team workshop session" },
    { src: "/assets/1-552x412.png", alt: "Team workshop session" },
    { src: "/assets/2-552x412.png", alt: "Team workshop session" },
    { src: "/assets/copy-of-untitled-552x412.png", alt: "Team workshop session" },
    { src: "/assets/indor_training_1.png", alt: "Team workshop session" },
    { src: "/assets/indor_training_2.png", alt: "Team workshop session" },
    { src: "/assets/ioc_5_1.png", alt: "Team workshop session" },
    { src: "/assets/ioc_5_2.png", alt: "Team workshop session" },
    { src: "/assets/book_launch.jpeg", alt: "Conference room with people at computers" },
    { src: "/assets/ioc_3_1.jpeg", alt: "Meeting hall with presentation" },
    { src: "/assets/kolkata_training_1.jpeg", alt: "Board room meeting" },
    { src: "/assets/kolkata_training_2.jpeg", alt: "Team workshop session" },
    { src: "/assets/kolkata_training_3.jpeg", alt: "Team workshop session" },
    { src: "/assets/pune_training_1.jpeg", alt: "Team workshop session" },
    { src: "/assets/ioc_1_1.jpg", alt: "Team workshop session" },
    { src: "/assets/ioc_1_2.jpg", alt: "Team workshop session" },
    { src: "/assets/kolkata_training_4.jpg", alt: "Team workshop session" },
    { src: "/assets/1-552x412.png", alt: "Team workshop session" },
    { src: "/assets/2-552x412.png", alt: "Team workshop session" },
    { src: "/assets/copy-of-untitled-552x412.png", alt: "Team workshop session" },
    { src: "/assets/indor_training_1.png", alt: "Team workshop session" },
    { src: "/assets/indor_training_2.png", alt: "Team workshop session" },
    { src: "/assets/ioc_5_1.png", alt: "Team workshop session" },
    { src: "/assets/ioc_5_2.png", alt: "Team workshop session" },
    { src: "/assets/book_launch.jpeg", alt: "Conference room with people at computers" },
    { src: "/assets/ioc_3_1.jpeg", alt: "Meeting hall with presentation" },
    { src: "/assets/kolkata_training_1.jpeg", alt: "Board room meeting" },
    { src: "/assets/kolkata_training_2.jpeg", alt: "Team workshop session" },
    { src: "/assets/kolkata_training_3.jpeg", alt: "Team workshop session" },
    { src: "/assets/pune_training_1.jpeg", alt: "Team workshop session" },
    { src: "/assets/ioc_1_1.jpg", alt: "Team workshop session" },
    { src: "/assets/ioc_1_2.jpg", alt: "Team workshop session" },
    { src: "/assets/kolkata_training_4.jpg", alt: "Team workshop session" },
    { src: "/assets/1-552x412.png", alt: "Team workshop session" },
    { src: "/assets/2-552x412.png", alt: "Team workshop session" },
    { src: "/assets/copy-of-untitled-552x412.png", alt: "Team workshop session" },
    { src: "/assets/indor_training_1.png", alt: "Team workshop session" },
    { src: "/assets/indor_training_2.png", alt: "Team workshop session" },
    { src: "/assets/ioc_5_1.png", alt: "Team workshop session" },
    { src: "/assets/ioc_5_2.png", alt: "Team workshop session" },
    { src: "/assets/book_launch.jpeg", alt: "Conference room with people at computers" },
    { src: "/assets/ioc_3_1.jpeg", alt: "Meeting hall with presentation" },
    { src: "/assets/kolkata_training_1.jpeg", alt: "Board room meeting" },
    { src: "/assets/kolkata_training_2.jpeg", alt: "Team workshop session" },
    { src: "/assets/kolkata_training_3.jpeg", alt: "Team workshop session" },
    { src: "/assets/pune_training_1.jpeg", alt: "Team workshop session" },
    { src: "/assets/ioc_1_1.jpg", alt: "Team workshop session" },
    { src: "/assets/ioc_1_2.jpg", alt: "Team workshop session" },
    { src: "/assets/kolkata_training_4.jpg", alt: "Team workshop session" },
    { src: "/assets/1-552x412.png", alt: "Team workshop session" },
    { src: "/assets/2-552x412.png", alt: "Team workshop session" },
    { src: "/assets/copy-of-untitled-552x412.png", alt: "Team workshop session" },
    { src: "/assets/indor_training_1.png", alt: "Team workshop session" },
    { src: "/assets/indor_training_2.png", alt: "Team workshop session" },
    { src: "/assets/ioc_5_1.png", alt: "Team workshop session" },
    { src: "/assets/ioc_5_2.png", alt: "Team workshop session" },
    { src: "/assets/book_launch.jpeg", alt: "Conference room with people at computers" },
    { src: "/assets/ioc_3_1.jpeg", alt: "Meeting hall with presentation" },
    { src: "/assets/kolkata_training_1.jpeg", alt: "Board room meeting" },
    { src: "/assets/kolkata_training_2.jpeg", alt: "Team workshop session" },
    { src: "/assets/kolkata_training_3.jpeg", alt: "Team workshop session" },
    { src: "/assets/pune_training_1.jpeg", alt: "Team workshop session" },
    { src: "/assets/ioc_1_1.jpg", alt: "Team workshop session" },
    { src: "/assets/ioc_1_2.jpg", alt: "Team workshop session" },
    { src: "/assets/kolkata_training_4.jpg", alt: "Team workshop session" },
    { src: "/assets/1-552x412.png", alt: "Team workshop session" },
    { src: "/assets/2-552x412.png", alt: "Team workshop session" },
    { src: "/assets/copy-of-untitled-552x412.png", alt: "Team workshop session" },
    { src: "/assets/indor_training_1.png", alt: "Team workshop session" },
    { src: "/assets/indor_training_2.png", alt: "Team workshop session" },
    { src: "/assets/ioc_5_1.png", alt: "Team workshop session" },
    { src: "/assets/ioc_5_2.png", alt: "Team workshop session" },
    { src: "/assets/book_launch.jpeg", alt: "Conference room with people at computers" },
    { src: "/assets/ioc_3_1.jpeg", alt: "Meeting hall with presentation" },
    { src: "/assets/kolkata_training_1.jpeg", alt: "Board room meeting" },
    { src: "/assets/kolkata_training_2.jpeg", alt: "Team workshop session" },
    { src: "/assets/kolkata_training_3.jpeg", alt: "Team workshop session" },
    { src: "/assets/pune_training_1.jpeg", alt: "Team workshop session" },
    { src: "/assets/ioc_1_1.jpg", alt: "Team workshop session" },
    { src: "/assets/ioc_1_2.jpg", alt: "Team workshop session" },
    { src: "/assets/kolkata_training_4.jpg", alt: "Team workshop session" },
    { src: "/assets/1-552x412.png", alt: "Team workshop session" },
    { src: "/assets/2-552x412.png", alt: "Team workshop session" },
    { src: "/assets/copy-of-untitled-552x412.png", alt: "Team workshop session" },
    { src: "/assets/indor_training_1.png", alt: "Team workshop session" },
    { src: "/assets/indor_training_2.png", alt: "Team workshop session" },
    { src: "/assets/ioc_5_1.png", alt: "Team workshop session" },
    { src: "/assets/ioc_5_2.png", alt: "Team workshop session" }
  ];

  const handleFormSubmit = (data) => {
    console.log("Form submitted with data:", data);
  };

  return (
    <div className="EfqLanding">
      <div className="background">

      <ImageSlider images={images1} />

      <Heading
           mainText="Feeling Clueless, Confused, or unsure how to start investing? " 
          style={{ paddingTop: '20px', fontSize : '20px', fontWeight: 700}} 
        /> 
           {/* Master Your Finances. Explore the World of Investment. Launch Your Career in the Stock Market.  Making Money Mistakes?  Fed up with Investment?   Dreaming of a Career in Stocks   */}
      <Heading
         mainText={
            <>
             Over 1,500+ people transformed financial fears into confidence
            <br />
            with our Fearless Financial System — using
            <br />
              simple language, easy steps, and zero pressure.
          </> 
          }
          style={{ marginTop:'20px', fontWeight: 999 , fontSize : '35px' , backgroundColor: '#3B3531'}} 
        />
           {/* Boost Your Financial Confidence with Our Program Our exclusive - EFQ session  Enrich Your Financial Quotient #84c225 */}
        

      <Heading
          mainText="Whether your goal is ₹1L, ₹5L, or simply peace of mind — it’s not just about money, it’s about freedom, confidence, and the life you truly deserve.  Turn confusion into clarity, and knowledge into profit. Learn to invest smartly, build unshakable money confidence, and start your investing journey — even if you're starting from scratch."
          style={{ color: "#84c225", paddingBottom: '20px', paddingTop: '20px', fontSize : '30px', fontWeight: 500}} 
      />

      <DateDay 
        date="26 April 2025"
        day="Saturday"
        startTime="2 : 00 PM"
        endTime="4 : 00 PM"
      />  

      <RegistrationForm 
          onSubmit={handleFormSubmit}
      />

    <FeatureCards />

    <LogoScroller/>
    <InvestmentEducation/>

    <TestimonialCarousel/>

      <Footer />
        
      </div>
    </div>
  );
}

export default EfqLanding;   
