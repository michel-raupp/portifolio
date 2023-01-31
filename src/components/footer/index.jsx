import React from "react";
import { Circle, Title, Subtitle, Socials } from "../header/styles";
import Insta from "../../assets/instagram.svg"
import Github from "../../assets/github.png"
import Email from "../../assets/email.png"
import Linkedin from "../../assets/linkedin.png"
import { Coisas} from "../../styles/styles";
import ellie from "../../assets/imgs/ellie.png"
import { FooterSection } from "./styles";
function Footer() {
    return (
        <FooterSection>
            <Coisas>
                <Title><h1 className="footer-title">Still Interested?</h1></Title>
                <Subtitle>
                    <div className="Line" />
                    <h2>👨‍🎨</h2>
                    <div className="Line" />
                </Subtitle>
                <p>
                    Thank you for your time reading my Portifolio, I hope it was a great experience! 
                    Feel free to contact me and take a look on my GitHub, have a nice day!
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
        </ FooterSection>
    );
}

export default Footer;


