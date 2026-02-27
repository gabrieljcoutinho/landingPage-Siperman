import React from 'react'

import logoSpiderMan from "../img/logoSiperman.png"
import "../Css/header.css"

const Header = () => {
  return (
    <div className='header'>

      <img src={logoSpiderMan} alt="" />

        <ul className="ulHeader">
          <li className='listaHeader'><a href="#" className='linkListaHeader'>Home</a></li>
          <li className='listaHeader'><a href="#" className='linkListaHeader'>Wallpappers</a></li>
          <li className='listaHeader'><a href="#" className='linkListaHeader'>Trajes</a></li>
          <li className='listaHeader'><a href="#" className='linkListaHeader'>Forum</a></li>
          <li className='listaHeader'><a href="#" className='linkListaHeader'>Gameplays</a></li>
        </ul>

    </div>
  )
}

export default Header