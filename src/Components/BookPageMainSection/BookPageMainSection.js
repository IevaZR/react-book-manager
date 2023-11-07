import React, { useEffect, useState } from "react";
import "./BookPageMainSection.css";
import BookItem from "../BookItem/BookItem";
import AboutBookPopup from "../AboutBookPopup/AboutBookPopup";

const BookPageMainSection = () => {
  const [nytBookData, setNytBookData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = () => {
    const apiKey = "unMaYVGPSAahMXvGuR9WAHfIVGkohBnV";
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
        console.log(json.results);
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
            nytBookData?.map((book) => (
              <BookItem key={book.book_details[0].primary_isbn10} book={book} />
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
      {/* <AboutBookPopup/> */}
    </div>
  );
};

export default BookPageMainSection;

//TODO Hide my API key (var nytimesKey = config.NYT_KEY;  -> is this useful?)
//TODO Make book carousel
//TODO Add 'jump to non-fiction books' button
//TODO Add back to top button