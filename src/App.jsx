import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  
import './App.css';
import Header from './components/header';
import Heading from './components/heading';
import Button from './components/button';
import FinancialPrograms from './components/financialprogram';
import FinancialCards from './components/FinancialCards';
import FinanceCoursesPricing from './components/FinanceCoursesPricing';
import EnhancedFinanceCourses from './components/EnhancedFinanceCourses';
import ContactForm from './components/ContactForm.jsx';
import Footer from './components/Footer';
// import About from "./pages/About";
import EfqLanding from "./pages/EfqLanding";
import Contact from "./pages/Contact";
import Profile from "./components/profile";
import Policies from "./components/Policies" ;
import Coaching from "./pages/Coaching";


  const Home = () => (
    
    <div className="App">
      <div className="background">
          {/* <Header /> */}

            <img 
                src="./assets/heading_image.png" 
                alt="Finance Banner" 
                className="finance-banner"
                style={{ width: "100%", height: "auto" }}
              />
{/*           <Heading 
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
          /> */}

          <Profile/>

          <FinancialPrograms />
          <Button text="Fear less, Learn More"  />

          <FinancialCards />
           <section id="contact">
             <ContactForm
          infoText={
            <>
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
              <br />
              <br />
              Contact number : +91 92096 32020
              <br />
              <br />
              Surat : D 422 ITC, Majura gate, Surat – 395002, Gujarat.
              <br />
              <br />
              👉Join our WhatsApp community
              https://chat.whatsapp.com/HrP2fRUkkI75Qj8pcCuTct
            </>
          }
        />
           </section>
          <Footer />
      </div>
    </div>
  );

  function App() {
    
    // useEffect(() => {
    //   const observer = new IntersectionObserver(
    //     (entries) => {
    //       entries.forEach((entry) => {
    //         if (entry.isIntersecting) {
    //           entry.target.classList.add('zoom-in-visible');
    //         }
    //       });
    //     },
    //     { threshold: 0.1 }
    //   );
    //   const elements = document.querySelectorAll('.zoom-in-element');
    //   elements.forEach((el) => observer.observe(el));
      
    //   return () => observer.disconnect();
    // }, []);
  
    return (
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
{/*             <Route path="/About" element={<About />} /> */}
            <Route path="/Coaching" element={<Coaching />} />
            <Route path="/EfqLanding" element={<EfqLanding />} />
            <Route path="/ContactForm" element={<ContactForm />} />
              <Route path="/Contact" element={<Contact />} />
            {/*<Route path="/ContactForm" element={<ContactForm />} />*/}
            <Route path="/Policies" element={<Policies />} />
             <Route path="/FinanceCoursesPricing" element={<FinanceCoursesPricing />} />
          </Routes>
      </Router>
    );
  }


export default App;

