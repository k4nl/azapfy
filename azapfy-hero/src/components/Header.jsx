import React from 'react';
import logo from '../images/logo.png'

const Header = () => {
  return (
    <header>
      <div>
        Azapfy Heros Battle 2021 - 2022
      </div>
      <div>
        <img src={logo} alt="azapfy-logo"></img>
      </div>
    </header>
  )
}

export default Header;