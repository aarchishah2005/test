import React, { useEffect, useRef } from 'react';
import './ImageSlider.css';

const ImageSlider = ({ images }) => {
  const sliderRef = useRef(null);
  
  // Duplicate the images to create the continuous effect
  const duplicatedImages = [...images, ...images];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Reset position when animation completes
    const handleAnimation = () => {
      slider.style.transition = 'none';
      slider.style.transform = 'translateX(0)';
      setTimeout(() => {
        slider.style.transition = 'transform 30s linear infinite';
        slider.style.transform = `translateX(-50%)`;
      }, 50);
    };

    slider.addEventListener('transitionend', handleAnimation);
    
    // Start the animation
    slider.style.transition = 'transform 30s linear infinite';
    slider.style.transform = `translateX(-50%)`;

    return () => {
      slider.removeEventListener('transitionend', handleAnimation);
    };
  }, []);

  return (
    <div className="continuous-slider-container">
      <div className="continuous-slider-track" ref={sliderRef}>
        {duplicatedImages.map((image, index) => (
          <div key={index} className="continuous-slide">
            <img src={image.src} alt={image.alt || `event ${index % images.length + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;