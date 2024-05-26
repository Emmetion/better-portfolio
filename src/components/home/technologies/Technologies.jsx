import { useState } from "react";
import { useScroll } from "framer-motion";

import './Technologies.css'

import FadeUp from "../projects/FadeUp";
import SideFadeOut from "../introduction/SideFadeOut";

// Icon image imports.
import JavaIcon from '../../../assets/technologies/JavaIcon.webp'
import SpringBoot from '../../../assets/technologies/SpringBoot.png'
import { hover } from "@testing-library/user-event/dist/hover";
import Icon from "./Icon";
import React from "react";

const experienced = [
    {
        imageSrc: JavaIcon,
        title: "Java",
        hoverText: "Java",
        yearsOfExperience: 3,
        description: "Java was the first programming languages I learned, and where I developed a fundamental grasp of programming itself.",
        relatedSoftwares: "Spring Boot, JUnit, ",
    },
    {
        imageSrc: SpringBoot,
        title: "Spring Boot",
        hoverText: "Spring Boot",
        yearsOfExperience: 1,
        description: "",
        relatedSoftwares: ""
    }
]

const Technologies = () => {

    return (
        <div className="d-block text-center vh-100 vw-100">
            <FadeUp>
                <div className="h1">
                    <p className="header-text pb-2 pt-5">Technologies</p>
                </div>
            </FadeUp>
            <SideFadeOut direction={-1}>
                <div className="body-text w-100">
                    <p className="mb-0">During my time as a programer, I've developed many strong skills</p>
                    <p className="mb-0">in different programming lanauges, softwares, and frameworks alike.</p>
                    <p className="mb-0">Here we'll highlight what I believe are my strongest and weakest of each.</p>
                </div> 
            </SideFadeOut>           
            <div className="mt-5 text-left ml-5 h1">
                <p>Experienced</p>    
                <div className="icons fd-row d-flex spacing-10">
                    {experienced.map(({imageSrc, title, hoverText, yearsOfExperience, description, relatedSoftwares}, index) => 
                        <Icon key={index} imageSrc={imageSrc} title={title} hoverText={hoverText} yearsOfExperience={yearsOfExperience} description={description} relatedSoftwares={relatedSoftwares}/>
                    )}
                </div>
            </div>

            <div className="mt-5 text-left ml-5 h1">Moderate</div>
            <div className="mt-5 text-left ml-5 h1">Underdeveloped</div>
            
        </div>
    )
}

export default Technologies;