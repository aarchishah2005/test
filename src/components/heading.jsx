import React from 'react';
import './heading.css';  // Import CSS for styling

function Heading({ mainText, subText }) {
  return (
    <div className="heading tcElKx">
      <div className="container">
        <p>{mainText}</p>
        <p style={{ padding: 0, fontFamily: 'Bauhaus', fontWeight: 0, fontSize: '1.8rem' }}>
          {subText}
        </p>
      </div>
    </div>
  );
}

export default Heading;
