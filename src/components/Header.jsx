import React from 'react'

import logoSpiderMan from "../img/logoSiperman.png"
import "../Css/header.css"

const Header = () => {
  return (
    <div className='header'>

      <img src={logoSpiderMan} alt="" />

        <ul className="ulHeader">
          <l classNamelistaHeaderLinksi><a href="#">Home</a></l>
          <l classNamelistaHeaderLinksi><a href="#">Wallpappers</a></l>
          <l classNamelistaHeaderLinksi><a href="#">Tajes</a></l>
          <l classNamelistaHeaderLinksi><a href="#">Forum</a></l>
          <l classNamelistaHeaderLinksi><a href="#">Gameplays</a></l>
        </ul>

    </div>
  )
}

export default Header