import React, { useState } from "react";
import { Column, Container, Section, SectionTitle } from "../../styles/styles";
import { ProjectsCard, ProjectsContainer, ProjectsSection } from "./styles";
import tech1 from "../../assets/icons/react-icon.png";
import tech2 from "../../assets/icons/js-icon.png";
import tech3 from "../../assets/icons/html-icon.png";
import tech4 from "../../assets/icons/css-icon.png";

import tech5 from "../../assets/icons/figma.png";
import tech6 from "../../assets/icons/photoshop.png";

import arrow2 from "../../assets/icons/angle-double-right.svg";
import close from "../../assets/icons/times.svg";

import Frontend from "./content/Frontend";
import VisualDesign from "./content/VisualDesign";
import Illustrations from "./content/Illustrations";

const Projects = () => {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <ProjectsSection>
            <Section id="projects">
                <Column>
                    <SectionTitle>
                        <h2>Projects</h2>
                        <h3>What I’ve been developing?</h3>
                    </SectionTitle>
                    <ProjectsContainer>
                        <ProjectsCard>   {/*Frontend Development*/}
                            <div>
                                <h3 className="projectsTitle">Frontend<br />Development</h3>
                            </div>

                            <Container style={{ justifyContent: "flex-start", marginBottom: "-80px" }}>
                                <img className="technology-used" src={tech1} alt="" />
                                <img className="technology-used" src={tech2} alt="" />
                                <img className="technology-used" src={tech3} alt="" />
                                <img className="technology-used" src={tech4} alt="" />
                            </Container>

                            <span className="view-more" onClick={() => toggleTab(1)}>
                                View more
                                <img src={arrow2} alt="" /></span>

                            <div className={toggleState === 1 ? "projectsModal active-modal" : "projectsModal"}>
                                <div className="projectsModal-content">
                                    <img className="close-modal" src={close} alt="" onClick={() => toggleTab(0)} />
                                    <h3 className="projectsModal-title">Frontend Development</h3>
                                    <p className="projectsModal-description">What I've been studying</p>
                                    <Frontend />
                                </div>
                            </div>
                        </ProjectsCard>
                        <ProjectsCard>    {/*Visual Design*/}
                            <div>
                                <h3 className="projectsTitle">Visual<br />Design</h3>
                            </div>

                            <Container style={{ justifyContent: "flex-start", marginBottom: "-80px" }}>
                                <img className="technology-used" src={tech5} alt="" />
                                <img className="technology-used" src={tech6} alt="" />
                            </Container>

                            <span className="view-more" onClick={() => toggleTab(2)}>
                                View more
                                <img src={arrow2} alt="" /></span>

                            <div className={toggleState === 2 ? "projectsModal active-modal" : "projectsModal"}>
                                <div className="projectsModal-content">
                                    <img className="close-modal" src={close} alt="" onClick={() => toggleTab(0)} />
                                    <h3 className="projectsModal-title">Visual Design</h3>
                                    <p className="projectsModal-description">What I've been working on</p>
                                    <VisualDesign />
                                </div>
                            </div>
                        </ProjectsCard>
                        <ProjectsCard>    {/*Personal Illustrations*/}
                            <div>
                                <h3 className="projectsTitle">Personal<br />Illustrations</h3>
                            </div>

                            <Container style={{ justifyContent: "flex-start", marginBottom: "-80px" }}>
                                <img className="technology-used" src={tech6} alt="" />
                            </Container>

                            <span className="view-more" onClick={() => toggleTab(3)}>
                                View more
                                <img src={arrow2} alt="" /></span>
                                <div className={toggleState === 3 ? "projectsModal active-modal" : "projectsModal"}>
                                    <div className="projectsModal-content">
                                        <img className="close-modal" src={close} alt="" onClick={() => toggleTab(0)} />
                                        <h3 className="projectsModal-title">Personal Illustrations</h3>
                                        <p className="projectsModal-description">Some drawings o' mine</p>
                                        <Illustrations />
                                    </div>
                                </div>
                        </ProjectsCard>
                    </ProjectsContainer>
                </Column >
            </Section >
            <div className={toggleState === 3 || toggleState === 2 || toggleState === 1 ? "backgroundModal active" : "backgroundModal"} onClick={() => toggleTab(0)} />
        </ProjectsSection>
    );
}

export default Projects;


