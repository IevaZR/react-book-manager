import React from "react";
import "./UserReadingList.css";
import UserBookItem from "./UserBookItem/UserBookItem";


const UserReadingList = () => {
  return (
    <div className="UserReadingListWrapper">
      <h2 className="UserReadingListHeading">Books That I Want To Read</h2>
      <div className="UserReadingList">
        <UserBookItem/>
        <UserBookItem />
        <UserBookItem />
        <UserBookItem />
        <UserBookItem />
        <UserBookItem />
        <UserBookItem />
        <UserBookItem />
      </div>
    </div>
  );
};

export default UserReadingList;
