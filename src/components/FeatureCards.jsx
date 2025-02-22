import React from 'react';
import { TrendingUp, Monitor, DollarSign } from 'lucide-react';
import './FeatureCards.css';

const FeatureCard = ({ icon: Icon, title, points }) => {
  return (
    <div className="feature-card">
      <div className="icon-container">
        <Icon size={24} color="white" />
      </div>
      <h3>{title}</h3>
      <ul>
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

const FeatureCards = ({
  cards = [
    {
      icon: TrendingUp,
      title: "One Day Session",
      points: [
        "2 Hours of Intensive Learning",
        "Live On Zoom"
      ]
    },
    {
      icon: Monitor,
      title: "Language",
      points: [
        "English + Hindi Mix",
        "Easy To Understand For",
        "Everyone"
      ]
    },
    {
      icon: DollarSign,
      title: "Who Can Attend:",
      points: [
        "Fresher / Beginner",
        "Investor / Trader",
        "Finance Enthusiast"
      ]
    }
  ]
}) => {
  return (
    <div className="feature-cards-container">
      {cards.map((card, index) => (
        <FeatureCard
          key={index}
          icon={card.icon}
          title={card.title}
          points={card.points}
        />
      ))}
    </div>
  );
};

export default FeatureCards;