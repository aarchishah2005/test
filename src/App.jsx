import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  
import './App.css';
import Header from './components/header';
import Heading from './components/heading';
import Button from './components/button';
import FinancialPrograms from './components/financialprogram';
import FinancialCards from './components/FinancialCards';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
// import About from "./pages/About";
import EfqLanding from "./pages/EfqLanding";
import Profile from "./components/profile";
import Policies from "./components/Policies" ;
import Coaching from "./pages/Coaching";
import { useLocation } from "react-router-dom";


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
              <ContactForm />
            </section>
          <Footer />
      </div>
    </div>
  );

  function App() {

    const location = useLocation();
    
    useEffect(() => {
      if (location.hash) {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, [location]);

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
            <Route path="/ContactForm" element={<ContactForm />} />
            /*<Route path="/ContactForm" element={<ContactForm />} />*/
            <Route path="/Policies" element={<Policies />} />
          </Routes>
      </Router>
    );
  }


export default App;

<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1847496766000928');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1847496766000928&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code -->
