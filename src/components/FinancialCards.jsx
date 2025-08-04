
import React from 'react';
import { Link } from "react-router-dom";
import './FinancialCards.css';

// import '/Font.css';



const FinancialCards = () => {
  const cards = [
    {
      title: "Fearless Financial Investment",
      subTitle: "Three-Day Course",
      image: "/assets/Financial_Investment.png",
      mainTitle: "Fearless Financial Investment",
      buttons: [
        { text: "Learn More", link: "/Coaching" }
      ]
    },
    {
      title: "Fearless Financial Trading",
      subTitle: "Three-Day Course",
      image: "/assets/Financial_Trading.jpeg",
      mainTitle: "Fearless Financial Trading",
      buttons: [
        { text: "Learn More", link: "/Coaching" }
      ]
    },
    {
      title: "Fearless Options Mastery",
      subTitle: "Three-month Course",
      image: "/assets/Mastering_Options.jpeg",
      mainTitle: "Fearless Options Mastery",
      buttons: [
        { text: "Learn More", link: "/Coaching" }
      ]
    },
    {
      title: "Teens' Financial Awareness Program",
      subTitle: "Three-Day Course",
      image: "/assets/Teens'_Financial_Awareness_Program.png",
      mainTitle: "Teens' Financial Awareness Program",
      buttons: [
        { text: "Learn More", link: "/EfqLanding_kids" }
      ]
    },
    {
      title: "Class XI : Financial Markets Management",
      subTitle: "Three-month Course",
      image: "/assets/ClassXI_Financial_Markets_Management.png",
      mainTitle: "Class XI : Financial Markets Management",
      buttons: [
        { text: "Learn More", link: "/Coaching_for_student" }
      ]
    },
    {
      title: "Class XII : Financial Markets Management",
      subTitle: "Three-month Course",
      image: "/assets/ClassXII_Financial_Markets_Management.png",
      mainTitle: "Class XII : Financial Markets Management",
      buttons: [
        { text: "Learn More", link: "/Coaching_for_student" }
      ]
    }
  ];

  return (
    <div className="cards-container">
      <div className="cards-grid">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <h2 className="card-main-title">{card.mainTitle}</h2>
            <div className="card-image-container">
              <img 
                src={card.image} 
                alt={card.title} 
                className="card-image"
              />
            </div>
            <h3 className="card-subtitle">{card.subTitle}</h3>
            {/* <button className="learn-more-btn">Learn More</button> */}

            <Link to={card.buttons[0].link} className="learn-more-btn">
              {card.buttons[0].text}
            </Link>

          </div>
        ))}
      </div>
    </div>
  );
};

export default FinancialCards;

