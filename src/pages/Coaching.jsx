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

  const CoachingData = [
  {
    id: 1,
      title: "Fearless Financial Investment :: Live 3-Day Online Workshop",
      description:(
        <>
        This power-packed course gives you practical tools, solid strategies, and the mindset to grow wealth confidently.<br />
        <span style={{ color: 'blue', fontWeight: 'bold' }}>Course Highlights:</span><br />
          •	<strong>Finance Basics:</strong> ROI, net worth, interest, risk, ROI, CAGR<br />
          •	<strong>Stock Market:</strong> Equity, index, IPO, SEBI, market movers<br />
          •	<strong>Stock Fundamentals:</strong> Net Profit, charts, valuation, dividends, Market Capitalization<br />
          •	<strong>Economy Analysis:</strong> GDP, VIX, Fed policy, global impact, FII/DII trends<br />
          •	<strong>Investment System:</strong> Entry/exit, Risk /Reward calculations, Portfolio Diversification<br />
          •	<strong>Build Conviction:</strong> News, price action, journaling, Investing Phycology<br />
          •	<strong>Lifetime Weekly Live Doubt-Solving Calls</strong><br />
          •	Exclusive Lifetime Community Access with <strong>Daily Stock Recommendations</strong><br />
        </>
      ),
      startDate: "22,23,24 August 2025",
      duration: "3 Days",
      language: "Hindi & English",
      //  price: "₹9999",
      // badge: "Signature Workshop",
      // badgeType: "signature",
      image: "/assets/Fearless_Financial_Investment.png",
      // participants: "1672 have already joined",
      buttons: [{ text: "Join the Waitlist", link: "/Contact" }],
      // buttons: [{ text: "Join the Waitlist", disabled: true  }],
  },
  {
      id: 2,
      title: "Fearless Financial Trading :: 3-day online live course",
      description: (
        <>
        This live, intensive course is perfect for beginners and aspiring traders ready to trade fearlessly.<br />
        <span style={{ color: 'blue', fontWeight: 'bold' }}>Course Highlights:</span><br />
          •	<strong>Trading Basics:</strong> Charts, OHLC, candlestick patterns, <strong>Technical Analysis</strong> <br />
        	•	<strong>Key Indicators:</strong> MA, EMA, RSI, VWAP, Support & Resistance<br />
        	•	<strong>Trading Psychology:</strong> Mindset, <strong>risk management </strong><br />
        	•	<strong>Systems & Strategy:</strong> Entry/Exit, Targets, Stop Loss/Trailing Stop Loss<br />
        	•	<strong>Money Management:</strong> Position sizing, risk/reward, trade journaling<br />
        	•	<strong>Conviction Building:</strong> News, global data, price action, backtesting<br />
        	•	<strong>Lifetime Support:</strong> Weekly live <strong>face-to-face doubt-solving sessions</strong><br /> 
        </>
      ),
      startDate: "1,2,3 August 2025",
      duration: "3 Days",
      language: "Hindi & English",
      //   price: "₹19999",
      image: "/assets/Financial_Trading.jpeg",
      buttons: [{ text: "Join the Waitlist", link: "/Contact" }],
      // buttons: [{ text: "Join the Waitlist", disabled: true  }],
    },
    {
      id: 3,
      title: "Fearless Options Mastery :: 3-Month online live Course",
      description:(
        <>
       This expert-led course equips you with powerful tools, proven strategies, and real-time experience to master options Delta trading with confidence.<br />
        <span style={{ color: 'blue', fontWeight: 'bold' }}>Course Highlights:</span><br />
          •	<strong>Market & Derivatives Basics : </strong> Equity, Index, Futures, Options, SEBI, RBI, Strike, Moneyness, Expiry<br />
          •	<strong>Options Pricing & Greeks : </strong> Black-Scholes Model, Delta, Theta, Vega, Gamma, Implied Volatility<br />
          •	<strong>Core Strategies : </strong> Delta-Neutral, Long/Short Gamma, Vega Trades, IV-Based Entries & Exits<br />
          •	<strong>Live Trading Tools : </strong> BlissCalc (Options & Hedging), BlissQuants (IV Analytics) Software<br />
          •	<strong>Advanced Systems : </strong> 8 Readymade IV-Based Strategies, Gap Protection, Expiry Setups<br />
          •	<strong>Market Impact Analysis : </strong> Global Data, Fed, VIX, Crude, Currency, FII/DII, Results Impact<br />
          •	<strong>Risk Management : </strong>Position Sizing, Margin, Interest, Diversification<br />
          •	<strong>Certification Prep : </strong> NISM-Series-VIII: Equity Derivatives<br />
          <span style={{ color: 'blue', fontWeight: 'bold' }}>Included Bonuses:</span><br />
            • Lifetime Weekly Live Doubt-Solving Calls<br />
            • Lifetime Community Access + <strong>Daily Stock Recommendations</strong><br />
            • 6-Month <strong>Post-Training Handholding</strong> (on request)<br />
            • <strong>Free Access</strong> to BlissCalc & BlissQuants Tools<br />
        </>
        ),
      startDate: "28 July 2025",
      duration: "3 Months",
      language: "Hindi & English",
      //     price: "₹69999",
      image: "/assets/Mastering_Options.jpeg",
       buttons: [{ text: "Talk to Expert", link: "/Contact" }],
      // buttons: [{ text: "Talk to Expert", disabled: true  }]
    },
];

  
  return (
    <div className="Coaching">
      <div className="background">

        
        <FinancialPrograms 
          heading="Financial Educative Programs"
          subheading="By Falguni Vahora, SEBI Certified Research Analyst :: Registration number INH000007100"
        />
        <Button text="Fear less, Learn More"  />
        {/* <FinanceCoursesPricing/> */}
        <EnhancedFinanceCourses cards={CoachingData}/>
        <Footer />
        
      </div>
    </div>
  );
}

export default Coaching;

