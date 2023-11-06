import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="FooterWrapper">
      <div className="FooterNewsletterWrapper">
        <div className="FooterNewsletterText"></div>
        <input className="FooerNewsletterInput" placeholder="Email" />
        <button className="FooterNewsletterButton">Submit</button>
      </div>
      <div className="FooterContactInfoWrapper">
        <p>123 Main Streer, City</p>
        <p>+123 45678 910</p>
        <p>info@bookify.com</p>
      </div>
      <p>Hello</p>
    </div>
  );
};

export default Footer;
