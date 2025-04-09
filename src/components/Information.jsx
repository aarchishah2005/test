import React from 'react'
import "./Information.css"

const Information = () => {
  return (
    <div class="Information-info">
<h2>For any other Query you may also Contact us on:</h2>
<div class="Information-cards">
    <div class="card1">
        <img src="/assets/email.img.png" alt="Email"/>
        <p><strong>Email:</strong> Falguni.Vahora@blissquants.com</p>
    </div>
    <div class="card1">
        <img src="/assets/msg.img.png" alt="Messenger"/>
        <p><strong>Messenger:</strong> Chat with us for quick response</p>
    </div>
    <div class="card1">
        <img src="/assets/loc.img.png" alt="Address"/>
        <p><strong>Address:</strong>D - 422,ITC Building, BlissQuants Datalytics LLP, Majuragate, Surat 395002</p>
    </div>
</div>
</div>
  )
}

export default Information
