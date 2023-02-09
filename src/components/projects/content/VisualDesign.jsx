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
            <h3>Game HUDs | UX | UI</h3>
            <p>Designed game HUDs and the user experience for the browser game Crypto Farms Land.
            </p>
            <Botoes>
              <ul className="wrapper">
                <a href="https://www.figma.com/proto/txUeGuOjqFXpbTXcrxQqeU/Game-HUDs?node-id=1%3A2&scaling=scale-down-width&page-id=0%3A1" target="_blank" rel="noopener noreferrer">
                  <li className="github">
                    <p>Figma (view images)</p><img src={arrow} alt="view demo" />
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
          <img className='preview' src={cf2} alt='' />
          <div className='info'>
            <h3>2D Artist | Game Design</h3>
            <p>Designed and illustrated sprites, scenaries, troops, NPCs and icons for Crypto Farms Land.
            </p>
            <Botoes>
              <ul className="wrapper">
                <a href="https://www.figma.com/proto/JLnxkoj4zZVSrEcCvj0bZY/Untitled?node-id=1%3A2&scaling=scale-down-width&page-id=0%3A1" target="_blank" rel="noopener noreferrer">
                  <li className="github">
                    <p>Figma (view images)</p><img src={arrow} alt="view demo" />
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
          <img className='preview' src={cf3} alt='' />
          <div className='info'>
            <h3>Website Rebranding</h3>
            <p>Created a background story for the game and designed the website to look more like a game.
            </p>
            <Botoes>
              <ul className="wrapper">
                <a href="https://www.figma.com/proto/8MsF2to60KmsvodrsQMCru/Untitled?node-id=1%3A2&scaling=min-zoom&page-id=0%3A1" target="_blank" rel="noopener noreferrer">
                  <li className="github">
                    <p>Figma</p><img src={arrow} alt="Figma" />
                  </li>
                </a>
                <a href="https://youtu.be/ub_jb2S0SEM" target="_blank" rel="noopener noreferrer">
                  <li className="website">
                    <p>Youtube</p><img src={arrow} alt="view video preview" />
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

export default VisualDesign