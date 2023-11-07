import React from "react";
import "./AboutBookPopup.css";

const AboutBookPopup = ({ book }) => {
  return (
    <div className="AboutBookPopupWrapper">
      <div className="AboutBookPopup">
        <div className="AboutBookPopupImageWrapper">
          <img
            src="https://m.media-amazon.com/images/I/41gr3r3FSWL.jpg"
            alt="book-cover"
            className="AboutBookPopupImage"
          />
        </div>
        <div className="AboutBookPopupInfoWrapper">
          <h3>Book title</h3>
          <p>Book author</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            sit amet ipsum tellus. Suspendisse eleifend turpis ac turpis
            gravida, eu consequat ante dapibus. Etiam blandit quam non nisi
            pretium eleifend. Nullam cursus ac ante quis ornare. Nulla facilisi.
            Vivamus semper nulla eget ligula pretium ultricies quis non orci.
            Maecenas maximus neque in tortor sodales fermentum. Mauris
            ullamcorper, est posuere faucibus dapibus, orci libero vehicula sem,
            ac rutrum sem diam ut enim. Nunc egestas vestibulum nisi sed
            posuere.
          </p>
          <div className="AboutBookPopupButtonWrapper">
            <button className="AboutBookPopupButton WhiteBtn">Buy on Amazon</button>
            <button className="AboutBookPopupButton BlackBtn">Add to Favourites</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBookPopup;
