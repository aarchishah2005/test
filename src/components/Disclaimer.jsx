import React from 'react';
import './Disclaimer.css';

const Disclaimer = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="disclaimer-overlay">
      <div className="disclaimer-modal">
        <div className="disclaimer-header">
          <h3>Disclaimer</h3>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        <div className="disclaimer-content">
          <p>
            The information and material contained in these pages and the terms, conditions, and descriptions that appear are subject to change without prior notice. Investments in equity shares, debentures etc. are not obligations of or guaranteed by the BlissQuants, and are subject to investment risks.
          </p>
          
          <p>
            The information contained in this website, including text, graphics, links or other items are provided on an 'as is', 'as available' basis. BlissQuants does not warrant the accuracy, adequacy or completeness of this information and material and expressly disclaims liability for errors or omissions in this information and material. No warranty of any kind, implied, express or statutory, including but not limited to the warranties of non-infringement of third party rights, title, merchantability, fitness for a particular purpose and freedom from computer virus, is given in conjunction with the information and materials.
          </p>
          
          <p>
            In no event will BlissQuants be liable for any damages, including without limitation direct or indirect, special, incidental, or consequential damages, losses or expenses arising in connection with this website or use thereof or inability to use by any party, or in connection with any failure of performance, error, omission, interruption, defect, delay in operation or transmission, computer virus or line or system failure, even if BlissQuants, or representatives thereof, are advised of the possibility of such damages, losses or expenses. Hyperlinks from and to other websites are at your own risk; the content, accuracy, opinion expressed, and other links provided by these resources are not investigated, verified, monitored, or endorsed by BlissQuants. BlissQuants is neither a broker nor a research analyst and does not provide any trading information. Also, company do not provide any trading tips in any real trading.
          </p>
          
          <div className="disclaimer-footer">
            <button className="close-btn" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;