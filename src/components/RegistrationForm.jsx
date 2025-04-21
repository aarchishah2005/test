import React, { useState } from "react";
import "./RegistrationForm.css";

const RegistrationForm = () => {
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
            <li>
              <span className="checkmark">✓</span>
              <span><span className="secret-number">Secret 1:</span> The Simple Way to Build a Strong Financial Base</span>
             
             {/* Strengthen Your Financial Foundation    Unlock Ready-Made Investment Strategy           Start Your Part-Time Journey in the Stock Market*/}
            </li>
            <li>
              <span className="checkmark">✓</span>
              <span><span className="secret-number">Secret 2:</span> Use a Proven Investment Strategy That Works</span>
            </li>
            <li>
              <span className="checkmark">✓</span>
              <span><span className="secret-number">Secret 3:</span> How to Start Earning from the Stock Market Part-Time</span>
            </li>
          </ul>
        </div>

        {!isSubmitted ? (
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
        )}
      </div>
    </div>
  );
};

export default RegistrationForm;
