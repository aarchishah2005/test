import React, { useState } from 'react';
import "./Form.css";

const Form = () => {
  const [selectedProgram, setSelectedProgram] = useState("Programs Interested");

  const programs = [
    "Million Dollar Morning – 5 Days",
    "30 Days Rise n Shine Manifestation Achievers",
    "Master your Money Mindset – 5 days",
    "21 days Millionaire Mindset Mastery Bootcamp",
    "Million Dollar Coach Training",
    "Advanced Ho’oponopono Healing Certification",
    "Ultimate Quantum Leap (UQL)",
    "1:1 Clarity Session",
  ];

  return (
    <div className="main-container">
      <div className="left-image">
        <img src="/assets/img.1.png" alt="Transformation Image" />
      </div>
      <div className="background-image"></div>

      <div className="right-form">
        <h2>Book A Call</h2>
        <form action="#" method="POST">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone" required />

          {/* Dropdown for Programs Interested */}
          <select
            value={selectedProgram}
            onChange={(e) => setSelectedProgram(e.target.value)}
            className="dropdown"
            required
          >
            <option disabled>Programs Interested</option>
            {programs.map((program, index) => (
              <option key={index} value={program}>
                {program}
              </option>
            ))}
          </select>

          <button type="submit">GET A CALL BACK</button>
        </form>
      </div>
    </div>
  );
};

export default Form;


