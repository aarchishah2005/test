import React, { useState } from 'react';
import './RegistrationForm.css';

const RegistrationForm = ({
  title = "Register Now",
  learningTitle = "What you will learn in 90 minutes",
  secrets = [
    {
      title: "Secret 1 : Strengthen Your Financial Foundation",
      color: "#84c225"
    },
    {
      title: " Secret 2 : Unlock Ready-Made Investment Strategy",
      color: "#84c225"
    },
    {
      title: "Secret 3 : Start Your Part-Time Journey in the Stock Market",
      color: "#84c225"
    }   
  ],
  buttonText = "Submit",
  onSubmit = () => {},
  backgroundColor = "none",
  accentColor = "#84c225",
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.phone) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      tempErrors.phone = "Phone number is invalid";
    }
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="registration-container" style={{ backgroundColor }}>
      <div className="registration-form-section">
        <h2 style={{ color: accentColor }}>{title}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? "error" : ""}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>
          
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "error" : ""}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          
          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Phone*"
              value={formData.phone}
              onChange={handleChange}
              className={errors.phone ? "error" : ""}
            />
            {errors.phone && <span className="error-message">{errors.phone}</span>}
          </div>
          
          <button 
            type="submit" 
            className="submit-button"
            style={{ backgroundColor: accentColor }}
          >
            {buttonText}
          </button>
        </form>
      </div>
      
      <div className="learning-section" style={{ borderColor: accentColor }}>
        <h3>{learningTitle}</h3>
        <ul>
          {secrets.map((secret) => (
            <li key={secret.id}>
              <div className="secret-item">
                <span className="bullet" style={{ color: secret.color }}>✓</span>
                <div className="secret-content"  
                  style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      whiteSpace: "nowrap",
                          }}>

                <p className="secret-title" style={{ margin: 0, display: "inline", color: "white" }}>
                  <span style={{ color: "#84c225" }}>
                    {secret.title.split(":")[0]}
                  </span>
                  {":" + secret.title.split(":")[1]}
                </p>


                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RegistrationForm;