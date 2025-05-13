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
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    setIsSubmitting(true);

    const dataToSend = {
      ...formData,
      date: new Date().toLocaleDateString("en-GB", { 
        timeZone: "Asia/Kolkata",
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }),
      time: new Date().toLocaleTimeString("en-US", { 
        timeZone: "Asia/Kolkata",
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      })
    };

    fetch(
      "https://script.google.com/macros/s/AKfycby_MTOGCpxCmAf82TWpCy88hTuc1CA9WCeOx4lXOL9YWGK8iUnw1lvs2gx8j6jceybHTQ/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
        mode: "no-cors",
      }
    )
      .then(() => {
        setIsSubmitted(true);
        setIsSubmitting(false);
      })
      .catch((err) => {
        console.error("Error submitting form:", err);
        alert("Failed to submit form. Please try again later.");
        setIsSubmitting(false);
      });
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({ name: "", email: "", phone: "" });
    setIsSubmitting(false);
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
            <button type="submit" className="cta-button" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Join Webinar for FREE!"}
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
