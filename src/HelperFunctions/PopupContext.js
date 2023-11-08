import { createContext, useContext, useState } from "react";

const PopupContext = createContext();

export const usePopup = () => {
  return useContext(PopupContext);
};

export const PopupProvider = ({ children }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [bookDetailsPopup, setBookDetailsPopup] = useState(null)
  const [NYTbookDetails, setNYTBookDetails] = useState(null)

  const openPopup = (googleBook, nytBook) => {
    setIsPopupOpen(true); 
    setBookDetailsPopup(googleBook)
    setNYTBookDetails(nytBook)
    console.log(googleBook)
    console.log(nytBook)
  };

  const closePopup = () => {
    setIsPopupOpen(false);  
  };

  return (
    <PopupContext.Provider value={{ isPopupOpen, openPopup, closePopup, bookDetailsPopup, setBookDetailsPopup, NYTbookDetails }}>
      {children}
    </PopupContext.Provider>
  );
};
