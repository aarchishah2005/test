import React, { useState } from "react";
import "./ContactUsForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  // things for dropdown menu
  const programs = [
    "Exclusive EFQ Session :: Enrich Your Financial Quotient",
    "Fearless Financial Investment",
    "Fearless Financial Trading",
    "Fearless Options Mastery",
  ];

  return (
    <div className="contactus-container">
      <div className="contactus-content">
        <div className="contactus-info">
          <h2 className="contactus-title" style={{ textAlign: "justify" }}>
            <span style={{ fontWeight: "bold" }}>Let's Connect</span>
            <br />
            <br />
            Falguni Vahora is a fearless finance leader, investor, and advocate
            for financial empowerment, especially for women. <br /> <br />
            A BE-EC graduate from NIT Surat, she has 27+ years of experience
            spanning software development, teaching, finance, and stock market
            trading. She co-founded BlissQuants Analytics, leads a trading desk
            of 40+ professionals, and has trained 1500+ individuals in investment
            and trading. A SEBI-registered research analyst and author of
            Mastering Options Delta Trading, she blends expertise in data
            analytics, risk management, and coaching to transform financial
            education. <br />
          </h2>
        </div>

        <form className="contactus-forms" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="forms-input"
          />
          <div className="input-row">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="forms-input"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="forms-input"
            />
          </div>
          <select
            name="program"
            value={formData.program}
            onChange={handleChange}
            className="forms-input"
          >
            <option value="">Select a program</option>
            {programs.map((program, index) => (
              <option key={index} value={program}>
                {program}
              </option>
            ))}
          </select>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
