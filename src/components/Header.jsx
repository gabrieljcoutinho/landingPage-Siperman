import React from 'react'

import logoSpiderMan from "../img/logoSiperman.png"
import "../Css/header.css"

const Header = () => {
  return (
    <div className='header'>

      <img src={logoSpiderMan} alt="" />

        <ul className="ulHEader">
          <li><a href="#">Home</a></li>
          <li><a href="#">Wallpappers</a></li>
          <li><a href="#">Tajes</a></li>
          <li><a href="#">Forum</a></li>
          <li><a href="#">Gameplays</a></li>
        </ul>

    </div>
  )
}

export default Header