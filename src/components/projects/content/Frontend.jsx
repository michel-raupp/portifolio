import React from 'react'
import { Botoes, Conteudo, ModalContent } from './styles'
import badge from "../../../assets/bxs-badge-check.svg";
const Frontend = () => {
  return (
    <Conteudo>
      <ModalContent> 
        <div className='content'>
          <img className='preview' src='' alt='' />
          <div className='info'>
            <h3>Pokédex project</h3>
            <p>You can search for a Pokémon on the Seach Tab. Created using ReactJS, Axios and PokéAPI.
            </p>
            <Botoes>
              <ul className="wrapper">
                <li className="github" href="">
                  <p>Github</p><img src={badge} alt="" />
                </li>
                <li className="website" href="">
                  <p>Project website</p><img src={badge} alt="" />
                </li>
              </ul>
            </Botoes>
          </div>
        </div>
      </ModalContent>
      <hr />
      <ModalContent>
        <div className='content'>
          <img className='preview' src='' alt='' />
          <div className='info'>
            <h3>THE GYM</h3>
            <p>A Gym landing Page using ReactJS and Styled Components, with responsive menus, contact form and buttons.
            </p>
            <Botoes>
              <ul className="wrapper">
                <li className="github" href="">
                  <p>Github</p><img src={badge} alt="" />
                </li>
                <li className="website" href="">
                  <p>Website</p><img src={badge} alt="" />
                </li>
              </ul>
            </Botoes>
          </div>
        </div>
      </ModalContent>
      <hr />
      <ModalContent>
        <div className='content'>
          <img className='preview' src='' alt='' />
          <div className='info'>
            <h3>Portifolio</h3>
            <p>This is my Portifolio website that you're looking right now. Built with ReactJS and Styled Components.
            </p>
            <Botoes>
              <ul className="wrapper">
                <li className="github" href="">
                  <p>Github</p><img src={badge} alt="" />
                </li>
                <li className="website" href="">
                  <p>Website</p><img src={badge} alt="" />
                </li>
              </ul>
            </Botoes>
          </div>
        </div>
      </ModalContent>
    </Conteudo>
  )
}

export default Frontend