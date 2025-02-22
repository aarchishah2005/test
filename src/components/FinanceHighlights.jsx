import React from 'react';
import './FinanceHighlights.css';


  const FinanceHighlights = () => {
    const cards = [
      {
       text : "Learn to take control of your finance in your hand"
      },
      {
        text : "Learn to take control of your finance in your hand"
       },
       {
        text : "Learn to take control of your finance in your hand"
       },
       {
        text : "Learn to take control of your finance in your hand"
       },
       {
        text : "Learn to take control of your finance in your hand"
       }
    ];
  
    return (
      <div className="cards-container">

          {cards.map((card, index) => (
            <div key={index} className="card">
              <h2 className="card-text">{card.text}</h2>
            </div>
          ))}
        </div>
    );
  };
  
  export default FinanceHighlights;
  
