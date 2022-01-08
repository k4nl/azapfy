import React from 'react';
import logo from '../images/logo.png'

const Header = () => {
  return (
    <header className="d-flex justify-content-start ms-4 align-items-center">
      <img src={logo} alt="azapfy-logo"></img>
    </header>
  )
}

export default Header;