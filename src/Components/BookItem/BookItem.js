import React, { useEffect, useState } from "react";
import "./BookItem.css";
import AboutBookPopup from "../AboutBookPopup/AboutBookPopup";

const BookItem = ({ book }) => {
  const [bookCover, setBookCover] = useState[""];

  useEffect(() => {
    if (book) {
      fetchBookCover();
    }
  }, [book]);

  const fetchBookCover = () => {
    const ISBN = book?.book_details[0].primary_isbn10;
    const APIkey = "AIzaSyCKQIUU_RL-8RuaKBa0jF5vrEMVBhDTBrE";
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=isbn:" +
        ISBN +
        "&key=" +
        APIkey,
      { method: "get" }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.items[0].volumeInfo.imageLinks.thumbnail);
        const bookCoverURL = data.items[0].volumeInfo.imageLinks.thumbnail;
        setBookCover(bookCoverURL);
      });
  };

  return (
    <div className="BookWrapper">
      <img src={bookCover} alt="book-cover" />
      <h5>{book?.book_details[0].title}</h5>
      <p>by {book?.book_details[0].author}</p>
      <p>Year</p>
      <p>ISBN: {book?.book_details[0].primary_isbn10}</p>
      <button onClick={fetchBookCover}>Click</button>
    </div>
  );
};

export default BookItem;
