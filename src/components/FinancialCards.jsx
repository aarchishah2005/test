
import React from 'react';
import './FinancialCards.css';
// import '/Font.css';



const FinancialCards = () => {
  const cards = [
    {
      title: "Fearless Financial Investment",
      subTitle: "Live One-Day Course",
      image: "/assets/IntroToFinance.jpg",
      mainTitle: "Fearless Financial Investment"
    },
    {
      title: "Fearless Financial Trading",
      subTitle: "Live Online Course",
      image: "/assets/financial_roadmap.png",
      mainTitle: "Fearless Financial Trading"
    },
    {
      title: "Mastering Options",
      subTitle: "Live 6 months Course",
      image: "/assets/dell_article.jpg",
      mainTitle: "Mastering Options"
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
            <p className="card-text">
              I'm a paragraph. Click here to add your own text and edit me. It's easy. 
              Just click "Edit Text" or double click me to add your own content and 
              make changes to the font. I'm a great place for you to tell a story and let 
              your users know a little more about you.
            </p>
            <button className="learn-more-btn">Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinancialCards;
