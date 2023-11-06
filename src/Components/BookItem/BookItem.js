import React from 'react'
import "./BookItem.css"

const BookItem = () => {
  return (
    <div className='BookWrapper'>
        <img src="https://m.media-amazon.com/images/I/41gr3r3FSWL.jpg" alt='book-cover'/>
        <h5>Book Cover Design Formula</h5>
        <p>Author Author</p>
        <p>Year</p>
    </div>
  )
}

export default BookItem