import React from 'react';
import './DateDay.css';

const DateDay = ({
  date = '20 October 2024',
  day = 'Sunday',
  startTime = '10 : 30 AM',
  endTime = '12 : 00 PM',
  backgroundColor = '#fff',
  textColor = '#3b3531',
  className = '',
}) => {
  return (
    <div 
      className={`DateDay ${className}`}
      style={{ 
        backgroundColor,
        color: textColor
      }}
    >
      <div className="Date">{date} {day}</div>
      <div className="Time">{startTime} to {endTime}</div>
    </div>
  );
};

export default DateDay;
