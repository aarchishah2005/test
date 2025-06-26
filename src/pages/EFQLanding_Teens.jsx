import React, { useEffect, useState } from "react";
import "./EFQLanding_Teens.css";
import HeaderArea from "../components/HeaderArea"
import Heading from "../components/heading";
import RegistrationForm from "../components/RegistrationForm";
import { useWebinarTimer } from "../components/useWebinarTimer";
import FeatureCards from "../components/FeatureCards";
import ImageSlider from "../components/ImageSlider";
import TestimonialCarousel from "../components/TestimonialCarousel";
import NewTestimonial from "../components/NewTestimonial";
import InvestmentEducation from "../components/InvestmentEducation";
import LogoScroller from "../components/LogoScroller";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import { CloudDivider } from "../components/CloudDivider";
import { TrendingUp, Monitor, Users } from 'lucide-react';


function EFQLanding_Teens() {
  useEffect(() => {
    console.log("Scrolling to top...");
    window.scrollTo(0, 0); // Scrolls to the top when component mounts
  }, []);

  const timeLeft = useWebinarTimer("2025-07-04T18:59:59");

  const handleFormSubmit = (data) => {
    console.log("Form submitted with data:", data);
  };

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handlePayment = () => {
    window.open("https://rzp.io/rzp/exZRV8Zm", "_blank"); // Replace with your actual Razorpay Payment Page URL
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handlePayment(); // Redirect to Razorpay Payment Page
  };

  const resetForm = () => {
    setIsSubmitted(false);
  };

   const WebinarSecrets = [
    { number: "Secret 1", text: "Saving is Cool. Growing it is Smarter." },
    { number: "Secret 2", text: "Money Doesn’t Grow on Trees, It Can Grow with You. " },
    { number: "Secret 3", text: "Financial Freedom Is a Skill, Not a Secret." },


  ];


  const myFeatures2 = [
   
    "Master the One Skill Schools Don’t Teach: Fearless Finance",
    "Make Smart Money Moves—Even Before Your First Job",
    "Start Investing Early and Watch Your Money Grow",
    "Interest: Know When It's a Friend or a Foe",
    "Discover the Secret Formula Behind Rich vs. Broke Mindsets",
    "Decode the World of Wealth Creation—The Easy and Fun Way",

  ];

  const FeatureCard_kid = [
    {
      icon: TrendingUp,
      title: "Three-Day Session",
      points: [
        "1.5 Hours of Learning each day",
        "Three days course",
        "Live On Zoom"
      ]
    },
    {
      icon: Monitor,
      title: "Language",
      points: [
        "English + Hindi",
        "Easy To Understand",
        "Simple and Fun"
      ]
    },
    {
      icon: Users,
      title: "Who Can Attend",
      points: [
        "13+ years",
        "Fresher / Beginner",
        "Investor"
      ]
    }
  ];

  return (
    <div className="EFQLanding_Teens">
      <div className="background">

        <HeaderArea />
         {/* <div className="WhiteBackground"> */}
        {/* <CloudDivider/> */}
{/*         <RegistrationForm onSubmit={handleFormSubmit} secrets={secretsWebinar2}/> */}
       
        <RegistrationForm
        
          title={<span style={{ color: 'orange',fontWeight: 'bold',fontSize: '22px' }}>Enrich your TEENS' FINANCIAL skill with 3 days live workshop! </span>}
          secrets={WebinarSecrets}
          deadline="2025-07-04T18:59:59"
          paymentUrl="https://rzp.io/rzp/exZRV8Zm"
          price={<span style={{ color: 'orange',fontWeight: 'bold',fontSize: '22px' }}><>999 <s> ₹4999</s></></span>} 
          discountText="  (Save 80% Today!)"
          thankYouMessage="Thank You for Registering!"
          subMessage="You'll receive the webinar details shortly."
          webinarDetails={{
              date: "4,5,6, July 2025",
              day: "",
              startTime: "07:30 PM ",
              endTime: "09:00 PM",
              endDateTime: "2025-07-04T18:59:59"
          }}
        />
       {/* </div> */}

        <FeatureCards cards={FeatureCard_kid} />
        <ImageSlider />
        <TestimonialCarousel />
        <NewTestimonial />
        <InvestmentEducation features={myFeatures2}/>
         {/* Staand-alone Register here button */}
        <div
          style={{
            alignItems: "center",
            textAlign: "center",
            paddingBottom: "25px",
          }}
        >
          {!timeLeft.expired && !isSubmitted ? (
            <form onSubmit={handleSubmit}>
              <button type="submit" className="cta-button">
                Register Here
              </button>
            </form>
          ) : (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h3>Thank You for Registering!</h3>
              <p>You'll receive the webinar details shortly.</p>
              <button onClick={resetForm} className="back-button">
                Back to Form
              </button>
            </div>
          )}
        </div>
        <LogoScroller />
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
              desk of 40+ professionals, and has trained 1500+ individuals in
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
              Pune : A11, The Laburnums, Mitcon Road, Balewadi, Pune – 411045,
              Maharashtra
              <br />
              <br />
              👉Join our WhatsApp community
              https://chat.whatsapp.com/HrP2fRUkkI75Qj8pcCuTct
            </>
          }
        />
        <Footer />
      </div>
    </div>
  );
}

export default EFQLanding_Teens;
