import React from "react";
import "./EfqLanding.css";
import Footer from "../components/Footer";
import ImageSlider from '../components/ImageSlider';



function About() {

  const images = [
    { src: "/assets/book_launch.jpeg", alt: "Conference room with people at computers" },
    { src: "/assets/ioc_3_1.jpeg", alt: "Meeting hall with presentation" },
    { src: "/assets/kolkata_training_1.jpeg", alt: "Board room meeting" },
    { src: "/assets/kolkata_training_2.jpeg", alt: "Team workshop session" },
    { src: "/assets/kolkata_training_3.jpeg", alt: "Team workshop session" },
    { src: "/assets/pune_training_1.jpeg", alt: "Team workshop session" },
    { src: "/assets/ioc_1_1.jpg", alt: "Team workshop session" },
    { src: "/assets/ioc_1_2.jpg", alt: "Team workshop session" },
    { src: "/assets/kolkata_training_4.jpg", alt: "Team workshop session" },
    { src: "/assets/1-552x412.png", alt: "Team workshop session" },
    { src: "/assets/2-552x412.png", alt: "Team workshop session" },
    { src: "/assets/copy-of-untitled-552x412.png", alt: "Team workshop session" },
    { src: "/assets/indor_training_1.png", alt: "Team workshop session" },
    { src: "/assets/indor_training_2.png", alt: "Team workshop session" },
    { src: "/assets/ioc_5_1.png", alt: "Team workshop session" },
    { src: "/assets/ioc_5_2.png", alt: "Team workshop session" }
  ];

  return (
    <div className="Efqlanding">
      <div className="background">
      <ImageSlider images={images} />



        <Footer />
        
      </div>
    </div>
  );
}

export default About;   
