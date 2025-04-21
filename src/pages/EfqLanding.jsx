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
          subText="Making Money Mistakes? Fed up with Investment?  Dreaming of a Career in Stocks?" 

           
          style={{ paddingTop: '60px' }} 
           {/* Master Your Finances. Explore the World of Investment. Launch Your Career in the Stock Market   */}
        /> 
      <Heading
          mainText="Boost Your Financial Confidence with Our exclusive Program" 
        
          
          style={{ fontWeight: 700 }} 
        {/* Our exclusive - EFQ session   */}
        /> 
        

      <Heading
          mainText="Enrich Your Financial Quotient"
          style={{ color: "#84c225", paddingBottom: '50px', fontWeight: 700 }} 
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
