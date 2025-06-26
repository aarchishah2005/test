import { useState, useEffect } from 'react';
import { Rocket, Users, TrendingUp } from 'lucide-react';
import './HeaderArea.css';

export default function HeaderArea() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [isVisible, setIsVisible] = useState(false);
  const [sparklePositions, setSparklePositions] = useState([]);
  // webinar Date Change Here
  const targetDate = new Date('2025-07-01T11:00:00');

  // useEffect(() => {
  //   setIsVisible(true);

  //   // Generate random sparkle positions
  //   const sparkles = Array.from({ length: 20 }, (_, i) => ({
  //     id: i,
  //     x: Math.random() * 100,
  //     y: Math.random() * 100,
  //     delay: Math.random() * 3,
  //     duration: 2 + Math.random() * 2
  //   }));
  //   setSparklePositions(sparkles);

  //   // Countdown timer
  //   const timer = setInterval(() => {
  //     setTimeLeft(prev => {
  //       if (prev.seconds > 0) {
  //         return { ...prev, seconds: prev.seconds - 1 };
  //       } else if (prev.minutes > 0) {
  //         return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
  //       } else if (prev.hours > 0) {
  //         return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
  //       }
  //       return prev;
  //     });
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, []);

  useEffect(() => {
  setIsVisible(true);

  // // Generate random sparkles
  // const sparkles = Array.from({ length: 20 }, (_, i) => ({
  //   id: i,
  //   x: Math.random() * 100,
  //   y: Math.random() * 100,
  //   delay: Math.random() * 3,
  //   duration: 2 + Math.random() * 2
  // }));
  // setSparklePositions(sparkles);

  // Countdown logic
  const timer = setInterval(() => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      clearInterval(timer);
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }
  }, 1000);

  return () => clearInterval(timer);
}, [targetDate]);


  return (
    <div className="webinar-hero">
      {/* Animated Background Sparkles */}
      {sparklePositions.map((sparkle) => (
        <div
          key={sparkle.id}
          className="sparkle"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            animationDelay: `${sparkle.delay}s`,
            animationDuration: `${sparkle.duration}s`
          }}
        >
          {/* <Sparkles className="sparkle-icon" /> */}
        </div>
      ))}

      {/* Floating Geometric Shapes */}
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>

      {/* Gradient Overlay */}
      <div className="gradient-overlay"></div>

      {/* Main Content */}
      <div className="main-content">

        {/* Header Badge */}
        <div className={`header-badge ${isVisible ? 'visible' : ''}`}>
          <div className="badge-container">
            <Users className="badge-icon" />
            <span className="badge-text">
              IN Join India's Most Impactful Webinar - 800,000+ Attendees
            </span>
          </div>
        </div>

        {/* Main Title */}
        <div className={`main-title ${isVisible ? 'visible' : ''}`}>
          <div className="title-container">
            <div className="title-blur"></div>
            <div className="title-card">
              <div className="title-icons">
                <Rocket className="rocket-icon" />
                <TrendingUp className="trending-icon" />
              </div>
              <h1 className="title-text">
                <span className="title-line-1">Transform Your Expertise Into A</span>
                <br className="title-break-desktop" />
                <span className="title-highlight">
                  Multi-Crore Business
                </span>
                <br className="title-break-desktop" />
                <span className="title-line-3"> In 2025!</span>
              </h1>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className={`description ${isVisible ? 'visible' : ''}`}>
          <p className="description-text">
            Whether your goal is ₹1L, ₹5L or ₹10L/month — learn to monetize your knowledge
            <span className="description-break-desktop"><br /></span>
            <span className="description-break-mobile"> </span>
            with AI-Powered Courses, Online Communities, and Automation. It's not just about
            <span className="description-break-desktop"><br /></span>
            <span className="description-break-mobile"> </span>
            <span className="description-highlight">income, it's about freedom, peace, and the life you truly deserve.</span>
          </p>
        </div>

        {/* Countdown Timer */}
        <div className={`countdown-timer ${isVisible ? 'visible' : ''}`}>
          <div className="timer-container">
            {[
              { value: String(timeLeft.hours).padStart(2, '0'), label: 'DAYS' },
              { value: String(timeLeft.hours).padStart(2, '0'), label: 'HOURS' },
              { value: String(timeLeft.minutes).padStart(2, '0'), label: 'MINUTES' },
              { value: String(timeLeft.seconds).padStart(2, '0'), label: 'SECONDS' }
            ].map((item, index) => (
              <div key={item.label} className="timer-item">
                <div className="timer-card">
                  <div className="timer-blur"></div>
                  <div className="timer-content">
                    <div className="timer-value">
                      {item.value}
                    </div>
                    <div className="timer-label">
                      {item.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className={`cta-button ${isVisible ? 'visible' : ''}`}>
          <button className="cta-btn">
            <div className="btn-bg"></div>
            <div className="btn-hover-bg"></div>
            <div className="btn-pulse-bg"></div>
            <span className="btn-text">
              Grab Your Free Seat!
            </span>
            <div className="btn-glow"></div>
          </button>
        </div>

        {/* Webinar Details */}
        <div className={`webinar-details ${isVisible ? 'visible' : ''}`}>
          <div className="details-container">
            <p className="details-text">
              <span className="details-label">Webinar:</span> 20th June, 11 AM - 12:30 PM IST
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}