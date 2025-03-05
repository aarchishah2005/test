import React, { useState } from 'react';
import './EnhancedFinanceCourses.css';

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const EnhancedFinanceCourses = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const courses = [
    {
      title: "Fearless Financial Investment",
      description: "One-Day Course",
      price: "₹299",
      buttonText: "View Course",
      link: "/EfqLanding",
      highlights: ["One full-day intensive workshop", "Practical investment strategies", "Expert-led sessions"]
    },
    {
      title: "Fearless Financial Trading",
      description: "Three-Day Course",
      price: "₹5,000",
      buttonText: "View Course",
      link: "/EfqLanding",
      highlights: ["3-day comprehensive program", "Live trading demonstrations", "Personalized feedback"]
    },
    {
      title: "Mastering Options",
      description: "Six Months Course",
      price: "₹10,000",
      buttonText: "View Course",
      link: "/EfqLanding",
    highlights: ["In-depth 6-month curriculum", "Weekly mentoring sessions", "Real market applications"]
    }
  ];

  return (
    <div className="finance-container">
      
      <div className="course-grid">
        {courses.map((course, index) => (
          <div 
            key={index}
            className={`course-card ${hoveredCard === index ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="card-accent"></div>
            
            <div className="card-content">
              <div className="course-header">
                <h2 className="course-title">{course.title}</h2>
              </div>
              
              <p className="course-description">{course.description}</p>
              
              <div className="course-highlights">
                {course.highlights.map((highlight, idx) => (
                  <div key={idx} className="highlight-item">
                    <div className="highlight-bullet">•</div>
                    <p className="highlight-text">{highlight}</p>
                  </div>
                ))}
              </div>
              
              <div className="card-footer">
                <div className="new-course-price">{course.price}</div>
                <a href={course.link} className="course-button">
                  {course.buttonText}
                  <span className="button-icon"><ArrowRightIcon /></span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnhancedFinanceCourses;
