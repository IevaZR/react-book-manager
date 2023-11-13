import React, { useEffect } from "react";
import "./AboutBookPopup.css";
import { usePopup } from "../../../HelperFunctions/PopupContext";

const AboutBookPopup = ({ book }) => {
  const { isPopupOpen, closePopup, bookDetailsPopup, NYTbookDetails } =
    usePopup();

  const handlePopupClose = (event) => {
    const popupElement = document.querySelector(".AboutBookPopup");
    if (popupElement && !popupElement.contains(event.target)) {
      closePopup();
    }
  };

  useEffect(() => {
    if (isPopupOpen) {
      document
        .querySelector(".AboutBookPopupWrapper")
        .addEventListener("click", handlePopupClose);
    }
  }, [isPopupOpen]);

  return (
    <div className="AboutBookPopupWrapper">
      <div className="AboutBookPopup">
        <div className="AboutBookPopupImageWrapper">
          <img
            src={bookDetailsPopup.items[0].volumeInfo.imageLinks.thumbnail}
            alt="book-cover"
            className="AboutBookPopupImage"
          />
        </div>
        <div className="AboutBookPopupInfoWrapper">
          <h3>{bookDetailsPopup.items[0].volumeInfo.title}</h3>
          <p className="AboutBookPopupAuthor">
            by {bookDetailsPopup.items[0].volumeInfo.authors[0]}
          </p>
          <p className="AboutBookPopupDescription">
            {bookDetailsPopup.items[0].volumeInfo.description}
          </p>
          <a
            href={bookDetailsPopup.items[0].volumeInfo.canonicalVolumeLink}
            target="_blank"
            rel="noreferrer"
            className="AboutBookPopupLinkToGoogleBooks"
          >
            Read more on Google books
          </a>
          <div className="AboutBookPopupButtonWrapper">
            <button className="AboutBookPopupButton WhiteBtn">
              <a
                href={NYTbookDetails.amazon_product_url}
                target="_blank"
                rel="noreferrer"
              >
                Buy on Amazon
              </a>
            </button>
            <button className="AboutBookPopupButton BlackBtn">
              Add to Favourites
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBookPopup;
