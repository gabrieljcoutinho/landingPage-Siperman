import React from 'react'

import logoSpiderMan from "../img/logoSiperman.png"
import "../Css/header.css"

const Header = () => {
  return (
    <div className='header'>

      <img src={logoSpiderMan} alt="" />

        <ul className="ulHeader">
          <li classNamelistaHeaderLinksi><a href="#">Home</a></li>
          <li classNamelistaHeaderLinksi><a href="#">Wallpappers</a></li>
          <li classNamelistaHeaderLinksi><a href="#">Tajes</a></li>
          <li classNamelistaHeaderLinksi><a href="#">Forum</a></li>
          <li classNamelistaHeaderLinksi><a href="#">Gameplays</a></li>
        </ul>

    </div>
  )
}

export default Header