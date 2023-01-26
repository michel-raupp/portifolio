import React, { useState } from "react";
import { Column, Section, SectionTitle } from "../../styles/styles";
import { ProjectsCard, ProjectsContainer } from "./styles";
import badge from "../../assets/bxs-badge-check.svg";

const Projects = () => {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }


    return (
        <Section>
            <Column>
                <SectionTitle>
                    <h2>Projects</h2>
                    <h3>What I’ve been developing?</h3>
                </SectionTitle>
                <ProjectsContainer>
                    <ProjectsCard>
                        <div>
                            <i></i>
                            <h3 className="projectsTitle">Frontend<br />Developer</h3>
                        </div>

                        <span className="view-more" onClick={() => toggleTab(1)}>
                            View more
                            <img src={badge} alt=""/></span>

                        <div className={toggleState === 1 ? "projectsModal active-modal" : "projectsModal"}>
                            <div className="projectsModal-content">
                                <img className="close-modal" src={badge} alt="" onClick={() => toggleTab(0)}/>
                            <h3 className="projectsModal-title">Modal Title</h3>
                            <p className="projectsModal-description">modal description</p>

                            <ul className="projectsModal-grid">
                                <li className="projectsModal-gridLI">
                                <img src={badge} alt="" />
                                    <p className="projectsModal-info">modal info</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </ProjectsCard>
            </ProjectsContainer>
        </Column >
        </Section >
    );
}

export default Projects;


