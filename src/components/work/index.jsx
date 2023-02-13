import React from 'react'
import { Column, Section, SectionTitle } from '../../styles/styles'
import { WorkContainer, WorkImg } from './styles'

import cf1 from "../../assets/preview/cf1.jpg"
import cf2 from "../../assets/preview/cf2.jpg"
import cf4 from "../../assets/preview/cf4.jpg"


const Work = () => {
    return (
        <Section id="work">
            <Column>
                <SectionTitle>
                    <h2>Work</h2>
                    <h3>What kind of experiences I got from my past jobs?</h3>
                </SectionTitle>

                <WorkContainer>
                    <div className='container'>
                        <WorkImg>
                            <img src={cf2} alt="" />
                            <div className='titleV2'>
                                <h3>2D Artist | UX | UI</h3>
                                <p>at Crypto Farms Land</p>
                            </div>
                        </WorkImg>
                        <div className='infos'>
                            <div className='title'>
                                <h3>2D Artist | UX | UI</h3>
                                <p>Crypto Farms Land</p>
                            </div>
                            <p>
                            CF Land is a browser game under development, inspired by games like Clash of Clans and Tribal Wars. In the game, players have their own Land where they can upgrade buildings, train troops, attack other players' Lands, and enjoy RPG features such as heroes and gear.

                            Working on this project, I learned how to create Pixel Art, develop effective game HUDs, and design with the mobile user experience in mind.
                            </p>
                            <p className='date'>July 2022 ~ now</p>
                        </div>
                    </div>
                </WorkContainer>
                <hr />
                <WorkContainer>
                    <div className='container'>
                        <WorkImg>
                            <img src={cf4} alt="" />
                            <div className='titleV2'>
                                <h3>2D Artist</h3>
                                <p>at Crypto Farms NFT</p>
                            </div>
                        </WorkImg>
                        <div className='infos'>
                            <div className='title'>
                                <h3>2D Artist</h3>
                                <p>Crypto Farms NFT</p>
                            </div>
                            <p>
                            Crypto Farms is a NFT "Play to Earn" game project on the Wax Blockchain. The project has had more than $2 million in volume on the Atomic Hub marketplace. 

                            I worked on it as a co-founder and digital artist, where I was responsible for planning the branding for Crypto Farms, creating illustrations for the NFTs, designing the UI for the game, and developing concept arts for the project.
                            </p>
                            <p className='date'>December 2021 ~ July 2022</p>
                        </div>
                    </div>
                </WorkContainer>
                <hr />
                <WorkContainer>
                    <div className='container'>
                        <WorkImg>
                            <img src={cf1} alt="" />
                            <div className='titleV2'>
                                <h3>Graphic Designer</h3>
                                <p>at Fraternidade Crypto</p>
                            </div>
                        </WorkImg>
                        <div className='infos'>
                            <div className='title'>
                                <h3>Graphic Designer</h3>
                                <p>Fraternidade Crypto</p>
                            </div>
                            <p>
                            Fraternidade Crypto was one of the biggest blogs specializing in "Play to Earn" and NFT news. I worked as a content creator for the blog, creating thumbnails, customizing ads banners, and creating original images for the writers to use in their articles. 
                            
                            I also worked as a YouTube editor for Fraternidade Crypto, where my job was mainly to create "shorts" for their channel, design thumbnails, and create intros for the channel.
                            </p>
                            <p className='date'>August 2021 ~ March 2022</p>
                        </div>
                    </div>
                </WorkContainer>
            </Column>
        </Section>
    )
}

export default Work