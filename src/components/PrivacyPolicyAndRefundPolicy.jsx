import React from 'react';
import './Disclaimer.css';

const PrivacyPolicyAndRefundPolicy = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="disclaimer-overlay">
      <div className="disclaimer-modal">
        <div className="disclaimer-header">
          <h3>Privacy Policy and Refund Policy</h3>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        <div className="disclaimer-content">
          <p>
          The User's right to privacy is of paramount importance to BlissQuants. Any information provided by the User will not be shared with any third party, except for the intended purpose for which such information is provided by the User, in which case User’s consent is implied. BlissQuants reserves the right to use the information to provide the User a more personalized online experience.
            </p>
          
          <p>
          If the Site provides links to web sites and access to content, products and services from third parties, including users, advertisers, affiliates and sponsors of the Site, you agree that BlissQuants is not responsible for the availability of, and content provided on, third party web sites. The User is requested to peruse the policies posted by other web sites regarding privacy and other topics before use. BlissQuants is not responsible for third party content accessible through the Site, including opinions, advice, statements and advertisements, and User shall bear all risks associated with the use of such content. BlissQuants is not responsible for any loss or damage of any sort which User may incur from dealing with any third party.
            </p>
          
          <p>
          In general, you can visit BlissQuants’s websites without telling us who you are and without revealing any information about yourself. There are times, however, when BlissQuants may need information from you. BlissQuants does not rent, sell, or share personal information about you with other people or non-affiliated companies.
            </p>
            
            <p>
            User may choose to give BlissQuants personal information, such as your name and address or e-mail id that may be needed, for example, to correspond with you, or to provide you with a subscription. You may send or upload your personal profile, CV, with all your personal, academic and professional background however you agree that you shall not upload or post any obscene, defamatory annoying material on the website. If you tell us that you do not want us to use this information as a basis for further contact with you, BlissQuants will respect your decision. BlissQuants intends to protect the quality and integrity of your personally identifiable information. BlissQuants will make a sincere effort to respond in a timely manner to your requests to correct inaccuracies in your personal information. To correct inaccuracies in your personal information please return the message containing the inaccuracies to BlissQuants with details of the correction requested.
            </p>

            <p>
            BlissQuants sometimes collects anonymous information from visits to the Site to help us provide better customer service. BlissQuants or its affiliates or vendors may use this data to analyze trends and statistics and to help us provide better customer service. BlissQuants maintains the highest levels of confidentiality for this information, our affiliates and vendors follow the same high levels of confidentiality. This anonymous information is used and analyzed only at an aggregate level to help us understand trends and patterns. None of this information is reviewed at an individual level. If you do not want your details to be used in this manner, you can either disable your cookies or opt-out at the download or request page.
            </p>

            <p>
            Refund Policy  
            </p>

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

export default PrivacyPolicyAndRefundPolicy;