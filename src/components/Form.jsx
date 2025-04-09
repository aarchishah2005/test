import React, { useState } from 'react';
import "./Form.css";

const Form = () => {
  const [selectedProgram, setSelectedProgram] = useState("Programs Interested");

  const programs = [
    "Exclusive EFQ Session :: Enrich Your Financial Quotient",
    "Fearless Financial Investment",
    "Fearless Financial Trading",
    "Fearless Options Mastery"
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


