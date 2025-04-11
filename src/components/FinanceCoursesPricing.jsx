import React from 'react';
import './FinanceCoursesPricing.css';
import { Link } from "react-router-dom";

const FinanceCoursesPricing = () => {
  const courses = [
    {
      title: "Fearless Financial Investment",
      description: "Live Offline One-Day Course"  Break free from financial fear and take charge of your investments with confidence! This power-packed workshop will equip you with essential finance concepts, expert stock market strategies, AI-driven stock selection, and risk management techniques. With hands-on tools, personalized guidance, and a strong investment community, you’ll gain the skills to invest smartly and fearlessly. Join us and start building your financial freedom today! ,
      price: "₹299",
      buttons: [
        { text: "View Course", link: "/EfqLanding" }
      ]
    },
    {
      title: "Fearless Financial Trading",
      description: "Live Online Three-Day Course",
      price: "₹5,000",
      buttons: [
        { text: "View Course", link: "/EfqLanding" }
      ]
    },
    {
      title: "Fearless Options Mastery",
      description: "Live Online Three months Course",
      price: "₹10,000",
      buttons: [
        { text: "View Course", link: "/EfqLanding" }
      ]
    }
  ];

  return (
    <div className="pricing-container">
      {courses.map((course, index) => (
        <div key={index} className="course-item">
          <div className="course-row">
            <div className="course-info">
              <h2 className="course-title">{course.title}</h2>
              <p className="course-description">{course.description}</p>
            </div>
            
            <div className="course-action">
              <span className="course-price">{course.price}</span>

              <Link to={course.buttons[0].link} className="view-course-btn">
              {course.buttons[0].text}
            </Link>
              {/* <button className="view-course-btn">
                View Course
              </button> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FinanceCoursesPricing;
