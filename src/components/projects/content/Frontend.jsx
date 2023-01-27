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
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio fugiat placeat similique ipsam provident aliquid,
              iure praesentium pariatur harum earum eius sapiente ipsum in dicta tempore commodi nobis
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
            <h3>Pokédex project</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio fugiat placeat similique ipsam provident aliquid,
              iure praesentium pariatur harum earum eius sapiente ipsum in dicta tempore commodi nobis
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
            <h3>Pokédex project</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio fugiat placeat similique ipsam provident aliquid,
              iure praesentium pariatur harum earum eius sapiente ipsum in dicta tempore commodi nobis
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
    </Conteudo>
  )
}

export default Frontend