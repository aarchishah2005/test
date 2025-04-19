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

  const handleSubmit = async (e) => {
    e.preventDefault();
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
          />
          <div className="input-row">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <select
            name="program"
            value={formData.program}
            onChange={handleChange}
            className="form-input"
          >
            <option value="">Select a program</option>
            {programs.map((program, index) => (
              <option key={index} value={program}>
                {program}
              </option>
            ))}
          </select>
          <textarea
            name="message"
            placeholder="Type your message here..."
            value={formData.message}
            onChange={handleChange}
            className="form-textarea"
            rows="4"
          />
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
