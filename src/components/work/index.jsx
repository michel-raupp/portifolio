import React from 'react'
import { Column, Section, SectionTitle } from '../../styles/styles'
import { WorkContainer, WorkImg } from './styles'
import badge from "../../assets/imgs/ellie.png"

const Work = () => {
    return (
        <Section>
            <Column style={{ gap: "20px" }}>
                <SectionTitle>
                    <h2>Work</h2>
                    <h3>What kind of experiences I got from my jobs?</h3>
                </SectionTitle>

                <WorkContainer>
                    <div className='container'>
                        <WorkImg>
                            <img src={badge} alt="" />
                            <div className='titleV2'>
                                <h3>Concept Artist | UX | UI</h3>
                                <h3>Crypto Farms Land</h3>
                            </div>
                        </WorkImg>
                        <div className='infos'>
                            <div className='title'>
                                <h3>Concept Artist | UX | UI</h3>
                                <h3>Crypto Farms Land</h3>
                            </div>
                            <p>
                                The CF Land is a browser game under development, based on games like Clash of Clans and Tribal Wars, which you have your own Land and you can upgrade buildings, train troops, attack other player’s Lands, with RPG features like heroes and gears.
                                During this project I learned how to create Pixel Arts, how to develop proper Game HUDs and create the things thinking about the mobile user experience.
                            </p>
                            <p className='date'>July 2022 ~ now</p>
                        </div>
                    </div>
                </WorkContainer>
                <hr />
                <WorkContainer>
                    <div className='container'>
                        <WorkImg>
                            <img src={badge} alt="" />
                            <div className='titleV2'>
                                <h3>Digital Artist</h3>
                                
                                <h3>Crypto Farms NFT</h3>
                            </div>
                        </WorkImg>
                        <div className='infos'>
                            <div className='title'>
                                <h3>Digital Artist</h3>
                                <h3>Crypto Farms NFT</h3>
                            </div>
                            <p>
                                Crypto Farms is a NFT Play to Earn game project, on Wax Blockchain. The project had more than $ 2 millions volume on Atomic Hub marketplace, being the most popular project during the March of 2022.
                                I worked on it as co-funder and Digital Artist, planning the branding around the Crypto Farms, creating Illustrations for the NFTs, the best UI design for the game and developing concept arts for the project.
                            </p>
                            <p className='date'>December 2021 ~ July 2022</p>
                        </div>
                    </div>
                </WorkContainer>
                <hr />
                <WorkContainer>
                    <div className='container'>
                        <WorkImg>
                            <img src={badge} alt="" />
                            <div className='titleV2'>
                                <h3>Graphic Designer</h3>
                                <h3>Fraternidade Crypto</h3>
                            </div>
                        </WorkImg>
                        <div className='infos'>
                            <div className='title'>
                                <h3>Graphic Designer</h3>
                                <h3>Fraternidade Crypto</h3>
                            </div>
                            <p>
                                Fraternidade Crypto was one of the biggest Blog specialized on Play to Earn and NFT news. I worked as a content creator for the blog doing thumbnails, customized Ads banners and creating own images to the writer use on the news.

                                I also worked as a Youtube Editor for the Fraternidade Crypto, which my job was basicaly create “Shorts” about their channel, creating thumbnails and also intros for the channel.
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