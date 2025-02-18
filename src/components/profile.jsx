import React from 'react';
import './profile.css';

const BackgroundProfile = () => {
  const sections = [
    {
      title: 'Education',
      content: "Growing up in a business-class family, I thought I had a solid grip on finance. But when I entered the corporate world, something surprising happened – I found myself in the same boat as many others. I, too, handed over my income tax filing to my brother and banking transactions to my husband, believing finance was a realm I didn't fully understand. Even corporate leaders, successful women, admitted that finance was "handled by their husbands.""
    },
    {
      title: 'Certificates',
      content: "This realization sparked a question in my mind – why is finance such a mystery to so many of us, even though we are educated and earning well? I shared my concerns with my father, wondering why some communities seem to have mastered financial literacy from childhood while others struggle. That’s when I decided to face my fear head-on. I immersed myself in learning everything about finance – from investments to managing my taxes – and something incredible happened: it wasn’t as complicated as I had imagined. It was just simple math and, often, common sense!"
    },
    {
      title: 'Specialization',
      content: "With newfound confidence, I began discussing investments and financial strategies comfortably with my colleagues, realizing that if I could do it, so could others. And that’s when it clicked: why not help others break free from their fear of finance too? That’s how Fearless Finance Coaching was born. It’s time to change the narrative and empower everyone, especially women, to live a financially fearless life. After all, mastering finance isn’t about being a genius – it’s about being fearless and making smart, informed decisions."
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
