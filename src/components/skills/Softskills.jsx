import React from "react";
import { SkillCard } from "./styles";
import badge from "../../assets/icons/bxs-badge-check.svg";

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
                            <span><p>Thinking on different</p></span>
                        </div>
                    </div>

                    <div className="skillsData">
                    <img src={badge} alt=""/>

                        <div>
                            <h3 className="skillName">English</h3>
                            <span><p>Advanced C2</p></span>
                        </div>
                    </div>

                    <div className="skillsData">
                    <img src={badge} alt=""/>

                        <div>
                            <h3 className="skillName">Drawings</h3>
                            <span><p>Digital Illustrations</p></span>
                        </div>

                    </div>
                </div>

                <div className="skillsGroup">
                    <div className="skillsData">
                    <img src={badge} alt=""/>

                        <div>
                            <h3 className="skillName">Open-minded</h3>
                            <span><p>Can you gimme a tip?</p></span>
                        </div>
                    </div>

                    <div className="skillsData">
                    <img src={badge} alt=""/>

                        <div>
                            <h3 className="skillName">Curiosity</h3>
                            <span><p>Seeks for what's new</p></span>
                        </div>
                    </div>

                    <div className="skillsData">
                    <img src={badge} alt=""/>

                        <div>
                            <h3 className="skillName">UX/UI</h3>
                            <span><p>Thinking like the user</p></span>
                        </div>
                    </div>
                </div>
            </div>
        </SkillCard>
    )
}

export default Softskills;