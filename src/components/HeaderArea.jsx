import { useState, useEffect, useMemo } from "react";
import { Rocket, Users } from "lucide-react";
import "./HeaderArea.css";

export default function HeaderArea() {
  // 1️⃣ Target webinar date – adjust here only
  const targetDate = useMemo(() => new Date("2025-06-27T11:00:00+05:30"), []);

  // 2️⃣ Helper to calculate remaining time
  const getTimeLeft = () => {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  // 3️⃣ Local state
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);
  const [isVisible, setIsVisible] = useState(false);

  // 4️⃣ Start countdown
  useEffect(() => {
    setIsVisible(true);

    const timerId = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timerId);
  }, [targetDate]);

  // 5️⃣ Format date for display
  const webinarDisplay = targetDate.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: false,
    timeZoneName: "short",
  });

  // 6️⃣ CTA handler
  const gotoDashboard = () => {
    window.open("https://rzp.io/rzp/exZRV8Zm", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="webinar-hero">
      {/* Gradient Overlay */}
      <div className="gradient-overlay" />

      {/* Main Content */}
      <div className="main-content">
        {/* Header Badge */}
        <div className={`header-badge ${isVisible ? "visible" : ""}`}>
          <div className="badge-container">
            <Users className="badge-icon" />
            <span className="badge-text">
              Join the Most Practical Teen Finance Workshop – Trusted by Thousands!
            </span>
          </div>
        </div>

        {/* Main Title */}
        <div className={`main-title ${isVisible ? "visible" : ""}`}>
          <div className="title-container">
            <div className="title-blur" />
            <div className="title-card">
              <h1 className="title-text">
                <Rocket className="rocket-icon" />
                <span className="title-line-1">Transform Your Teen’s Money Mindset Into </span>
                <br className="title-break-desktop" />
                <span className="title-line-3"> Lifelong Financial Confidence — In Just 3 Days!</span>
              </h1>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className={`description ${isVisible ? "visible" : ""}`}>
          <p className="description-text">
            Whether your goal is to make your first investment or build lifelong wealth -
            <br />
            learn to manage and invest with real-world money skills, teen-friendly tools, and smart strategies.
            <br />
            <span className="description-highlight">
              It’s not just about money — it’s about becoming financially fearless for life.
            </span>
          </p>
        </div>

        {/* Countdown Timer */}
        <div className={`countdown-timer ${isVisible ? "visible" : ""}`}>
          <div className="timer-container">
            {[
              { value: timeLeft.days, label: "DAYS" },
              { value: timeLeft.hours, label: "HOURS" },
              { value: timeLeft.minutes, label: "MINUTES" },
              { value: timeLeft.seconds, label: "SECONDS" },
            ].map(({ value, label }) => (
              <div key={label} className="timer-item">
                <div className="timer-card">
                  <div className="timer-blur" />
                  <div className="timer-content">
                    <div className="timer-value">{String(value).padStart(2, "0")}</div>
                    <div className="timer-label">{label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        {/* <div className={`cta-button ${isVisible ? "visible" : ""}`}> */}
        <div>
          <button className="cta-btn" onClick={gotoDashboard}>
            <div className="btn-bg" />
            <div className="btn-hover-bg" />
            <div className="btn-pulse-bg" />
            <span className="btn-text">Grab Your Free Seat!</span>
            {/* <div className="btn-glow" /> */}
          </button>
        </div>

        {/* Webinar Details */}
        <div className={`webinar-details ${isVisible ? "visible" : ""}`}>
          <div className="details-container">
            <p className="details-text">
              <span className="details-label">Webinar:</span> {webinarDisplay}
            </p>
          </div>
        </div>
      </div>
    </div>

  );
}