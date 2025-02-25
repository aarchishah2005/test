import React from 'react';
import './Disclaimer.css';

const TermsOfService = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="disclaimer-overlay">
      <div className="disclaimer-modal">
        <div className="disclaimer-header">
          <h3>Terms of Service</h3>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        <div className="disclaimer-content">
        <ol> 
            <li>The Site is owned, managed and operated by BlissQuants.</li>
            
            <li>You must be 18 years of age or older to visit or use the Site in any manner. In the event that you are below 18 yrs of age, you are visiting the Site at your own risk and you alone shall be liable for your actions. By visiting this site or accepting these Terms of Use, you represent and warrant to the Company that you are 18 years of age or older, and that you have the right, authority and capacity to use the Site and agree to and abide by these Terms of Use. You also represent and warrant to the Company that you will use the Site in a manner consistent with any and all applicable laws and regulations.</li>
            
            <li>By using the Site, you agree to follow and be bound by all terms and conditions concerning your use of the Site. Certain areas of the Site may have different terms of use posted. If there is a conflict between the Terms of Use and terms of use posted for a specific area of the Site, the latter shall have precedence with respect to your use of that area of the Site.</li>
            
            <li>Our website may use cookies. By using our website and agreeing to these terms of use, you consent to our use of cookies in accordance with the terms of our privacy policy.</li>
            
            <li>BlissQuants may terminate User's access to the Site or any part thereof at any time and for any reason without any notice. The provisions regarding disclaimer of warranty, accuracy of information, software, database other system or functionality of website and indemnification shall survive such termination. BlissQuants may monitor User's access to the Site.</li>
            
            <li>BlissQuants may change or discontinue any aspect of the Site at any time, including, its content or features. BlissQuants reserves the right to change the Terms of Use applicable to use of the Site. Such changes shall be effective immediately upon notice, which shall be placed on the Site.</li>
            
            <li>All contents on the Site are the exclusive property of BlissQuants except the third party content. The software, text, images, graphics, video and audio used on the Site belong to or are licensed to BlissQuants or its subsidiaries and affiliates. No material from the Site may be copied, modified, reproduced, republished, uploaded, transmitted, posted or distributed in any form without prior written permission from BlissQuants. All rights not expressly granted herein are reserved. Unauthorized use of the materials appearing on the Site may violate copyright, trademark and other applicable laws, and could result in criminal or civil penalties. You are granted a non-exclusive, non-transferable, limited right to access the Site and avail the services provided by BlissQuants on the Site.</li>
            
            <li>BlissQuants does not make any warranties, express or implied, with respect to any service, information, data, software, system, functionality, statements or products made available on the Site. The information contained in the Site has been obtained from sources believed to be reliable. The Site, and all content, materials, information, software and services provided on the Site, are provided on an "as is" and "as available" basis.</li>
            
            <li>BlissQuants does not warrant that the Site will operate error-free or that the Site and its servers are free of computer viruses or other harmful mechanisms. If your use of the Site or content therein results in the need for servicing or replacing equipment or data, BlissQuants is not responsible for any such costs. Site and content are provided "as is" and "as available" without any warranties of any kind. BlissQuants to the fullest extent permitted by law, disclaims all warranties, whether express or implied, including the fitness for particular purpose and non-infringement. BlissQuants makes no warranties about the accuracy, reliability, completeness, or timeliness of the content, services, software, text, graphics, and links.</li>
          </ol>
          <div className="disclaimer-footer">
            <button className="close-btn" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;