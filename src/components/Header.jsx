import React from 'react'

import logoSpiderMan from "../img/logoSiperman.png"
import "../Css/header.css"

const Header = () => {
  return (
    <div className='header'>

      <img src={logoSpiderMan} alt="" />

        <ul className="ulHeader">
          <li className='listaHeader'><a href="#">Home</a></li>
          <li className='listaHeader'><a href="#">Wallpappers</a></li>
          <li className='listaHeader'><a href="#">Tajes</a></li>
          <li className='listaHeader'><a href="#">Forum</a></li>
          <li className='listaHeader'><a href="#">Gameplays</a></li>
        </ul>

    </div>
  )
}

export default Header