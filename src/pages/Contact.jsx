import React, { useEffect } from "react";
// import Form from "../components/Form"
import ContactUsForm from "../components/ContactUsForm"
import Information from "../components/Information"
// import SocialMedia from "../components/SocialMedia"
// import Update from "../components/Update"
import Footer from "../components/Footer"
import "./Contact.css"

function Contact() {
    useEffect(() => {
      console.log("Scrolling to top...");
      window.scrollTo(0, 0);  // Scrolls to the top when component mounts
    }, []);
  return (
    <div className="contact">
    <>
     {/* <Form/> */}
     <ContactUsForm/>
     <Information/>
     {/* <SocialMedia/>
     <Update/> */}
     <Footer/>
    </>
    </div>
  )
}

export default Contact
