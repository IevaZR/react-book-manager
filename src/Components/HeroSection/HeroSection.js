import React from "react";
import "./HeroSection.css";
import BookReadersCollage from "../../Assets/book-readers-collage.jpg"

const HeroSection = () => {
  return (
    <div className="HeroSectionWrapper">
      <h1 className="HeroSectionHeading">Dicover the Best Books</h1>
      <p className="HeroSectionText">
        Welcome to Bookify, your ultimate destination to explore and find the
        top fiction and non-fiction books available.{" "}
      </p>
      <div className="HeroSectionButtonsWrapper">
        <button className="HeroSectionButton WhiteBtn">Login</button>
        <button className="HeroSectionButton BlackBtn">Join Now</button>
      </div>
      <div className="HeroSectionImageWrapper">
        {/* <img src={BookReadersCollage} alt="Book-readers"/> */}
      </div>
    </div>
  );
};

export default HeroSection;
