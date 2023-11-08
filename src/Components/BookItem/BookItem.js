import React, { useEffect, useState } from "react";
import "./BookItem.css";
import { usePopup } from "../../HelperFunctions/PopupContext";


const BookItem = ({ book, index, openAboutBook }) => {
  const [bookCover, setBookCover] = useState("");
  const { openPopup } = usePopup();
  const [localBookInfo, setLocalBookInfo] = useState()

  useEffect(() => {
    if (book) {
      fetchBookCover();
    }
  }, []);

  const fetchBookCover = () => {
    if (book) {
      const ISBN = book?.book_details[0].primary_isbn10;
      const apiKey = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY   
      fetch(
        "https://www.googleapis.com/books/v1/volumes?q=isbn:" +
          ISBN +
          "&key=" +
          apiKey,
        { method: "get" }
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data && data.items && data.items.length > 0) {
            const bookCoverURL = data?.items[0].volumeInfo.imageLinks.thumbnail;
            setBookCover(bookCoverURL);
            setLocalBookInfo(data)
          }
        })
        .catch((error) => {
          console.error("Error fetching book cover:", error);
        });
    }
  };

  const openBookDetails = () => {
    openPopup(localBookInfo, book)
  };

  return (
    <div className="BookWrapper" onClick={openBookDetails}>
      <div className="BookImageWrapper">
        {" "}
        {bookCover ? (
          <img src={bookCover} alt="book-cover" className="BookImage" />
        ) : (
          <img
            src=" https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-loading-icon-vector-transparent-png-image_5687537.png"
            alt="book-cover-loading"
            className="BookImageLoading"
          />
        )}
      </div>

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
