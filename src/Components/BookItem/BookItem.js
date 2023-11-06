import React, { useEffect } from "react";
import "./BookItem.css";

const BookItem = ({ book }) => {
  useEffect(() => {
    console.log(book);
  });
  return (
    <div className="BookWrapper">
      <img
        src="https://m.media-amazon.com/images/I/41gr3r3FSWL.jpg"
        alt="book-cover"
      />
      <h5>{book?.book_details[0].title}</h5>
      <p>Author Author</p>
      <p>Year</p>
    </div>
  );
};

export default BookItem;
