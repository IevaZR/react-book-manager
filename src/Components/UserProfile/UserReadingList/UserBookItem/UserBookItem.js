import React, { useEffect } from "react";
import "./UserBookItem.css";
import { useDispatch, useSelector } from "react-redux";

const UserBookItem = ({ book }) => {

  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(book.finished)
  })

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
    updatedUserBooksList(false);

    updateUserInDB(updatedUser);
  }
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
        <button className="UserBookItemRemoveButton" onClick={removeFromMyBooks}>Remove</button>
        <button className="UserBookItemMarkAsReadButton">Mark as Read</button>
      </div>
    </div>
  );
};

export default UserBookItem;
