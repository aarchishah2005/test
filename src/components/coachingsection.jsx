import React from 'react';
import './coachingsection.css';

const CoachingSection = () => {
  return (
    <div className="coaching-container">
      <div className="coaching-content">
        <h1 className="coaching-title">Why I Started Coaching</h1>
        <p className="coaching-text">
          I'm a paragraph. Click here to add your own text and edit me. 
          It's easy. Just click "Edit Text" or double click me to add 
          your own content and make changes to the font. I'm a great 
          place for you to tell a story and let your users know a 
          little more about you.
        </p>
      </div>
      <button className="learn-more-btn">Learn More</button>
    </div>
  );
};

export default CoachingSection;

