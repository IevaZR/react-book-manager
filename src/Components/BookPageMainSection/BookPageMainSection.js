import React, { useEffect, useState } from "react";
import "./BookPageMainSection.css";
import BookItem from "../BookPageMainSection/BookItem/BookItem";

const BookPageMainSection = () => {
  const [nytFictionBookData, setNytFictionBookData] = useState([]);
  const [nytNonFictionBookData, setNytNonFictionBookData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchFictionBooks();
    fetchNonFictionBooks();
    console.log(nytFictionBookData);
  }, []);

  const fetchFictionBooks = () => {
    const apiKey = process.env.REACT_APP_NYT_BOOKS_API_KEY;
    fetch(
      "https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=" +
        apiKey,
      { method: "get" }
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setNytFictionBookData(json.results);
        setIsLoading(false);
      });
  };

  const fetchNonFictionBooks = () => {
    const apiKey = process.env.REACT_APP_NYT_BOOKS_API_KEY;
    fetch(
      "https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-nonfiction&api-key=" +
        apiKey,
      { method: "get" }
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setNytNonFictionBookData(json.results);
        setIsLoading(false);
      });
  };

  return (
    <div className="BookPageMainSectionWrapper">
      <div className="BookPageStickyBackground"></div>
      <div className="BookShelfWrapper">
        <div className="BookShelfTop">
          <div className="BookShelfHeadingWrapper">
            <h1 className="BookShelfHeading">Top Fiction Books</h1>
            <p>
              Delve into extraordinary narratives and imaginative realms with
              our top-rated fiction books that promise thrilling adventures and
              compelling storytelling.
            </p>
          </div>
          <div className="FirstBookWrapper"></div>
        </div>
        <div className="BookShelf"></div>
        <div className="BookShelfFront"></div>

        <div className="BookShelfBottom">
          <div className="BookShelfShadow">
            <div className="BookShelfShadowObject"></div>
          </div>
        </div>
      </div>

      <div className="BookPageTopBooksSectionWrapper">
        <h1>Top Fiction Books</h1>
        <div className="BookPageTopBooksWrapper">
          {isLoading ? (
            <p>Loading ...</p>
          ) : (
            nytFictionBookData?.map((book, index) => (
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
        <h1 id="BookPageNonFiction">Top Non-Fiction Books</h1>
        <div className="BookPageTopBooksWrapper">
          {isLoading ? (
            <p>Loading ...</p>
          ) : (
            nytNonFictionBookData?.map((book, index) => (
              <BookItem
                key={book.book_details[0].primary_isbn10}
                book={book}
                index={index}
              />
            ))
          )}
        </div>
      </div>
      {/* {isPopupOpen && <AboutBookPopup />} */}
    </div>
  );
};

export default BookPageMainSection;

//TODO Make book carousel
//TODO Add 'jump to non-fiction books' button
//TODO Add back to top button
//TODO Kā rīkties ar to, ka tiek sasniegts API calls limits?
//TODO Try plain Redux?
//TODO Login with Google or Facebook
