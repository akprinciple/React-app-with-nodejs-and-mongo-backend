import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <header className='nav bg-info justify-content-center'>
            <Link to='/' className='nav-link text-light'> Home</Link>
            <Link to='/about' className='nav-link text-light'>About</Link>
            <Link to='/contact' className='nav-link text-light'>Contact Us</Link>
            <Link to='quran' className='nav-link text-light'>Quran</Link>
            <Link to='/register' className='nav-link text-light'>Get Started</Link>
        </header>
    
    </div>
  )
}

export default Navbar