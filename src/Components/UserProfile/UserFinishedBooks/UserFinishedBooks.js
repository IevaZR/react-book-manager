import React from 'react'
import "./UserFinishedBooks.css"
import UserFinishedBookItem from './UserFinishedBookItem/UserFinishedBookItem'

const UserFinishedBooks = () => {
  return (
    <div className='UserFinishedBooksWrapper'>
      <h2 className="UserFinishedListHeading">Books That I Have Finished Reading</h2>
      <UserFinishedBookItem/>
    </div>
  )
}

export default UserFinishedBooks