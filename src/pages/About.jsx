import React from "react";
import "./About.css"; // Create this file for styling
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Heading from '../components/heading';
import Profile from '../components/profile';
import Footer from "../components/Footer";
import Infocolunm from "../components/Infocolunm";

function About() {
  return (
    <div className="About">
{/*       <div className="background"> */}
        <Heading
          mainText="About Me"
          subText="Falguni Vahora" 
        />  
        <Heading
          // subText="SEBI REGISTERED RESEARCH ANALYST" 
          subText="Falguni Vahora is SEBI registered Research Analyst. She is an Engineer. She is truly passionate about markets and into discretionary options selling. She has been a trainer and educator for many market learners.She researches both technical and fundamental parameters."        
        />
        <Heading
          // subText="SEBI REGISTRATION NUMBER - INH000013457" 
        />
        <Profile/>
        <Infocolunm/>

        <Footer />
        
{/*       </div> */}
    </div>
  );
}

export default About;
