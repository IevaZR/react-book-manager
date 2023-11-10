import React from "react";
import "./UserProfile.css";
import UserReadingList from "../UserReadingList/UserReadingList";
import UserFinishedBooks from "../UserFinishedBooks/UserFinishedBooks";
import UserProfileInfo from "../UserProfileInfo/UserProfileInfo";

const UserProfile = () => {
  return (
    <div className="UserProfileWrapper">
      <div className="UserProfileMenu">
        <button className="UserProfileMenuButton List ">My Reading List</button>
        <button className="UserProfileMenuButton Finished BtnActive">
          Finsihed reading
        </button>
        <button className="UserProfileMenuButton Profile">
          Update Prodile Info
        </button>
      </div>
      <div className="UserProfileMainSection">
        <UserReadingList/>
        <UserFinishedBooks/>
        <UserProfileInfo/>
      </div>
    </div>
  );
};

export default UserProfile;
