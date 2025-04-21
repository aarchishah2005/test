import React from "react";
import { Link } from "react-router-dom";
import "./EnhancedFinanceCourses.css";

const EnhancedFinanceCourses = () => {
  const challenges = [
    {
      id: 1,
      title: "Fearless Financial Investment – 1-Day Workshop",
      description:
        "Break free from financial fear and take charge of your investments with confidence! This power-packed workshop will equip you with essential finance concepts, expert stock market strategies, AI-driven stock selection, and risk management techniques. With hands-on tools, personalized guidance, and a strong investment community, you’ll gain the skills to invest smartly and fearlessly. Join us and start building your financial freedom today!",
      startDate: "24 May 2025",
      duration: "1 Day",
      language: "Hindi & English",
      price: "₹6999",
      // badge: "Signature Workshop",
      // badgeType: "signature",
      image: "/assets/Financial_Investment.png",
      // participants: "1672 have already joined",
      buttons: [{ text: "Register Now", link: "/EfqLanding" }],
    },
    {
      id: 2,
      title: "Fearless Financial Trading 3-day online live course!",
      description:
        "The Fearless Financial Trading 3-day flagship course is designed to transform you into a confident and strategic trader. Whether you're a beginner or looking to refine your trading skills, this intensive program equips you with cutting-edge strategies, AI-driven insights, and proven trading systems to help you trade fearlessly. With hands-on training, expert guidance, and a structured approach, you'll gain the confidence to navigate the stock market like a pro. Join us and unlock your path to financial freedom today!",
      startDate: "16 May 2025",
      duration: "3 Days",
      language: "Hindi & English",
      price: "₹14999",
      image: "/assets/Financial_Trading.jpeg",
      buttons: [{ text: "Register Now", link: "/EfqLanding" }],
    },
    {
      id: 3,
      title: "Fearless Options Mastery – 3-Month online live Course",
      description:
        "Unlock the secrets of successful options trading with our Fearless Options Mastery course! In just 3 months, gain deep expertise in derivatives, Greeks, delta-neutral strategies, and IV-based trading systems with real-time practice and expert mentorship. Get equipped with powerful tools, live trading setups, risk management systems, and weekly community support. Plus, prepare for the NISM Equity Derivatives Certification and fast-track your trading journey with readymade strategies. Take control of your financial future and trade fearlessly!",
      startDate: "2 June 2025",
      duration: "3 Months",
      language: "Hindi & English",
      price: "₹69999",
      image: "/assets/Mastering_Options.jpeg",
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
