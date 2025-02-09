import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  
import './App.css';
import Header from './components/header';
import Heading from './components/heading';
import Button from './components/button';
import CoachingSection from './components/coachingsection';
import FinancialPrograms from './components/financialprogram';
import FinancialCards from './components/FinancialCards';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import About from "./pages/About";


  const Home = () => (
    
    <div className="App">
      <div className="background">
          {/* <Header /> */}
          <Heading 
            mainText="Your Financial Prosperity Starts with the Right Vision"
            subText="Transform your relationship with money"
          />
          <Button text="Explore Now" />
        <div className="zoom-in-element coaching-component">
          <CoachingSection />
        </div>
          <FinancialPrograms />
          <FinancialCards />
          <ContactForm />
          <Footer />
      </div>
    </div>
  );

  function App() {
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('zoom-in-visible');
            }
          });
        },
        { threshold: 0.1 }
      );
      const elements = document.querySelectorAll('.zoom-in-element');
      elements.forEach((el) => observer.observe(el));
      
      return () => observer.disconnect();
    }, []);
  
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
    );
  }


export default App;
