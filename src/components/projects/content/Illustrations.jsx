import React from 'react'
import { Container } from '../../../styles/styles'
import { Conteudo } from './styles'
import drawing1 from "../../../assets/imgs/drawing1.jpg"
import drawing2 from "../../../assets/imgs/drawing2.jpg"
import drawing3 from "../../../assets/imgs/drawing3.jpg"
import drawing4 from "../../../assets/imgs/drawing4.jpg"
import drawing5 from "../../../assets/imgs/drawing5.jpg"
import drawing6 from "../../../assets/imgs/drawing6.jpg"
import drawing7 from "../../../assets/imgs/drawing7.jpg"
import drawing8 from "../../../assets/imgs/drawing8.jpg"

import arrow from "../../../assets/arrow-right.svg";

const Illustrations = () => {
  return (
    <Conteudo>
      <div className='illustrations-img'>
        <Container style={{ gap: "5px" }}>
          <img src={drawing1} alt="" href="" />
          <img src={drawing2} alt="" href="" />
          <img src={drawing3} alt="" href="" />
        </Container>
        <Container style={{ gap: "5px" }}>
          <img src={drawing4} alt="" href="" />
          <img src={drawing5} alt="" href="" />
          <img src={drawing6} alt="" href="" />
        </Container>
        <Container style={{ gap: "5px" }}>
          <img src={drawing7} alt="" href="" />
          <img src={drawing8} alt="" href="" />
          <a href="https://www.instagram.com/rauppstein/" target="_blank" rel="noopener noreferrer">
            <span className="instagram">
              View more
              <img src={arrow} alt="" />
            </span>
          </a>
        </Container>
      </div>
    </Conteudo>
  )
}

export default Illustrations