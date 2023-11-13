import React from "react";
import "./UserBookItem.css";

const UserBookItem = () => {
  return (
    <div className="UserBookItemWrapper">
      <div className="UserBookImageWrapper">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoGC9MuJKNcUQVn1DB9w57JWZkTrjhLbKx-Q&usqp=CAU"
          alt="book-cover"
          className="UserBookImage"
        />
      </div>
      <h5>Book Name</h5>
      <p>by author</p>
      <div className="UserBookItemButtonsWrapper">
        <button className="UserBookItemRemoveButton">Remove</button>
        <button className="UserBookItemMarkAsReadButton">Mark as Read</button>
      </div>
    </div>
  );
};

export default UserBookItem;
