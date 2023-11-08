import React from 'react'
import "./UserPage.css"
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import UserProfile from '../../Components/UserProfile/UserProfile'

const UserPage = () => {
  return (
    <div className='UserPageWrapper'>
        <Navbar/>
        <div className='UserPageMainSectionWrapper'>
            <h1>Hello Username!</h1>
            <UserProfile/>
        </div>
        <Footer/>
    </div>
  )
}

export default UserPage