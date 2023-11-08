import React from "react";
import "./LoginPage.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Photo from "./../../Assets/person-with-a-book.png";
import Login from "../../Components/Login/Login";

const LoginPage = () => {
  return (
    <div className="LoginPageWrapper">
      <Navbar />
      <div className="LoginPageMainSectionWrapper">
        <Login />
        <div className="LoginPageImageWrapper">
          <img src={Photo} alt="books" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
