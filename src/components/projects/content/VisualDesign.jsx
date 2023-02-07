import React from 'react'
import { Botoes, Conteudo, ModalContent } from './styles'
import arrow from "../../../assets/arrow-right.svg";
import cf1 from "../../../assets/preview/cf1.jpg"
import cf2 from "../../../assets/preview/cf2.jpg"
import cf3 from "../../../assets/preview/cf3.jpg"

const VisualDesign = () => {
  return (
    <Conteudo>
      <ModalContent>
        <div className='content'>
          <img className='preview' src={cf1} alt='' />
          <div className='info'>
            <h3>Crypto Farms HUDs</h3>
            <p>Created game HUDs and the UX/UI of the blockchain game Crypto Farms Land.
            </p>
            <Botoes>
              <ul className="wrapper">
                <li className="github" href="">
                  <p>Figma</p><img src={arrow} alt="" />
                </li>
              </ul>
            </Botoes>
          </div>
        </div>
      </ModalContent>
      <hr />
      <ModalContent>
        <div className='content'>
          <img className='preview' src={cf2} alt='' />
          <div className='info'>
            <h3>Character Design</h3>
            <p>Illustrations of troops, enemies and citzen NPCs, based on a Cyberpunk theme.
            </p>
            <Botoes>
              <ul className="wrapper">
                <li className="github" href="">
                  <p>Figma</p><img src={arrow} alt="" />
                </li>
              </ul>
            </Botoes>
          </div>
        </div>
      </ModalContent>
      <hr />
      <ModalContent>
        <div className='content'>
          <img className='preview' src={cf3} alt='' />
          <div className='info'>
            <h3>Game website rebrand</h3>
            <p>The rebrand was based on transforming a simple website on a gaming hub.
            </p>
            <Botoes>
              <ul className="wrapper">
                <li className="github" href="">
                  <p>Figma</p><img src={arrow} alt="" />
                </li>
              </ul>
            </Botoes>
          </div>
        </div>
      </ModalContent>
    </Conteudo>
  )
}

export default VisualDesign