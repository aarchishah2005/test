import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  
import './App.css';
import Header from './components/header';
import Heading from './components/heading';
import Button from './components/button';
import FinancialPrograms from './components/financialprogram';
import FinancialCards from './components/FinancialCards';
// import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
// import About from "./pages/About";
import EfqLanding from "./pages/EfqLanding";
import Profile from "./components/profile";
import Policies from "./components/Policies" ;
import Coaching from "./pages/Coaching";


  const Home = () => (
    
    <div className="App">
      <div className="background">
          {/* <Header /> */}
          <Heading 
            mainText={
              <>
                  <span style={{ fontSize: "70px", color: "#84c225" }}>
                  Fearless Finance Isn’t a Dream, <br />
                  It’s a Decision!</span>
                  <br/><span style={{ fontSize: "30px", color: "#ffffff"  }}>Learn to take charge</span>
              </>
            }
            style
            
            ={{ marginTop: '200px', marginBottom: '100px' }} 
          />

          <Profile/>

          <FinancialPrograms />
          <Button text="Fear less, Learn More"  />

          <FinancialCards />

{/*           <ContactForm /> */}
          
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
{/*             <Route path="/About" element={<About />} /> */}
            <Route path="/Coaching" element={<Coaching />} />
            <Route path="/EfqLanding" element={<EfqLanding />} />
            <Route path="/Policies" element={<Policies />} />
          </Routes>
      </Router>
    );
  }


export default App;
