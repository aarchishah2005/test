import React from "react";
import { Link } from "react-router-dom";
import "./EnhancedFinanceCourses.css";

const EnhancedFinanceCourses = () => {
  const challenges = [
    {
      id: 1,
      title: "Fearless Financial Investment",
      description:
        "Conquer financial fear, gain investing confidence, and master stock market fundamentals with expert strategies. Learn AI-powered stock selection, risk management, and portfolio-building using practical tools, templates, and real case studies. Get personalized 1-on-1 guidance from finance experts and connect with a powerful, supportive investment community.",
      startDate: "26th Apr",
      duration: "1 Day",
      language: "Hindi & English",
      price: "₹199",
      badge: "Signature Workshop",
      badgeType: "signature",
      image: "/assets/Fearless_Financial_Investment.png",
      // participants: "1672 have already joined",
      buttons: [{ text: "Register Now", link: "/EfqLanding" }],
    },
    {
      id: 2,
      title: "Fearless Financial Trading",
      description:
        "Become a confident, strategic trader with proven systems, AI-driven insights, and smart stock selection strategies. Master trading psychology, risk management, and chart analysis to navigate market trends like a pro. Gain hands-on experience with tools, templates, case studies, and expert mentorship for personalized trading guidance.",
      startDate: "26th Apr",
      duration: "11 Days",
      language: "Hindi & English",
      price: "₹15000",
      image: "/assets/Fearless_Financial_Trading.png",
      buttons: [{ text: "Register Now", link: "/EfqLanding" }],
    },
    {
      id: 3,
      title: "Fearless Options Mastery",
      description:
        "Master Futures & Options trading with live expert mentorship, covering essential concepts, Options Greeks, pricing models, and advanced strategies like IV spreads and Delta hedging. Get hands-on with professional trading tools, IV-based systems, position management software, and weekly Inner Circle Calls for Q&A, performance reviews, and mentorship. Prepare for NISM Equity Derivatives Certification, access ready-to-use trading systems, and enjoy 1-year continuous handholding support for lasting trading growth and confidence.",
      startDate: "26th Apr",
      duration: "31 Days",
      language: "Hindi & English",
      price: "₹15000",
      image: "/assets/Fearless_Options_Mastery.png",
      buttons: [{ text: "Register Now", link: "/EfqLanding" }],
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
                <span className="info-icon">🌐</span>
                <span>{challenge.language}</span>
              </div>
            </div>

            <div className="challenge-footer">
              {challenge.buttons.map((button, index) => (
                <Link key={index} to={button.link} className="register-button">
                  {button.text}
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
