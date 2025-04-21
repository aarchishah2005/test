import React, { useEffect } from "react";
import "./Coaching.css"; // Create this file for styling
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import FinancialPrograms from '../components/financialprogram';
import Footer from "../components/Footer";
// import FinanceCoursesPricing from '../components/FinanceCoursesPricing';
import EnhancedFinanceCourses from '../components/EnhancedFinanceCourses'
// import React from "react";
import Button from '../components/button';

function Coaching() {

  useEffect(() => {
    console.log("Scrolling to top...");
    window.scrollTo(0, 0);  // Scrolls to the top when component mounts
  }, []);

  
  
  return (
    <div className="Coaching">
      <div className="background">

        
        <FinancialPrograms/>
        <Button text="Fear less, Learn More"  />
        {/* <FinanceCoursesPricing/> */}
        <EnhancedFinanceCourses/>
        <Footer />
        
      </div>
    </div>
  );
}

export default Coaching;
