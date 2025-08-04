import React, { useEffect } from "react";
import "./Coaching_for_Student.css"; // Create this file for styling
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import FinancialPrograms from '../components/financialprogram';
import Footer from "../components/Footer";
// import FinanceCoursesPricing from '../components/FinanceCoursesPricing';
import EnhancedFinanceCourses from '../components/EnhancedFinanceCourses'
// import React from "react";
import Button from '../components/button';

function Coaching_for_Student() {

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
        Learn the basics of investing, financial tools, and mutual funds to enter the world of finance.<br />
        <span style={{ color: 'blue', fontWeight: 'bold' }}>Course Highlights:</span><br />
          • Introduction to Markets and Financial Instruments <br />
          • Detailed understanding of Primary & Secondary Markets <br />
          • Basics of Mutual Funds, ETFs, and Debt Funds <br />
          • Learn Taxation & Financial Regulations <br />
          • Hands-on training with NSMART software <br />
          • Project Work, Viva, File Work <br />
          • Employability Skills: Communication, ICT, Entrepreneurship & Green Skills <br />
        </>
      ),
      startDate: "1 September 2025",
      duration: "3 Months",
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
        Master trading, decode derivatives, and sharpen financial skills.<br />
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
      startDate: "1 September 2025",
      duration: "3 Months",
      language: "Hindi & English",
      //   price: "₹19999",
      image: "/assets/ClassXII_Financial_Markets_Management.png",
      buttons: [{ text: "Join the Waitlist", link: "/Contact" }],
      // buttons: [{ text: "Join the Waitlist", disabled: true  }],
    },
   {
      id: 3,
      title: "Teens' Financial Awareness Program",
      description: (
        <>
        Transform Your Teen’s Money Mindset Into Lifelong Financial Confidence <br />
        <span style={{ color: 'blue', fontWeight: 'bold' }}>Course Highlights:</span><br />
          Master the One Skill Schools Don’t Teach: Fearless Finance <br />
          Make Smart Money Moves—Even Before Your First Job <br />
          Start Investing Early and Watch Your Money Grow <br />
          Interest: Know When It's a Friend or a Foe <br />
          Discover the Secret Formula Behind Rich vs. Broke Mindsets <br />
          Decode the World of Wealth Creation—The Easy and Fun Way
        </>
      ),
      startDate: "5, 6, 7 September 2025",
      duration: "3 Days",
      language: "Hindi & English",
      //   price: "₹19999",
      image: "/assets/Teens'_Financial_Awareness_Program.png",
      buttons: [{ text: "Enroll Now", link: "/EfqLanding_kids" }],
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

export default Coaching_for_Student;



