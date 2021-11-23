import React from 'react';
import logo from '../images/logo.png'

const Header = () => {
  return (
    <header className="d-flex justify-content-center">
      <div className="d-flex align-items-center">
        <img src={logo} alt="azapfy-logo"></img>
      </div>
    </header>
  )
}

export default Header;