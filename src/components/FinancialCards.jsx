
import React from 'react';
import { Link } from "react-router-dom";
import './FinancialCards.css';

// import '/Font.css';



const FinancialCards = () => {
  const cards = [
    {
      title: "Fearless Financial Investment",
      subTitle: "Live One-Day Course",
      image: "/assets/IntroToFinance.jpg",
      mainTitle: "Fearless Financial Investment",
      buttons: [
        { text: "Learn More", link: "/EfqLanding" }
      ]
    },
    {
      title: "FearlessFinancialTrading",
      subTitle: "Live Online Course",
      image: "/assets/financial_roadmap.png",
      mainTitle: "Fearless Financial Trading",
      buttons: [
        { text: "Learn More", link: "/EfqLanding" }
      ]
    },
    {
      title: "Mastering Options",
      subTitle: "Live 6 months Course",
      image: "/assets/dell_article.jpg",
      mainTitle: "Mastering Options",
      buttons: [
        { text: "Learn More", link: "/EfqLanding" }
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
