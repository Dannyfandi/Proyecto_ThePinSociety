import React, {useState} from 'react'
import {Link} from 'react-router-dom'
export default function Header() {
  return (
    <div className="navbar is-primary"> Navbar
      <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-logo">
                TRVL <i className="fab fa-typo3"/>
            </Link>
            <div className = 'icono'>
                
            </div>
        </div>
      </nav>
    </div>
  )
}
