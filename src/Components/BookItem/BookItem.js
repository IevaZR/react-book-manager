import React, { useEffect, useState } from "react";
import "./BookItem.css";
import AboutBookPopup from "../AboutBookPopup/AboutBookPopup";

const BookItem = ({ book, index, openAboutBook }) => {
  const [bookCover, setBookCover] = useState("");

  useEffect(() => {
    if (book) {
      fetchBookCover();
    }
  }, []);

  const fetchBookCover = () => {
    if (book) {
      const ISBN = book?.book_details[0].primary_isbn10;
      const APIkey = "AIzaSyCs5n7vtJJsyIPeKe1iiZfcQYYrFo5jNW4";
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
          if (data && data.items && data.items.length > 0) {
            console.log(data?.items[0].volumeInfo.imageLinks.thumbnail);
            const bookCoverURL = data?.items[0].volumeInfo.imageLinks.thumbnail;
            setBookCover(bookCoverURL);
          }
        })
        .catch((error) => {
          console.error("Error fetching book cover:", error);
        });
    }
  };

  const openPopup = (book) => {
    openAboutBook(book);
  };

  return (
    <div className="BookWrapper" onClick={openPopup}>
      {bookCover ? (
        <img src={bookCover} alt="book-cover" />
      ) : (
        <img
          src=" https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-loading-icon-vector-transparent-png-image_5687537.png"
          alt="book-cover"
        />
      )}

      <h5>{book?.book_details[0].title}</h5>
      <p className="BookWrapperInfo">by {book?.book_details[0].author}</p>
      <p className="BookWrapperInfo">Year</p>
      <div className="BookNumber">
        <p>{index + 1}</p>
      </div>
    </div>
  );
};

export default BookItem;
