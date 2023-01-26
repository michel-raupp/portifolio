import React from "react";
import { Column, Section, SectionTitle } from "../../styles/styles";
import Hardskills from "./Hardskills";
import Softskills from "./Softskills";
import { SkillsContainer } from "./styles";


function Skills() {
    return (
        <Section>
            <Column>
                <SectionTitle>
                    <h2>Skills</h2>
                    <h3>What am I good at?</h3>
                </SectionTitle>
                <SkillsContainer>
                    <Hardskills/>
                    <Softskills />
                </SkillsContainer>
            </Column >
        </Section >
    );
}

export default Skills;
