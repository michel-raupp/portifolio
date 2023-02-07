import React, { Component } from "react";
import { Logo, Menu, NavbarSection } from "./styles";
import { Sling as Hamburger } from 'hamburger-react'

class Navbar extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };

    render() {
        return (
            // <NavbarContent>
            //     <nav className={this.state.clicked ? "#navbar active" : "#navbar"}>
            //         <h2 className="logo">Raupp</h2>
            //         <ul>
            //             <li>
            //                 <a href="">
            //                     <img src={tech5} alt="" />
            //                     <p>Home</p>
            //                 </a>
            //             </li>
            //             <li>
            //                 <a href="">
            //                     <img src={tech5} alt="" />
            //                     <p>About</p>
            //                 </a>
            //             </li>
            //             <li>
            //                 <a href="">
            //                     <img src={tech5} alt="" />
            //                     <p>Skills</p>
            //                 </a>
            //             </li>
            //             <li>
            //                 <a href="">
            //                     <img src={tech5} alt="" />
            //                     <p>Portifolio</p>
            //                 </a>
            //             </li>
            //             <li>
            //                 <a href="">
            //                     <img src={tech5} alt="" />
            //                     <p>Work</p>
            //                 </a>
            //             </li>
            //             <li>
            //                 <a href="">
            //                     <img src={tech5} alt="" />
            //                     <p>Contact</p>
            //                 </a>
            //             </li>
            //         </ul>
            //         <a className="toggle"><img src={tech5} alt="" /></a>
            //     </nav>
            // </NavbarContent>
            <NavbarSection>
                <Logo>Raupp</Logo>

                <div>
                    <Menu
                        id="navbar"
                        className={this.state.clicked ? "#navbar active" : "#navbar"}
                    >
                        <li className="first">
                            <a href="#home">
                                <p>Home</p>
                            </a>
                        </li>
                        <li>
                            <a href="#about"><p>About</p></a>
                        </li>
                        <li>
                            <a href="#skills"><p>Skills</p></a>
                        </li>
                        <li>
                            <a href="#projects"><p>Projects</p></a>
                        </li>
                        <li>
                            <a href="#work"><p>Work</p></a>
                        </li>
                        <li>
                            <a href="#contact"><p>Contact</p></a>
                        </li>
                    </Menu>
                </div>
                <div id="mobile" onClick={this.handleClick}>
                    <Hamburger duration={0.8} />
                </div>
            </NavbarSection>
        );
    }
}
export default Navbar;


