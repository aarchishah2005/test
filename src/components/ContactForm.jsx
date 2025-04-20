import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = ({ infoText }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: "",
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const programs = [
    "Exclusive EFQ Session :: Enrich Your Financial Quotient",
    "Fearless Financial Investment",
    "Fearless Financial Trading",
    "Fearless Options Mastery",
  ];

  const validateForm = () => {
    let errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      errors.name = "Name is required.";
    } else if (formData.name.trim().length < 2) {
      errors.name = "Write the proper Name.";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Invalid email format.";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Phone number must be 10 digits.";
    }

    if (!formData.program) {
      errors.program = "Please select a program.";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required.";
    } else if (formData.message.trim().length < 5) {
      errors.message = "Message must be at least 5 characters.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    
    // run validation first
  if (!validateForm()) {
    return;
  }

    
    setStatus('sending');

    try {
      const response = await fetch('https://formsubmit.co/shahshubhamr@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _template: "table",
          _subject: "New Contact Form Submission from " + formData.name,
          _captcha: "false",
          _autoresponse: "Thank you for contacting us! We have received your message and will get back to you soon.",
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          program: "",
          message: ''
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-info">
          {/* Dynamically injected info text */}
          <h2 className="contact-title" style={{ textAlign: "justify" }}>
            {infoText}
          </h2>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            required
          />
           {formErrors.name && <p className="error-text">{formErrors.name}</p>}
          <div className="input-row">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
            />
             {formErrors.email && <p className="error-text">{formErrors.email}</p>}
            
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-input"
              required
            />
             {formErrors.phone && <p className="error-text">{formErrors.phone}</p>}
          </div>
          <select
            name="program"
            value={formData.program}
            onChange={handleChange}
            className="form-input"
            required
          >
            <option value="">Select a program</option>
            {programs.map((program, index) => (
              <option key={index} value={program}>
                {program}
              </option>
            ))}
          </select>
          {formErrors.program && <p className="error-text">{formErrors.program}</p>}
          
          <textarea
            name="message"
            placeholder="Type your message here..."
            value={formData.message}
            onChange={handleChange}
            className="form-textarea"
            rows="4"
            required
          />
          {formErrors.message && <p className="error-text">{formErrors.message}</p>}
          <button type="submit" className="submit-btn">Submit</button>
          {status === 'sending' && <p className="status-message">Sending message...</p>}
          {status === 'success' && <p className="status-message success">Submitted successfully!</p>}
          {status === 'error' && <p className="status-message error">Failed to send message. Please try again.</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
