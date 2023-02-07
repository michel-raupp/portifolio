import React from "react";
import { Circle, Title, Subtitle, Socials } from "./styles";
import Insta from "../../assets/icons/instagram.svg"
import Github from "../../assets/icons/github.png"
import Email from "../../assets/icons/email.png"
import Linkedin from "../../assets/icons/linkedin.png"
import { Coisas, ReverseSection } from "../../styles/styles";
import profile1 from "../../assets/imgs/profile1.jpg"
function Header() {
    return (
        <ReverseSection id="home">
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
                        <a href="https://github.com/michel-raupp" target="_blank" rel="noopener noreferrer">
                            <li className="icon github">
                                <img src={Github} alt="Github" />
                                <span className="tooltip">Github</span>
                                <span><i className="fab fa-github-f"></i></span>
                            </li>
                        </a>
                        <a href="https://www.instagram.com/rauppstein/" target="_blank" rel="noopener noreferrer">
                            <li className="icon email">
                                <img src={Email} alt="Email" />
                                <span className="tooltip">Email</span>
                                <span><i className="fab fa-email"></i></span>
                            </li>
                        </a>
                        <a href="https://www.instagram.com/rauppstein/" target="_blank" rel="noopener noreferrer">
                            <li className="icon instagram">
                                <img src={Insta} alt="Instagram" />
                                <span className="tooltip">Instagram</span>
                                <span><i className="fab fa-instagram"></i></span>
                            </li>
                        </a>
                        <a href="https://www.linkedin.com/in/michelraupp/" target="_blank" rel="noopener noreferrer">
                            <li className="icon linkedin">
                                <img src={Linkedin} alt="Linkedin" />
                                <span className="tooltip">Linkedin</span>
                                <span><i className="fab fa-linkedin"></i></span>
                            </li>
                        </a>
                    </ul>
                </Socials >
            </ Coisas >
            <Circle src={profile1} />
        </ ReverseSection >
    );
}

export default Header;


