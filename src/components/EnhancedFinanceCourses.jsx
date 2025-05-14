import React from "react";
import { Link } from "react-router-dom";
import "./EnhancedFinanceCourses.css";

const EnhancedFinanceCourses = () => {
  const challenges = [
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
      startDate: "13, 14, 15 June 2025",
      duration: "3 Days",
      language: "Hindi & English",
      //  price: "₹9999",
      // badge: "Signature Workshop",
      // badgeType: "signature",
      image: "/assets/Fearless_Financial_Investment.png",
      // participants: "1672 have already joined",
      // buttons: [{ text: "Coming Soon", link: "/EfqLanding" }],
      buttons: [{ text: "Coming Soon", disabled: true  }],
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
      startDate: "20, 21, 22 June 2025",
      duration: "3 Days",
      language: "Hindi & English",
      //   price: "₹19999",
      image: "/assets/Financial_Trading.jpeg",
      // buttons: [{ text: "Register Now", link: "/EfqLanding" }],
      buttons: [{ text: "Coming Soon", disabled: true  }],
    },
    {
      id: 3,
      title: "Fearless Options Mastery :: 3-Month online live Course",
      description:(
        <>
       This expert-led course equips you with powerful tools, proven strategies, and real-time experience to master options Delta trading with confidence.<br />
        span style={{ color: 'blue', fontWeight: 'bold' }}>Course Highlights:</span><br />
          •	<strong>Market & Derivatives Basics</strong> Equity, Index, Futures, Options, SEBI, RBI, Strike, Moneyness, Expiry<br />
          •	<strong>Options Pricing & Greeks</strong> Black-Scholes Model, Delta, Theta, Vega, Gamma, Implied Volatility<br />
          •	<strong>Core Strategies</strong> Delta-Neutral, Long/Short Gamma, Vega Trades, IV-Based Entries & Exits<br />
          •	<strong>Live Trading Tools</strong> BlissCalc (Options & Hedging), BlissQuants (IV Analytics) Software<br />
          •	<strong>Advanced Systems</strong> 8 Readymade IV-Based Strategies, Gap Protection, Expiry Setups<br />
          •	<strong>Market Impact Analysis</strong> Global Data, Fed, VIX, Crude, Currency, FII/DII, Results Impact<br />
          •	<strong>Risk & Portfolio Management</strong>Position Sizing, Margin, Interest, Diversification<br />
          •	<strong>Certification Prep</strong> NISM-Series-VIII: Equity Derivatives<br />
          span style={{ color: 'blue', fontWeight: 'bold' }}>Included Bonuses:</span><br />
            • Lifetime Weekly Live Doubt-Solving Calls<br />
            • Lifetime Community Access + <strong>Daily Stock Recommendations</strong><br />
            • 6-Month <strong>Post-Training Handholding</strong> (on request)<br />
            • <strong>Free Access</strong> to BlissCalc & BlissQuants Tools<br />
        </>
        ),
      startDate: "28 June 2025",
      duration: "3 Months",
      language: "Hindi & English",
      //     price: "₹69999",
      image: "/assets/Mastering_Options.jpeg",
      // buttons: [{ text: "Register Now", link: "/EfqLanding" }],
      buttons: [{ text: "Coming Soon", disabled: true  }]
    },
  ];

  return (
    <div className="challenges-container">
      {challenges.map((challenge) => (
        <div key={challenge.id} className="challenge-card">
          <div className="challenge-left">
            {challenge.startsIn && (
              <div className="starts-in-badge">
                <span>Starts in</span>
                <span>{challenge.startsIn}</span>
              </div>
            )}
            <img
              src={challenge.image}
              alt={challenge.title}
              className="challenge-image"
            />
          </div>

          <div className="challenge-right">
            <div className="challenge-header">
              <h2 className="challenge-title">{challenge.title}</h2>
              {challenge.badge && (
                <span className={`badge ${challenge.badgeType}`}>
                  {challenge.badgeType === "signature" ? "★" : "🌻"}{" "}
                  {challenge.badge}
                </span>
              )}
            </div>

            <p className="challenge-description">{challenge.description}</p>

            <div className="challenge-info">
              <div className="info-item">
                <span className="info-icon">📅</span>
                <span>{challenge.startDate}</span>
              </div>
              <div className="info-item">
                <span className="info-icon">⏱</span>
                <span>{challenge.duration}</span>
              </div>
              <div className="info-item">
                <span className="price">{challenge.price}</span>
              </div>
              <div className="info-item">
                <span className="info-icon">🌐</span>
                <span>{challenge.language}</span>
              </div>
            </div>

            <div className="challenge-footer">
              {challenge.buttons.map((button, index) => (
                <Link key={index} to={button.link} className="register-button">
                  {button.text}
                  {/*<span className="price">{challenge.price}</span> */}
                </Link>
              ))}

              {challenge.participants && (
                <span className="participants">
                  <span className="participant-icon">👤</span>
                  {challenge.participants}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EnhancedFinanceCourses;
