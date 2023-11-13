import React from "react";
import "./UserProfileInfo.css";
import EditIcon from "./../../../Assets/edit-icon.png";

const UserProfileInfo = () => {
  return (
    <div className="UserProfileInfoWrapper">
      <div>
        <div className="UserProfileInfoDetailWrapper">
          <p className="UserProfileInfoHeading">Name:</p>
          <p className="UserProfileInfoValue">User Name</p>
          <img src={EditIcon} alt="edit-icon" />
        </div>
        <div className="UserProfileInfoDetailWrapper">
          <p className="UserProfileInfoHeading">Surname:</p>
          <p className="UserProfileInfoValue">User Surname</p>
          <img src={EditIcon} alt="edit-icon" />
        </div>
        <div className="UserProfileInfoDetailWrapper">
          <p className="UserProfileInfoHeading">Email:</p>
          <p className="UserProfileInfoValue">user@gmail.com</p>
          <img src={EditIcon} alt="edit-icon" />
        </div>
        <div className="UserProfileInfoDetailWrapper">
          <p className="UserProfileInfoHeading">Password:</p>
          <p className="UserProfileInfoValue">***</p>
          <img src={EditIcon} alt="edit-icon" />
        </div>
      </div>
      <button type="button" className="UserProfileInfoFormBtn">
        Save and Update
      </button>
      <button type="button" className="UserProfileInfoFormDeleteBtn">
        Delete Profile
      </button>
    </div>
  );
};

export default UserProfileInfo;
