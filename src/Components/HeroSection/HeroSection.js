import React from "react";
import "./HeroSection.css";
import BookReadersCollage from "../../Assets/book-readers-collage.jpg"
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="HeroSectionWrapper">
      <h1 className="HeroSectionHeading">Dicover the Best Books</h1>
      <p className="HeroSectionText">
        Welcome to Bookify, your ultimate destination to explore and find the
        top fiction and non-fiction books available.{" "}
      </p>
      <div className="HeroSectionButtonsWrapper">
        <button className="HeroSectionButton WhiteBtn"><Link to="/login">Login</Link></button>
        <button className="HeroSectionButton BlackBtn"><Link to="/register">Join Now</Link></button>
      </div>
      <div className="HeroSectionImageWrapper">
        {/* <img src={BookReadersCollage} alt="Book-readers"/> */}
      </div>
    </div>
  );
};

export default HeroSection;
