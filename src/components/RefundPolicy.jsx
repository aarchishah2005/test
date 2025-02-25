import React from 'react';
import './Disclaimer.css';

const RefundPolicy = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="disclaimer-overlay">
      <div className="disclaimer-modal">
        <div className="disclaimer-header">
          <h3>Refund Policy</h3>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        <div className="disclaimer-content">

            <p>
            BlissQuants follows a transparent and no fuss cancellation policy. Here are the terms of the policy:
            </p>

            <p>
            All cancellation requests should be sent to our billing department mail inquiry@Blissqunats.com.
            </p>

            <p>
            The cancellation will not be valid until it is confirmed by the respective department.Cancellation requests will be considered only when the request is made within 12 hours of placing the order and execution of the project has not started already. BlissQuants will not be held responsible for any third-party services, such as hosting, web development, content writing etc. Due to the nature of the services, BlissQuants does not guarantee any refunds upon cancellation.
            </p>

            <p>
            In case of monthly payment, it is understood that payment for next month is released only after reviewing the current month�s performance.
            </p>

            <p>
            BlissQuants does not make any guarantees on the basis of traffic/rankings etc. and will not be held responsible for any refund claims thereof. We provide education programs and service all over India. If you are not happy with our services you�ll get your refund back according to our above mentioned policies.
            </p>
          <div className="disclaimer-footer">
            <button className="close-btn" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;