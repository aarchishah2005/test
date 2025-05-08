import React, { useEffect, useState } from "react";
import "./EfqLanding.css";
import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSlider";
import Heading from "../components/heading";
import RegistrationForm from "../components/RegistrationForm";
import FeatureCards from "../components/FeatureCards";
import LogoScroller from "../components/LogoScroller";
import InvestmentEducation from "../components/InvestmentEducation";
import ContactForm from "../components/ContactForm";
import TestimonialCarousel from "../components/TestimonialCarousel";
import { useWebinarTimer } from "../components/useWebinarTimer";
import { TrendingUp, Monitor, Users } from 'lucide-react';

function EfqLanding_kids() {
  useEffect(() => {
    console.log("Scrolling to top...");
    window.scrollTo(0, 0); // Scrolls to the top when component mounts
  }, []);

  const timeLeft = useWebinarTimer("2025-05-11T23:59:59");

  const handleFormSubmit = (data) => {
    console.log("Form submitted with data:", data);
  };

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handlePayment = () => {
    window.open("https://rzp.io/rzp/YRgBvUM", "_blank"); // Replace with your actual Razorpay Payment Page URL
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handlePayment(); // Redirect to Razorpay Payment Page
  };

  const resetForm = () => {
    setIsSubmitted(false);
  };

   const secretsWebinar2 = [
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
        "2 Hours of Learning each day",
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
    <div className="EfqLanding">
      <div className="background">
        <Heading
          mainText="Wish money didn’t feel so complicated or boring?"
          style={{
            color: "#84c225",
            paddingTop: "20px",
            paddingBottom: "30px",
            fontSize: "20px",
            fontWeight: 700,
          }}
        />
        {/* Master Your Finances. Explore the World of Investment. Launch Your Career in the Stock Market.  Making Money Mistakes?  Fed up with Investment?   Dreaming of a Career in Stocks   */}
        <Heading
          mainText={
            <>
            Many teens have already turned money struggles into strength
              <br />
              with our Teen Financial System using real-life lessons.
              <br />
              Don’t let your child miss the chance to build lifelong financial confidence.
            </>
          }
          style={{
            fontWeight: 999,
            fontSize: "35px",
            backgroundColor: "#ffff",
            paddingRight: "20px",
            paddingLeft: "20px",
            color: "#3B3531",
            borderRadius: "9px",
          }}
        />
        {/* Boost Your Financial Confidence with Our Program Our exclusive - EFQ session  Enrich Your Financial Quotient  #3B3531  background: linear-gradient(to right, #0d0c40, #4b0b64) */}

        <Heading
          mainText={
            <>
               This isn’t just another boring lecture —
              <br />
               this program simplifies finance and empowers teens  
              <br />
             with tools to manage, save, and invest confidently. 
              <br />
              Start now, not “someday.”  
              <br />
                build one of the most important life skills for a fearless financial future.         
            </>
          }
          style={{
            color: "#84c225",
            paddingBottom: "20px",
            paddingTop: "20px",
            fontSize: "25px",
            fontWeight: 800,
          }}
        />
{/*         <RegistrationForm onSubmit={handleFormSubmit} secrets={secretsWebinar2}/> */}
        <RegistrationForm
          title="What you will learn in 120 minutes"
          secrets={secretsWebinar1}
          deadline="2025-05-11T23:59:59"
          paymentUrl="https://rzp.io/rzp/YRgBvUM"
          price={199}
          discountText="(Save 40% Today!)"
          thankYouMessage="Thank You for Registering!"
          subMessage="You'll receive the webinar details shortly."
        />

        <FeatureCards cards={FeatureCard_kid} />
        <ImageSlider />
        <TestimonialCarousel />
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

export default EfqLanding_kids;
