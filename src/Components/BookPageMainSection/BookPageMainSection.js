import React from "react";
import "./BookPageMainSection.css";
import BookItem from "../BookItem/BookItem";

const BookPageMainSection = () => {
  return (
    <div className="BookPageMainSectionWrapper">
      <div className="BookPageTopBooksSectionWrapper">
        <h1>Top Fiction Books</h1>
        <div className="BookPageTopBooksWrapper">
          <BookItem />
          <BookItem />
          <BookItem />
        </div>
      </div>
      <div className="BookPageTopBooksSectionWrapper">
        <h1>Top Non-Fiction Books</h1>
        <div className="BookPageTopBooksWrapper">
          <BookItem />
          <BookItem />
          <BookItem />
        </div>
      </div>
    </div>
  );
};

export default BookPageMainSection;
