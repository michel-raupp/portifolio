import React from "react";
import { SkillCard } from "./styles";
import badge from "../../assets/bxs-badge-check.svg";

const Hardskills = () => {
    return (
        <SkillCard>
            <h3>Hard Skills</h3>

            <div className="hardSkillsBox">
                <div className="skillsGroup">
                    <div className="skillsData">
                        <img src={badge} alt=""/>

                        <div>
                            <h3 className="skillName">ReactJS</h3>
                            <span>Basic</span>
                        </div>
                    </div>

                    <div className="skillsData">
                        <img src={badge} alt=""/>

                        <div>
                            <h3 className="skillName">Wordpress</h3>
                            <span>Basic</span>
                        </div>
                    </div>

                    <div className="skillsData">
                        <img src={badge} alt=""/>

                        <div>
                            <h3 className="skillName">HTML</h3>
                            <span>Basic</span>
                        </div>
                    </div>
                </div>


                <div className="skillsGroup">
                    <div className="skillsData">
                        <img src={badge} alt=""/>

                        <div>
                            <h3 className="skillName">Photoshop</h3>
                            <span>Advanced</span>
                        </div>
                    </div>

                    <div className="skillsData">
                        <img src={badge} alt=""/>

                        <div>
                            <h3 className="skillName">Figma</h3>
                            <span>Intermediate</span>
                        </div>
                    </div>

                    <div className="skillsData">
                        <img src={badge} alt=""/>

                        <div>
                            <h3 className="skillName">CSS</h3>
                            <span>Basic</span>
                        </div>
                    </div>
                </div>
            </div>

        </SkillCard>
    )
}

export default Hardskills;