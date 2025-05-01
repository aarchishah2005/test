import React, { useEffect, useState } from "react";
import "./WebinarTimer.css"; // Ensure this file handles responsiveness
import DateDay from "./DateDay";
import { useWebinarTimer } from "./useWebinarTimer";

const WebinarTimer = () => {
  const timeLeft = useWebinarTimer("2025-05-11T23:59:59");
  return (
    <div className="webinar-container">
      <DateDay
        date="11 May 2025"
        day="Sunday"
        startTime="2 : 00 PM"
        endTime="4 : 00 PM"
      />

      <div className="countdown">
        <div className="time-block">
          <div className="time">
            <span>{timeLeft.days}d</span> :
          </div>
          <div className="label">DAYS</div>
        </div>
        <div className="time-block">
          <div className="time">
            <span>{timeLeft.hours}h</span> :
          </div>
          <div className="label">HOURS</div>
        </div>
        <div className="time-block">
          <div className="time">
            <span>{timeLeft.minutes}m</span> :
          </div>
          <div className="label">MINUTES</div>
        </div>
        <div className="time-block">
          <div className="time">
            <span>{timeLeft.seconds}s</span>
          </div>
          <div className="label">SECONDS</div>
        </div>
      </div>
    </div>
  );
};

export default WebinarTimer;
