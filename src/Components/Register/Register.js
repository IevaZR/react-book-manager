import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  const [registerThankYouMsgVisible, setRegisterThankYouMsgVisible] =
    useState(false);

  const registerUser = () => {
    setRegisterThankYouMsgVisible(true);
  };
  return (
    <div className="RegisterWrapper">
      <h3>Please fill the form below</h3>
      <form className="RegisterForm">
        <div className="RegisterNameWrapper">
          <div className="RegisterInputWrapper">
            <label>Name</label>
            <input type="text"></input>
          </div>
          <div className="RegisterInputWrapper">
            <label>Surname</label>
            <input type="text"></input>
          </div>
        </div>
        <div className="RegisterEmailWrapper">
          <div className="RegisterInputWrapper">
            <label>Email</label>
            <input type="text"></input>
          </div>
          <div className="RegisterInputWrapper">
            <label>Please confirm email</label>
            <input type="text"></input>
          </div>
        </div>
        <div className="RegisterPasswordWrapper">
          <div className="RegisterInputWrapper">
            <label>Password</label>
            <input type="password"></input>
          </div>
          <div className="RegisterInputWrapper">
            <label>Please confirm password</label>
            <input type="password"></input>
          </div>
        </div>
        <button
          type="button"
          className="RegisterFormBtn"
          onClick={registerUser}
        >
          Register
        </button>
        {registerThankYouMsgVisible && (
          <div className="RegisterThankYouMsg">
            <p >
              Thank you for registering! Please 
            </p>
            <Link to="/login">LOG IN HERE</Link>
          </div>
        )}
      </form>
    </div>
  );
};

export default Register;
