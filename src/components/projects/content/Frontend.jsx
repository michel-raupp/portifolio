import React from 'react'
import { Botoes, Conteudo, ModalContent } from './styles'
import arrow from "../../../assets/icons/arrow-right.svg";
import preview1 from "../../../assets/preview/pokedex.jpg"
import preview2 from "../../../assets/preview/the-gym.jpg"
import preview3 from "../../../assets/preview/portifolio.jpg"

const Frontend = () => {
  return (
    <Conteudo>
      <ModalContent>
        <div className='content'>
          <img className='preview' src={preview1} alt='' />
          <div className='info'>
            <h3>Pokédex project</h3>
            <p>You can search for a Pokémon on the Seach Tab. It was created using ReactJS, Axios and PokéAPI.
            </p>
            <Botoes>
              <ul className="wrapper">
                <a href="https://github.com/michel-raupp/project-pokedex" target="_blank" rel="noopener noreferrer">
                  <li className="github">
                    <p>Github</p><img src={arrow} alt="github" />
                  </li>
                </a>
                <a href="https://project-pokedex-three.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <li className="website">
                    <p>Demo</p><img src={arrow} alt="view demo" />
                  </li>
                </a>
              </ul>
            </Botoes>
          </div>
        </div>
      </ModalContent>
      <hr />
      <ModalContent>
        <div className='content'>
          <img className='preview' src={preview2} alt='' />
          <div className='info'>
            <h3>THE GYM</h3>
            <p>A gym landing page using ReactJS and Styled Components, featuring responsive menus, contact form, and buttons.
            </p>
            <Botoes>
              <ul className="wrapper">
                <a href="https://github.com/michel-raupp/gym-project" target="_blank" rel="noopener noreferrer">
                  <li className="github">
                    <p>Github</p><img src={arrow} alt="github" />
                  </li>
                </a>
                <a href="https://gym-project-eight.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <li className="website">
                    <p>Demo</p><img src={arrow} alt="view demo" />
                  </li>
                </a>
              </ul>
            </Botoes>
          </div>
        </div>
      </ModalContent>
      <hr />
      <ModalContent>
        <div className='content'>
          <img className='preview' src={preview3} alt='' />
          <div className='info'>
            <h3>Portifolio</h3>
            <p>This is my Portifolio website that you're looking right now. Built with ReactJS and Styled Components.
            </p>
            <Botoes>
              <ul className="wrapper">
                <a href="https://github.com/michel-raupp/portifolio" target="_blank" rel="noopener noreferrer">
                  <li className="github">
                    <p>Github</p><img src={arrow} alt="github" />
                  </li>
                </a>
              </ul>
            </Botoes>
          </div>
        </div>
      </ModalContent>
    </Conteudo>
  )
}

export default Frontend