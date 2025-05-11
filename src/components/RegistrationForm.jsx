import React, { useState } from "react";
import "./RegistrationForm.css";
import WebinarTimer from "./WebinarTimer";
import { useWebinarTimer } from "./useWebinarTimer";

const RegistrationForm = ({
  title,
  secrets,
  deadline,
  paymentUrl,
  price,
  discountText,
  thankYouMessage,
  subMessage,
  webinarDetails
}) => {
  const timeLeft = useWebinarTimer(deadline);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handlePayment = () => {
    window.open(paymentUrl, "_blank");
    setIsSubmitted(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handlePayment();
  };

  const resetForm = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="form-container">
      <div className="registration-card">
        <div className="form-header">
          <h2>{title}</h2>
          <ul className="secrets-list">
            {secrets.map((secret, index) => (
              <li key={index}>
                <span className="checkmark">✓</span>
                <span>
                  <span className="secret-number">{secret.number}:</span> {secret.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <WebinarTimer 
            date={webinarDetails.date}
            day={webinarDetails.day}
            startTime={webinarDetails.startTime}
            endTime={webinarDetails.endTime}
            endDateTime={webinarDetails.endDateTime}  />
        </div>

        {!timeLeft.expired && !isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <button type="submit" className="cta-button">
              Register Here
            </button>
          </form>
        ) : (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h3>{thankYouMessage}</h3>
            <p>{subMessage}</p>
            <button onClick={resetForm} className="back-button">
              Back to Form
            </button>
          </div>
        )}

        <div>
          <p className="webinar-time sparkle-text">
            Join Now for Only ₹{price}{" "}
            <span className="highlight">{discountText}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
