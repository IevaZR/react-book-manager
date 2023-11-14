import React, { useEffect, useState } from "react";
import "./BookItem.css";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../..//Redux/userSlice";
import axios from "axios";
import AboutBookPopup from "./AboutBookPopup/AboutBookPopup";

const BookItem = ({ book, index, openAboutBook }) => {
  const [bookCover, setBookCover] = useState("");
  const [GoogleBookInfo, setGoogleBookInfo] = useState();
  const currentUser = useSelector((state) => state.user.currentUser);
  const [bookInUserReadinList, setbookInUserReadinList] = useState(false);
  const dispatch = useDispatch();
  const [isPopupOpen, setIsPopupOpen] = useState(false)
 

  useEffect(() => {
    if (book) {
      fetchGoogleBookData();
    }
    if (currentUser) {
      isBookInUserBooksList();
    }
    setBookCover("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoGC9MuJKNcUQVn1DB9w57JWZkTrjhLbKx-Q&usqp=CAU")
    console.log(book)
  }, []);

  const fetchGoogleBookData = () => {
    if (book) {
      const ISBN = book?.book_details[0].primary_isbn10;
      const apiKey = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;
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
            setGoogleBookInfo(data);
          }
        })
        .catch((error) => {
          console.error("Error fetching book cover:", error);
        });
    }
  };

  const openPopup = () => {
   setIsPopupOpen(true);
  };

  const closePopup = () => {
   setIsPopupOpen(false);
  };

  const isBookInUserBooksList = () => {
    let userBooks = currentUser.readingListBooks;
    let currentBookTitle = book.book_details[0].title;
    const bookInUserBooksList = userBooks.some((userBook) => {
      return userBook.title === currentBookTitle;
    });
    setbookInUserReadinList(bookInUserBooksList);
  };

  const addToMyBooks = () => {
    let currentBook = {
      title: book.book_details[0].title,
      author: book.book_details[0].author,
      bookCover: bookCover,
      rating: null,
    };
    let currentUserReadingList = currentUser.readingListBooks;
    let updatedCurrentUserReadingList =
      currentUserReadingList.concat(currentBook);
    let updatedUser = {
      ...currentUser,
      readingListBooks: updatedCurrentUserReadingList,
    };

    dispatch(setCurrentUser(updatedUser));
    setbookInUserReadinList(true);

    updateUserInDB(updatedUser);
  };

  const updateUserInDB = async (updatedUser) => {
    try {
      await axios.put(
        `http://localhost:3009/user/update-user/${updatedUser.email}`,
        updatedUser
      );
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromMyBooks = () => {
    let currentBook = {
      title: book.book_details[0].title,
      author: book.book_details[0].author,
      bookCover: bookCover,
      rating: null,
    };
    let updatedUserReadingList = [...currentUser.readingListBooks];

    let bookIndexInArray = updatedUserReadingList.findIndex(
      (book) => book.title === currentBook.title
    );

    updatedUserReadingList.splice(bookIndexInArray, 1);

    let updatedUser = {
      ...currentUser,
      readingListBooks: updatedUserReadingList,
    };

    dispatch(setCurrentUser(updatedUser));
    setbookInUserReadinList(false);

    updateUserInDB(updatedUser);
  };

  return (
    <div className="BookWrapper">
      <div className="BookImageWrapper" onClick={openPopup}>
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
      <div className="BookItemInfoWrapper">
        <h5 onClick={openPopup}>{book?.book_details[0].title}</h5>
        <p className="BookInfo">by {book?.book_details[0].author}</p>
        <p className="BookInfo">Weeks on TOP: {book?.weeks_on_list}</p>
      </div>
      {!bookInUserReadinList && (
        <button
          className="AddToMyBooksBtn"
          type="button"
          onClick={addToMyBooks}
        >
          Add to My Books
        </button>
      )}
      {bookInUserReadinList && (
        <button
          className="RemoveFromMyBooksBtn"
          type="button"
          onClick={removeFromMyBooks}
        >
          Remove from My Books
        </button>
      )}
      <div className="BookNumber">
        <p>{index + 1}</p>
      </div>
      {isPopupOpen && <AboutBookPopup book={book} bookCover={bookCover} googleBookInfo={GoogleBookInfo} closePopup={closePopup}/>}
    </div>
  );
};

export default BookItem;
