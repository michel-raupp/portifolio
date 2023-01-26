import React from "react";
import { Column, Section, SectionTitle } from "../../styles/styles";
import { SkillCard } from "./styles";


function Skills() {
    return (
        <Section>
            <Column>
                <SectionTitle>
                    <h2>About Me</h2>
                    <h3>My resume</h3>
                </SectionTitle>
                <Section>
                    <SkillCard>
                        <h3>Hard Skills</h3>
                        
                    </SkillCard>
                </Section>
            </Column >
        </Section >
    );
}

export default Skills;
