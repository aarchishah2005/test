import React, { useEffect } from "react";
import "./Coaching_for_Student.css"; // Create this file for styling
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

const CoachingForStudentData = [
  {
    id: 1,
      title: "Class XI – Financial Markets Management",
      description:(
        <>
        Build a strong foundation in investment, financial instruments, and mutual funds to step into the world of finance.<br />
        <span style={{ color: 'blue', fontWeight: 'bold' }}>Course Highlights:</span><br />
          • Introduction to Markets and Financial Instruments <br />
          • Detailed understanding of Primary & Secondary Markets <br />
          • Basics of Mutual Funds, ETFs, and Debt Funds <br />
          • Learn Taxation & Financial Regulations <br />
          • Hands-on training with NSMART software <br />
          • Project Work, Viva, File Work & 60 Hours of Lab Activities <br />
          • Employability Skills: Communication, ICT, Entrepreneurship & Green Skills <br />
        </>
      ),
      startDate: "22,23,24 August 2025",
      duration: "3 Days",
      language: "Hindi & English",
      //  price: "₹9999",
      // badge: "Signature Workshop",
      // badgeType: "signature",
      image: "/assets/ClassXI_Financial_Markets_Management.png",
      // participants: "1672 have already joined",
      buttons: [{ text: "Join the Waitlist", link: "/Contact" }],
      // buttons: [{ text: "Join the Waitlist", disabled: true  }],
  },
  {
      id: 2,
      title: "Class XII – Financial Markets Management",
      description: (
        <>
        Advance your skills with practical insights into securities trading, derivatives, and financial analysis. <br />
        <span style={{ color: 'blue', fontWeight: 'bold' }}>Course Highlights:</span><br />
          Deeper insights into the Indian Securities Market <br />
          Learn Trading Systems, Clearing & Settlement <br />
          Introduction to Derivatives, Futures & Options <br />
          Perform Financial Statement Analysis & Ratio Calculations <br />
          Apply trading skills using NSMART (Equity + Derivatives) <br />
          Real-life case studies, simulations & projects <br />
          Employability Skills: Communication, Entrepreneurship, ICT & Green Economy
        </>
      ),
      startDate: "1,2,3 August 2025",
      duration: "3 Days",
      language: "Hindi & English",
      //   price: "₹19999",
      image: "/assets/ClassXII_Financial_Markets_Management.png",
      buttons: [{ text: "Join the Waitlist", link: "/Contact" }],
      // buttons: [{ text: "Join the Waitlist", disabled: true  }],
    },
];

  return (
    <div className="Coaching">
      <div className="background">


        <FinancialPrograms
          heading="Financial Educative Programs"
          subheading="By Falguni Vahora, SEBI Certified Research Analyst :: Registration number INH000007100"
        />
        {/* <Button text="Fear less, Learn More"  /> */}
        {/* <FinanceCoursesPricing/> */}
        <EnhancedFinanceCourses cards={CoachingForStudentData}/>
        <Footer />

      </div>
    </div>
  );
}

export default Coaching;
