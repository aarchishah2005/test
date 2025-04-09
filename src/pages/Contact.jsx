import React, { useEffect } from "react";
import Form from "../components/Form"
import Information from "../components/Information"
import SocialMedia from "../components/SocialMedia"
import Update from "../components/Update"
import Footer from "../components/Footer"
import "./Contact.css"

function Contact() {
    useEffect(() => {
      console.log("Scrolling to top...");
      window.scrollTo(0, 0);  // Scrolls to the top when component mounts
    }, []);
  return (
    <>
     <Form/>
     <Information/>
     <SocialMedia/>
     <Update/>
     <Footer/>
    </>
  )
}

export default Contact
