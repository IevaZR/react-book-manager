import React from "react";
import "./HomePage.css";
import Navbar from "../../Components/Navbar/Navbar";
import HeroSection from "../../Components/HeroSection/HeroSection";
import BooksCategorySection from "../../Components/BooksCategorySection/BooksCategorySection";
import Footer from "../../Components/Footer/Footer";
import { useMouseMove } from "../../CustomHooks/useMouseMove";

const HomePage = () => {
  // const isActive = useMouseMove()
  //custom react hook

  return (
    <div className="HomePageWrapper">
      <Navbar />
      <HeroSection />
      <BooksCategorySection />
      <Footer />
    </div>
  );
};

export default HomePage;
