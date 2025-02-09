import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import './Infocolunm.css';

const InfoColumns = () => {
  const columns = [
    {
      title: "Who I Help",
      content: "I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click Edit Text or double click me to add your own content and make changes to the font."
    },
    {
      title: "How I Do It",
      content: "I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click Edit Text or double click me to add your own content and make changes to the font."
    },
    {
      title: "What's in It for You",
      content: "I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click Edit Text or double click me to add your own content and make changes to the font."
    }
  ];

  return (
    <div className="info-section">
      <div className="columns-container">
        {columns.map((column, index) => (
          <div key={index} className="info-column">
            <h2 className="column-title">{column.title}</h2>
            <p className="column-content">{column.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoColumns;