import React, { useEffect, useState } from "react";
import "./BookPageMainSection.css";
import BookItem from "../BookItem/BookItem";
import AboutBookPopup from "../AboutBookPopup/AboutBookPopup";
import { usePopup } from "./../../HelperFunctions/PopupContext";

const BookPageMainSection = () => {
  const [nytBookData, setNytBookData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { isPopupOpen, openPopup } = usePopup();

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = () => {
    const apiKey = process.env.REACT_APP_NYT_BOOKS_API_KEY  
    fetch(
      "https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=" +
        apiKey,
      { method: "get" }
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setNytBookData(json.results);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (nytBookData.length > 0)
      console.log(nytBookData[0].book_details[0].primary_isbn10);
  }, [nytBookData]);


  return (
    <div className="BookPageMainSectionWrapper">
      <div className="BookPageTopBooksSectionWrapper">
        <h1>Top Fiction Books</h1>
        <div className="BookPageTopBooksWrapper">
          {isLoading ? (
            <p>Loading ...</p>
          ) : (
            nytBookData?.map((book, index) => (
              <BookItem
                key={book.book_details[0].primary_isbn10}
                book={book}
                index={index}
              />
            ))
          )}
        </div>
      </div>
      <div className="BookPageTopBooksSectionWrapper">
        <h1>Top Non-Fiction Books</h1>
        <div className="BookPageTopBooksWrapper">
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
        </div>
      </div>
      {isPopupOpen && <AboutBookPopup />}
    </div>
  );
};

export default BookPageMainSection;


//TODO Make book carousel
//TODO Add 'jump to non-fiction books' button
//TODO Add back to top button
//TODO Kā rīkties ar to, ka tiek sasniegts API calls limits?
