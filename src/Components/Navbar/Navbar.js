import React from 'react'
import "./Navbar.css"
import Logo from "../../Assets/bookify-logo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='NavbarWrapper'>
        <div className='NavbarLogoWrapper'><img src={Logo} alt="Bookify-Logo" className='NavbarLogo'/></div>
        <div className='NavbarLinksWrapper'>
            <Link to="/" className='NavbarLink'>Home</Link>
            <Link to="/books" className='NavbarLink'>Books</Link>
            <Link to="/login" className='NavbarLink'>Login</Link>
        </div>
    </div>
  )
}

export default Navbar