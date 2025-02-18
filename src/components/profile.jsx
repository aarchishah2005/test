import React from 'react';
import './profile.css';

const BackgroundProfile = () => {
  const sections = [
    {
      title: 'Education',
      content: "I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click Edit Text or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you."
    },
    {
      title: 'Certificates',
      content: "I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click Edit Text or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you."
    },
    {
      title: 'Specialization',
      content: "I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click Edit Text or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you."
    }
    
      
  ];

  return (
    <div className="background-container">
      <div className="content-wrapper">
        <div className="profile-grid">
          {/* Profile Image Section */}
          <div className="image-container">
            <img 
              src="/assets/profile.jpg" 
              alt="Professional headshot"
              className="profile-image"
            />
          </div>

          {/* Background Content Section */}
          <div className="content-section">
            <h1 className="main-title">The Story Behind Falguni Vahora's Fearless Finance Coaching</h1>
            <h2 className="section-title">SEBI REGISTRATION NUMBER - INH000013457</h2>
            
            {sections.map((section, index) => (
              <div key={index} className="section-container">
                <h2 className="section-title">{section.title}</h2>
                <p className="section-content">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundProfile;
