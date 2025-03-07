import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-info">
          <h2 className="contact-title">
           
            
            Let's Connect <br />
            Falguni Vahora is SEBI registered Research Analyst.<br />
            She is an Engineer. She is truly passionate about Finance and Stock markets.<br />
            She has been a trainer and educator for many market learners.<br />
            She researches both technical and fundamental parameters. <br />

            <br />
            Contact number : +91 92096 32020<br />
            <br />

            Surat :	D 422 ITC, Majura gate,<br />
                    Surat – 395002, Gujarat.<br />

            <br />
            Pune :	A11, The Laburnums, Mitcon Road,<br />
                    Balewadi, Pune – 411045, Maharashtra<br />

            <br />
            E-mail: inquiry@BlissQuants.com <br />

            👉Join our whatsapp community  <br />
        https://chat.whatsapp.com/HrP2fRUkkI75Qj8pcCuTct <br />
       
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
          {/*  <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="form-input" 
          /> */}
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
          { /* <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="form-input"
          />*/}
          <textarea
            name="message"
            placeholder="Type your message here..."
            value={formData.message}
            onChange={handleChange}
            className="form-textarea"
            rows="4"
          />
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
