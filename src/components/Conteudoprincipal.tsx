import React from 'react'

import imgLogoLetraSpiderMan from "../img/Nome.png"
import imgDivConteudoEscrito from "../../src/img/logoAranha.png"
import homemAranha from "../../src/img/homemAranha.png"

type Props = {}

const Conteudoprincipal = (props: Props) => {
  return (
    <div className="conteudoPrincipal">

    <div className="conteudoEscrito">

        <h1 className='tituloHomemAranhConteudoDaEsquerda'><img src={imgLogoLetraSpiderMan} alt="" /></h1>

        <img src={imgDivConteudoEscrito} alt="" className='imgDeFundo'/>

        <p className="descricaoJogo">
          Miles Morales is Marvel's newest New York Spider-Man. After his father's untimely death, Miles was introduced
          to Peter Parker, who quickly became his friend and mentor. When Miles was bitten by an Oscorp genetically
          engineered spider, he developed unique powers and, after months of insistence, Peter agreed to train him.</p>

    </div>

    <div className="imgHomemArnaha">
    <img src={homemAranha} alt="" className='imgHomemAranha' />
    </div>

    </div>
  )
}

export default Conteudoprincipal