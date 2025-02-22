import React from 'react';
import './LogoScroller.css';

const LogoScroller = () => {
  const logos = [
      "./assets/adroit.png",
      "./assets/agarwal.png",
      "./assets/alard.png",
      "./assets/bhagavan_mahavir.png",
      "./assets/bvpatel.png",
      "./assets/ckp.png", 
      "./assets/dimr.png",
      "./assets/dpu.png",
      "./assets/jainum.png",
      "./assets/markethub.png",
      "./assets/marwadi.png",
      "./assets/scet_1.png", 
      "./assets/srluthara.png",
      "./assets/uka.png", 
      "./assets/vedika.png",
      "./assets/vaghani_shares.png",

      "./assets/adroit.png",
      "./assets/agarwal.png",
      "./assets/alard.png",
      "./assets/bhagavan_mahavir.png",
      "./assets/bvpatel.png",
      "./assets/ckp.png", 
      "./assets/dimr.png",
      "./assets/dpu.png",
      "./assets/jainum.png",
      "./assets/markethub.png",
      "./assets/marwadi.png",
      "./assets/scet_1.png", 
      "./assets/srluthara.png",
      "./assets/uka.png", 
      "./assets/vedika.png",
      "./assets/vaghani_shares.png"
    ];

  return (
    <div className="logo-container">
      <div className="logo-scroll">
        {/* First set of logos */}
        {logos.map((logo, index) => (
          <img 
            key={`logo-1-${index}`} 
            src={logo} 
            alt={`Logo ${index + 1}`} 
            className="logo"
          />
        ))}
        {/* Duplicate set for seamless scrolling */}
        {logos.map((logo, index) => (
          <img 
            key={`logo-2-${index}`} 
            src={logo} 
            alt={`Logo ${index + 1}`} 
            className="logo"
          />
        ))}
      </div>
    </div>
  );
};

export default LogoScroller;