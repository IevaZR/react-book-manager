import React from 'react'
import "./BookPage.css"
import Navbar from '../../Components/Navbar/Navbar'
import BookPageMainSection from '../../Components/BookPageMainSection/BookPageMainSection'

const BookPage = () => {
  return (
    <div>
      <Navbar/>
      <BookPageMainSection/>
    </div>
  )
}

export default BookPage