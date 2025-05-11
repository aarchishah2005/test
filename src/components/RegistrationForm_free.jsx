import React, { useState } from "react";
import "./RegistrationForm_free.css";
import WebinarTimer from "./WebinarTimer";
import { useWebinarTimer } from "./useWebinarTimer";

const RegistrationForm_free = ({
  title,
  secrets,
  deadline,
  //   paymentUrl,
  price,
  discountText,
  thankYouMessage,
  subMessage,
  webinarDetails,
}) => {
  const timeLeft = useWebinarTimer(deadline);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //   const handlePayment = () => {
  //     // Optionally store formData somewhere before payment
  //     window.open(paymentUrl, "_blank");
  //     setIsSubmitted(true);
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in all the fields.");
      return;
    }

    fetch(
      "https://script.google.com/macros/s/AKfycbzKBAPk34u-BkYQWmsSjoq4BUy_3O6gnU9AWy576ZqwBbXL2Gh7mf0g-8WWJvqcJr3F/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
      .then((res) => res.text())
      .then((data) => {
        console.log("Form submitted:", data);
        setIsSubmitted(true);
      })
      .catch((err) => {
        console.error("Error submitting form:", err);
        alert("Something went wrong!\n\n" + err.message);
      });
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({ name: "", email: "", phone: "" });
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
                  <span className="secret-number">{secret.number}:</span>{" "}
                  {secret.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <WebinarTimer
          date={webinarDetails.date}
          day={webinarDetails.day}
          startTime={webinarDetails.startTime}
          endTime={webinarDetails.endTime}
          endDateTime={webinarDetails.endDateTime}
        />

        {!timeLeft.expired && !isSubmitted ? (
          <form onSubmit={handleSubmit} className="webinar-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <button type="submit" className="cta-button">
              Join Webinar for FREE!
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

        <p className="webinar-time sparkle-text">
          Join Now for Only ₹{price}{" "}
          <span className="highlight">{discountText}</span>
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm_free;
