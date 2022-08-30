import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <div className='header-container'>

      <div className='nav-links-div'>
        <Link to='/' className='brand' style={{ textDecoration: 'none' }} >Tribute</Link>
        <Link to='/store' className='nav-links' style={{ textDecoration: 'none' }} >Store</Link>
        <Link to='/used' className='nav-links' style={{ textDecoration: 'none' }} >Used</Link>
        <Link to='/login' className='nav-links login' style={{ textDecoration: 'none' }} >Login</Link>
        <Link to='/signup' className='nav-links signup' style={{ textDecoration: 'none' }} >Signup</Link>
      </div>

   </div>
  )
}

export default Header