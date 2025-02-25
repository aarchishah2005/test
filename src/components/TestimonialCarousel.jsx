import React, { useState, useEffect } from 'react';
import './TestimonialCarousel.css';

const testimonialData = [
  {
    text: "I attended the delta hedging training at BlissQuants and was pleasantly surprised by the method of delivery and content of the program. Falguni is extremely knowledgeable and was able to provide an in-depth understanding of the option Greeks. The course is designed to provide real-life examples that were very helpful and provided a practical view of the overall market. Rupak has extensive experience in the intraday trading methods and he was able to explain the strategies with live trading sessions. I would suggest this course to anyone who'd like to start a career in the financial markets and to become a professional delta hedger.",
    name: "Shabeer",
    position: "Head of Front Office Data at Leading investment bank",
    location: "Singapore"
  },
  {
    text: "It is very fun to be part of BlissQuants. The faculty is greatly skilled. I took training from Falguni Vahora and Rupak Shah, who cleared my concept of the stock and derivative market from scratch to an advance level. Falguni Mam has a great ability to teach a very complex topics in a simple understanding way. Even the other staff of BlissQuants taught me many valuable things.",
    name: "VineetKumar Jain",
    position: "Quantitative Developer at Amsys Capital",
    location: "Mumbai"
  },
  {
    text: "BlissQuants have really helped me in sharpening my Options trading skills. The trainers at BlissQuants are professional traders hence drive the experience-based training with everything hands-on and minimum theory. With their help, I am easily able to make a minimum 10% ROI on capital invested. Their Delta-Hedging related strategies open up a new world of consistent low-risk earning.",
    name: "Nikhil Gandhi",
    position: "VP at Software firm",
    location: "Delhi"
  },
  {
    text: "BlissQuants is a good place to be for delta hedging based trading. The training they give is good, quite insightful and makes hedging easy to understand.",
    name: "Prem Punjabi",
    position: "FreeLancer, Architectural visualization Artist",
    location: "Surat"
  },
  {
    text: "Falguni's teaching is unique has a thorough knowledge of Options and most importantly teaches to hedge 100% of the portfolio. The program itself is called \"Delta Hedging\" which is self-explanatory. I enjoyed the hands-on training and had visited their trading floor in Surat. Nice experience. It would be a good program for starters who want to make a living on options trading.",
    name: "N Ravishankar Former",
    position: "CIO and CTO of large companies worked in Tata's and Airtel",
    location: "Banglore"
  },
  {
    text: "I took 1:1 training with Falguni. She took me through the basics to details of stock market jargon. The research work she gave me as assignments, really helped my confidence to start investing in stocks. Her way of teaching and content of training is very thorough and pragmatic. The guidance and mentoring go beyond the training period and that shows their commitment towards their domain. Highly recommended for all the folks interested to start their journey in stocks.",
    name: "Shilpa Singh",
    position: "Senior Engineering Manager at Veritas Pvt. Ltd",
    location: "Pune"
  }
];

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => 
        current === testimonialData.length - 1 ? 0 : current + 1
      );
    }, 3000); // Changed to 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-section">
      <h2 className="testimonial-title">Testimonial</h2>
      
      <div className="carousel-container">
        <div className="carousel-inner">
          {testimonialData.map((testimonial, index) => (
            <div
              key={index}
              className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
            >
              <blockquote>
                <p className="testimonial-text">{testimonial.text}</p>
                <footer className="testimonial-footer">
                  <div className="testimonial-name">{testimonial.name}</div>
                  <div className="testimonial-position">{testimonial.position}</div>
                  <div className="testimonial-location">{testimonial.location}</div>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
