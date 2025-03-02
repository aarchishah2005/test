import React, { useState } from "react";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handlePayment = () => {
    const options = {
      key: "rzp_live_YMAybP6URgvGuF", // Replace with your Razorpay Key ID
      amount: 50000, // Amount in paise (₹500)
      currency: "INR",
      name: "BlissQuants Data Analytics",
      description: "Webinar Registration Fee",
      image: "https://your-logo-url.com/logo.png",
      handler: function (response) {
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
        setIsSubmitted(true); // Show success message after successful payment
      },
      prefill: {
        name: "Aarchi Shah",
        email: "aarchi@example.com",
        contact: "+91 9898032020",
      },
      theme: {
        color: "#84c225",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handlePayment(); // Call Razorpay payment when form is submitted
  };

  const resetForm = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="form-container">
      <div className="registration-card">
        <div className="form-header">
          <h2>What you will learn in 90 minutes</h2>
          <ul className="secrets-list">
            <li>
              <span className="checkmark">✓</span>
              <span><span className="secret-number">Secret 1:</span> Strengthen Your Financial Foundation</span>
            </li>
            <li>
              <span className="checkmark">✓</span>
              <span><span className="secret-number">Secret 2:</span> Unlock Ready-Made Investment Strategy</span>
            </li>
            <li>
              <span className="checkmark">✓</span>
              <span><span className="secret-number">Secret 3:</span> Start Your Part-Time Journey in the Stock Market</span>
            </li>
          </ul>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <button type="submit" className="submit-button">
              Pay & Register
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
