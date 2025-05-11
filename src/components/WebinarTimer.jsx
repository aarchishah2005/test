import React from "react";
import "./WebinarTimer.css";
import DateDay from "./DateDay";
import { useWebinarTimer } from "./useWebinarTimer";

const WebinarTimer = ({ date, day, startTime, endTime, endDateTime }) => {
  const timeLeft = useWebinarTimer(endDateTime);

  return (
    <div className="webinar-container">
      <DateDay
        date={date}
        day={day}
        startTime={startTime}
        endTime={endTime}
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
