import React from 'react'
import "./UserFinishedBooks.css"
import UserFinishedBookItem from '../UserFinishedBookItem/UserFinishedBookItem'

const UserFinishedBooks = () => {
  return (
    <div className='UserFinishedBooksWrapper'>
      <UserFinishedBookItem/>
    </div>
  )
}

export default UserFinishedBooks