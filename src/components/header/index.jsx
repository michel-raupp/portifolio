import React from "react";
import { Circle, Title, Subtitle, Socials } from "./styles";
import Insta from "../../assets/instagram.svg"
import Github from "../../assets/github.png"
import Email from "../../assets/email.png"
import { Coisas, Section } from "../../styles/styles";

function Header() {
    return (
        <Section>
            <Coisas>
                <Title>Michel Raupp</Title>
                <Subtitle>
                    <div className="Line" />
                    <h2>Front-end Developer</h2>
                </Subtitle>
                <p>
                    I’m a focused designer who is currently studying Frontend programming.
                    I worked for a blockchain game as concept artist and UX/UI developer for the last year,
                    and now Im trying to develop my skills on new projects.
                </p>
                <Socials>
                    <ul className="wrapper">
                        <li className="icon facebook">
                            <img src={Github} alt="Github"/>
                            <span className="tooltip">Github</span>
                            <span><i className="fab fa-facebook-f"></i></span>

                        </li>
                        <li className="icon twitter">
                            <img src={Email} alt="Email"/>
                            <span className="tooltip">Email</span>
                            <span><i className="fab fa-twitter"></i></span>
                        </li>
                        <li className="icon instagram">
                            <img src={Insta} alt="Instagram"/>
                            <span className="tooltip">Instagram</span>
                            <span><i className="fab fa-instagram"></i></span>
                        </li>
                    </ul>
                </Socials>
            </ Coisas>
            <Circle />
        </ Section>
    );
}

export default Header;


