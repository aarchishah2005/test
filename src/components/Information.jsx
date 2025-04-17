import React from "react";
import "./Information.css";

const Information = () => {
  return (
    <div class="Information-info">
      <h2>For any other Query you may also Contact us on:</h2>
      <div class="Information-cards">
        <div class="card1">
          <img src="/assets/email.img.png" alt="Email" />
          <p>
            <strong>Email:</strong> <br />  Inquiry@blissquants.com
          </p>
        </div>
        <div class="card1">
          <img src="/assets/msg.img.png" alt="Messenger" />
          <p>
            <strong>Contact:</strong> <br />  +91 92096 32020
          </p>
        </div>
        <div class="card1">
          <img src="/assets/loc.img.png" alt="Address" />
          <p>
            <strong>Address:</strong> <br /> A11, The Laburnums, Mitcon Road, Balewadi, Pune – 411045, Maharashtra
          </p>
        </div>
      </div>
    </div>
  );
};

export default Information;
