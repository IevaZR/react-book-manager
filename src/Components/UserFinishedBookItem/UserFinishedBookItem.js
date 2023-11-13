import React from "react";
import "./UserFinishedBookItem.css";

const UserFinishedBookItem = () => {
  return (
    <div className="UserFinishedBookItemWrapper">
      <div className="UserFinishedBookImageWrapper">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoGC9MuJKNcUQVn1DB9w57JWZkTrjhLbKx-Q&usqp=CAU"
          alt="book-cover"
          className="UserBookImage"
        />
      </div>
      <h5>Book Name</h5>
      <p>by author</p>
      <div className="UserFinishedBookItemButtonsWrapper">
        <button className="UserFinishedBookItemRemoveButton">Delete</button>
        <button className="UserFinishedBookItemMarkAsReadButton">
          Move to Unfinished
        </button>
      </div>
      <div>
        <p>My Rating</p>
        <p>Stars</p>
      </div>
    </div>
  );
};

export default UserFinishedBookItem;
