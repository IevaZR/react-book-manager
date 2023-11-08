import { createContext, useContext, useState } from "react";

const PopupContext = createContext();

export const usePopup = () => {
  return useContext(PopupContext);
};

export const PopupProvider = ({ children }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [bookDetailsPopup, setBookDetailsPopup] = useState(null)

  const openPopup = (book) => {
    setIsPopupOpen(true); 
    setBookDetailsPopup(book)
    console.log(book)
  };

  const closePopup = () => {
    setIsPopupOpen(false);  
  };

  return (
    <PopupContext.Provider value={{ isPopupOpen, openPopup, closePopup, bookDetailsPopup, setBookDetailsPopup }}>
      {children}
    </PopupContext.Provider>
  );
};
