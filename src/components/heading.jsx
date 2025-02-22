import React from 'react';
import './heading.css';  // Import CSS for styling

function Heading({ mainText, subText , style }) {
  return (
    <div className="heading tcElKx">
      <div className="container">
        <p style={style}>{mainText}</p>
        <p style={{ padding: 0, fontFamily: 'Quicksand', fontWeight: 0, fontSize: '1.8rem' }}>
          {subText}
        </p>
      </div>
    </div>
  );
}

export default Heading;
