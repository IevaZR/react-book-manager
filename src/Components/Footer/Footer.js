import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [showThankYouMsg, setShowThankYouMsg] = useState(false);

  const handleSubscribeBtnClick = () => {
    setShowThankYouMsg(true);
  };
  return (
    <div className="FooterWrapper">
      <div className="FooterNewsletterWrapper">
        <h6>Subsribe to our newsletter</h6>
        <input placeholder="Email" />
        {showThankYouMsg && <p>Thank you for subscribing!</p>}

        <button type="button" onClick={handleSubscribeBtnClick}>
          Submit
        </button>
      </div>
      <div className="FooterContactInfoWrapper">
        <h6>Contacts</h6>
        <p>123 Main Street, City</p>
        <p>+123 45678 910</p>
        <p>info@bookify.com</p>
      </div>
    </div>
  );
};

export default Footer;
