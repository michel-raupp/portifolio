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
            <h3>Pokédex project</h3>
            <p>You can search for a Pokémon on the Seach Tab. Created using ReactJS, Axios and PokéAPI.
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
            <h3>THE GYM</h3>
            <p>A Gym landing Page using ReactJS and Styled Components, with responsive menus, contact form and buttons.
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
            <h3>Portifolio</h3>
            <p>This is my Portifolio website that you're looking right now. Built with ReactJS and Styled Components.
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