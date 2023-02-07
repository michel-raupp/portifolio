import React from "react";
import { Coisas, Column, Section, SectionTitle } from "../../styles/styles";
import { CoisasAbout, Download, ProfileIMG } from "./styles";
import profile2 from "../../assets/imgs/profile2.jpg"

function About() {
    return (
        <Section id="about">
            <Column>
                <SectionTitle>
                    <h2>About Me</h2>
                    <h3>My resume</h3>
                </SectionTitle>
                <Section style={{ padding: "0" }}>
                    <ProfileIMG src={profile2}/>
                    <CoisasAbout>
                        <Coisas style={{ gap: '30px' }}>
                            <p>I am a 21 years old brazilian who’s studying Systems of Information degree. I’m advanced on English, I like to draw everyday, workout and read some dystopic histories books. </p>
                            <p>Since december 2021 I’ve been working on the blockchain game Crypto Farms as co-funder and Designer.</p>
                            <p>During this time I learned about the branding process, how to design a product, prototyping projects, illustrate Concept Arts, UI Design and Frontend Development.</p>
                        </Coisas>
                        <Download>
                            <div data-tooltip="Size: 160KB" className="button">
                                <a href="https://github.com/michel-raupp/gym-project" target="_blank" and rel="noopener noreferrer">
                                    <div className="button-wrapper">
                                        <div className="text">Download CV</div>
                                        <span className="icon">
                                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" height="2em" width="2em" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none"></path></svg>
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </Download>
                    </CoisasAbout>
                </Section>
            </Column >
        </Section >
    );
}

export default About;
