import React from "react";
import { Circle, Title, Subtitle, Socials } from "./styles";
import Insta from "../../assets/instagram.svg"
import Github from "../../assets/github.png"
import Email from "../../assets/email.png"
import Linkedin from "../../assets/linkedin.png"
import { Coisas, ReverseSection, Section } from "../../styles/styles";
import ellie from "../../assets/imgs/ellie.png"
function Header() {
    return (
        <ReverseSection>
            <Coisas>
                <Title>Michel Raupp</Title>
                <Subtitle>
                    <div className="Line" />
                    <h2>Frontend Developer </h2>
                    <div className="Line" />
                </Subtitle>
                <p>
                    I’m a focused designer who is currently studying Frontend programming.
                    I worked for a blockchain game as concept artist and UX/UI developer for the last year,
                    and now Im trying to develop my skills on new projects.
                </p>
                <Socials>
                    <ul className="wrapper">
                        <li className="icon github">
                            <img src={Github} alt="Github"/>
                            <span className="tooltip">Github</span>
                            <span><i className="fab fa-github-f"></i></span>
                        </li>
                        <li className="icon email">
                            <img src={Email} alt="Email"/>
                            <span className="tooltip">Email</span>
                            <span><i className="fab fa-email"></i></span>
                        </li>
                        <li className="icon instagram">
                            <img src={Insta} alt="Instagram"/>
                            <span className="tooltip">Instagram</span>
                            <span><i className="fab fa-instagram"></i></span>
                        </li>
                        <li className="icon linkedin">
                            <img src={Linkedin} alt="Linkedin"/>
                            <span className="tooltip">Linkedin</span>
                            <span><i className="fab fa-linkedin"></i></span>
                        </li>
                    </ul>
                </Socials>
            </ Coisas>
            <Circle src={ellie}/>
        </ ReverseSection>
    );
}

export default Header;


