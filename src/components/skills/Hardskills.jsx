import React from "react";
import { SkillCard } from "./styles";
import badge from "../../assets/icons/bxs-badge-check.svg";

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
                            <span><p>Basic</p></span>
                        </div>
                    </div>

                    <div className="skillsData">
                        <img src={badge} alt=""/>

                        <div>
                            <h3 className="skillName">Wordpress</h3>
                            <span><p>Basic</p></span>
                        </div>
                    </div>

                    <div className="skillsData">
                        <img src={badge} alt=""/>

                        <div>
                            <h3 className="skillName">HTML</h3>
                            <span><p>Basic</p></span>
                        </div>
                    </div>
                </div>


                <div className="skillsGroup">
                    <div className="skillsData">
                        <img src={badge} alt=""/>

                        <div>
                            <h3 className="skillName">Photoshop</h3>
                            <span><p>Advanced</p></span>
                        </div>
                    </div>

                    <div className="skillsData">
                        <img src={badge} alt=""/>

                        <div>
                            <h3 className="skillName">Figma</h3>
                            <span><p>Intermediate</p></span>
                        </div>
                    </div>

                    <div className="skillsData">
                        <img src={badge} alt=""/>

                        <div>
                            <h3 className="skillName">CSS</h3>
                            <span><p>Basic</p></span>
                        </div>
                    </div>
                </div>
            </div>

        </SkillCard>
    )
}

export default Hardskills;