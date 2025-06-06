import React, { useState } from "react";
import "./RegistrationForm.css";
import WebinarTimer from "./WebinarTimer";
import { useWebinarTimer } from "./useWebinarTimer";

const RegistrationForm = ({ secrets }) => {
  const timeLeft = useWebinarTimer("2025-05-11T23:59:59");
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

  return (
    <div className="form-container">
      <div className="registration-card">
        <div className="form-header">
          <h2>What you will learn in 120 minutes</h2>
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
          <WebinarTimer />
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
            <h3>Thank You for Registering!</h3>
            <p>You'll receive the webinar details shortly.</p>
            <button onClick={resetForm} className="back-button">
              Back to Form
            </button>
          </div>
        )}
        <div>
          <p className="webinar-time sparkle-text">
            Join Now for Only ₹199{" "}
            <span className="highlight">(Save 40% Today!)</span>
          </p>
        </div>

        {/*{!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <button type="submit" className="submit-button">
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
        )}*/}
      </div>
    </div>
  );
};

export default RegistrationForm;
