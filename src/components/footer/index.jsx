import React from "react";
import { Circle, Subtitle, Socials } from "../header/styles";
import Insta from "../../assets/icons/instagram.svg"
import Github from "../../assets/icons/github.png"
import Email from "../../assets/icons/email.png"
import Linkedin from "../../assets/icons/linkedin.png"
import { Coisas} from "../../styles/styles";
import { FooterSection } from "./styles";

import drawing1 from "../../assets/imgs/drawing1.jpg"
import artist from "../../assets/icons/man-artist.png"
function Footer() {
    return (
        <FooterSection id="contact">
            <Coisas>
                <h1 className="footer-title">Still Interested?</h1>
                <Subtitle>
                    <div className="Line" />
                    <img className="artist" src={artist} alt=""/>
                    <div className="Line" />
                </Subtitle>
                <p>
                    Thank you for taking the time to read my portfolio. I hope it was a great experience!

                    Please feel free to contact me and check out my GitHub. Have a nice day!
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
                        <a href="mailto:michelraupp@outlook.com" target="_blank" rel="noopener noreferrer">
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
            </ Coisas>
            <Circle src={drawing1} style={{filter: "saturate(1)"}}/>
        </ FooterSection>
    );
}

export default Footer;


