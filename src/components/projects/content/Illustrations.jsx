import React from 'react'
import { Container } from '../../../styles/styles'
import { Conteudo } from './styles'
import ellie from "../../../assets/imgs/ellie.png"
import badge from "../../../assets/bxs-badge-check.svg";

const Illustrations = () => {
  return (
    <Conteudo>
      <div className='illustrations-img'>
        <Container style={{ gap: "5px" }}>
          <img src={ellie} alt="" href="" />
          <img src={ellie} alt="" href="" />
          <img src={ellie} alt="" href="" />
        </Container>
        <Container style={{ gap: "5px" }}>
          <img src={ellie} alt="" href="" />
          <img src={ellie} alt="" href="" />
          <img src={ellie} alt="" href="" />
        </Container>
        <Container style={{ gap: "5px" }}>
          <img src={ellie} alt="" href="" />
          <img src={ellie} alt="" href="" />
          <span className="instagram">
            View more
          <img src={badge} alt="" /></span>
        </Container>
      </div>
    </Conteudo>
  )
}

export default Illustrations