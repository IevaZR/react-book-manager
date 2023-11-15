import React, { useEffect } from "react";
import "./UserFinishedBooks.css";
import UserFinishedBookItem from "./UserFinishedBookItem/UserFinishedBookItem";
import { useSelector } from "react-redux";

const UserFinishedBooks = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

  return (
    <div className="UserFinishedBooksWrapper">
      <h2 className="UserFinishedListHeading">
        Books That I Have Finished Reading
      </h2>
      <div className="UserFinishedList">
        {currentUser &&
          currentUser.finishedBooks &&
          currentUser.finishedBooks.map((book) => (
            <UserFinishedBookItem key={book.title} book={book} />
          ))}
        {currentUser && currentUser.finishedBooks.length === 0 && <p>No books in My Finished Books List</p>}
      </div>
    </div>
  );
};

export default UserFinishedBooks;
