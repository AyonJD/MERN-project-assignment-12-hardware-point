import React, { Component } from "react";
import Data from "./Data";
import { FaLaptopCode } from 'react-icons/fa';
import SkillBar from "react-skillbars";
import { MdTagFaces } from 'react-icons/md'
class SkillsData extends Component {
    render() {
        return (
            <div className="SkillsData">
                <div>
                    <p className="Skills-Title allTitles">
                        <span className="text-2xl">Mes Connaissances</span>
                        <FaLaptopCode style={{ color: "red", fontSize: "30px" }} />
                        {/* Icon color */}
                    </p>
                    <hr />
                </div>
                <div className="printDivs">
                    <div>
                        <p className="text-lg">Bonnes connaissances en : </p>
                        {Data.skills.map((element, id) => {
                            if (element.range === 2) {
                                return (
                                    <span className="font-bold">
                                        {id === Data.skills.length - 1
                                            ? element.type + "."
                                            : element.type + ", "}
                                    </span>
                                );
                            }
                            return null;
                        })}
                    </div>
                </div>
                <div className="printDivs">
                    <div>
                        <p className="text-lg">Connaissances basiques en : </p>
                        {Data.skills.map((element, id) => {
                            if (element.range === 1) {
                                return (
                                    <span className="font-bold">
                                        {id === Data.skills.length - 2
                                            ? element.type + "."
                                            : element.type + ", "}
                                    </span>
                                );
                            }
                            return null;
                        })}
                    </div>
                </div>

                <SkillBar
                    className="skillBarMargin mt-5"
                    collapsed={false}
                    skills={Data.skills}
                    height={15}
                    colors={Data.colors}
                />
                {Data.softSkills.map((el, id) => {
                    return (
                        <div>
                            <p className="Skills-Title allTitles text-lg">
                                {el.title}
                                <MdTagFaces style={{ color: "red", fontSize: "30px" }} />
                                {/* Icon color */}
                            </p>
                            <hr />
                            <p>{el.items.join(", ")}</p>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default SkillsData;
