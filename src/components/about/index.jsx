import React from "react";
import { Coisas, Column, Section, SectionTitle } from "../../styles/styles";
import { CoisasAbout, Download, ProfileIMG } from "./styles";

function About() {
    return (
        <Section>
            <Column>
                <SectionTitle>
                    <h2>About Me</h2>
                    <h3>My resume</h3>
                </SectionTitle>
                <Section style={{ padding: "0" }}>
                    <ProfileIMG />
                    <CoisasAbout>
                        <Coisas style={{ gap: '30px' }}>
                            <p>I am a 21 years old brazilian who’s studying Systems of Information degree. I’m advanced on English, I like to draw everyday, workout and read some dystopic histories books. </p>
                            <p>Since december 2021 I’ve been working on Crypto Farms as co-funder and Designer. Crypto Farms is a NFT game project on Wax Blockchain who had more than $ 2 millions volume on Atomic Hub marketplace.</p>
                            <p>During this time I learned about the branding process, how to design a product, prototyping projects, illustrate Concept Arts, UI Design and Front-end Development.</p>
                        </Coisas>
                        <Download>
                            <div data-tooltip="Size: 20Mb" className="button">
                                <a href="">
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
