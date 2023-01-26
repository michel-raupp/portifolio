import React from "react";
import { SkillCard } from "./styles";
import badge from "../../assets/bxs-badge-check.svg";

const Softskills = () => {
    return (
        <SkillCard>
            <h3>Soft Skills</h3>

            <div className="softSkillsBox">
                <div className="skillsGroup">
                    <div className="skillsData">
                        <img src={badge} alt=""/>

                        <div>
                            <h3 className="skillName">Creative</h3>
                            <span>Thinking on different</span>
                        </div>
                    </div>

                    <div className="skillsData">
                    <img src={badge} alt=""/>

                        <div>
                            <h3 className="skillName">English</h3>
                            <span>Advanced C2</span>
                        </div>
                    </div>

                    <div className="skillsData">
                    <img src={badge} alt=""/>

                        <div>
                            <h3 className="skillName">Drawings</h3>
                            <span>Digital Illustrations</span>
                        </div>

                    </div>
                </div>

                <div className="skillsGroup">
                    <div className="skillsData">
                    <img src={badge} alt=""/>

                        <div>
                            <h3 className="skillName">Open-minded</h3>
                            <span>Can you gimme a tip?</span>
                        </div>
                    </div>

                    <div className="skillsData">
                    <img src={badge} alt=""/>

                        <div>
                            <h3 className="skillName">Curiosity</h3>
                            <span>Seeks for what's new</span>
                        </div>
                    </div>

                    <div className="skillsData">
                    <img src={badge} alt=""/>

                        <div>
                            <h3 className="skillName">UX/UI</h3>
                            <span>Thinking like the user</span>
                        </div>
                    </div>
                </div>
            </div>
        </SkillCard>
    )
}

export default Softskills;