import React from "react";
import { Link } from "react-router-dom";
import "./EnhancedFinanceCourses.css";

const EnhancedFinanceCourses = ({ cards }) => {
  return (
    <div className="challenges-container">
      {cards.map((challenge) => (
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
