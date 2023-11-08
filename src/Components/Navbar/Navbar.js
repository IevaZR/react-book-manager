import React from 'react'
import "./Navbar.css"
import Logo from "../../Assets/bookify-logo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='NavbarWrapper'>
        <div className='NavbarLogoWrapper'><Link to="/"><img src={Logo} alt="Bookify-Logo" className='NavbarLogo'/></Link></div>
        <div className='NavbarLinksWrapper'>
            <Link to="/" className='NavbarLink'>Home</Link>
            <Link to="/books" className='NavbarLink'>Book TOP</Link>
            <Link to="/login" className='NavbarLink'>Login</Link>
            <Link to="/user" className='NavbarLink'>My Books</Link>
        </div>
    </div>
  )
}

export default Navbar