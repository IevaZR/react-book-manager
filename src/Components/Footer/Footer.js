import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="FooterWrapper">
      <div className="FooterNewsletterWrapper">
        <h6>Subsribe to our newsletter</h6>
        <input placeholder="Email" />
        <p>Thank you for subscribing!</p>
        <button type="button">Submit</button>
      </div>
      <div className="FooterContactInfoWrapper">
        <h6>Contacts</h6>
        <p>123 Main Streer, City</p>
        <p>+123 45678 910</p>
        <p>info@bookify.com</p>
      </div>
    </div>
  );
};

export default Footer;
