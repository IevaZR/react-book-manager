import React from "react";
import "./UserBookItem.css";

const UserBookItem = ({ book }) => {
  return (
    <div className="UserBookItemWrapper">
      <div>
        <div className="UserBookImageWrapper">
          <img
            src={book.bookCover}
            alt="book-cover"
            className="UserBookImage"
          />
        </div>
        <h5>{book.title}</h5>
        <p>by {book.author}</p>
      </div>

      <div className="UserBookItemButtonsWrapper">
        <button className="UserBookItemRemoveButton">Remove</button>
        <button className="UserBookItemMarkAsReadButton">Mark as Read</button>
      </div>
    </div>
  );
};

export default UserBookItem;
