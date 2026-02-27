import React from 'react'

import imgLogoLetraSpiderMan from "../img/Nome.png"
import imgDivConteudoEscrito from "../../src/img/logoAranha.png"

type Props = {}

const Conteudoprincipal = (props: Props) => {
  return (
    <div className="conteudoPrincipal">

    <div className="conteudoEscrito">

        <h1 className='tituloHomemAranhConteudoDaEsquerda'><img src={imgLogoLetraSpiderMan} alt="" /></h1>

        <img src={imgDivConteudoEscrito} alt="" className='imgDeFundo'/>

    </div>

    <div className="imgHomemArnaha">
    sadfs
    </div>

    </div>
  )
}

export default Conteudoprincipal