import { useEffect, useState } from "react";
import { m, useScroll } from "framer-motion";

import './Technologies.css'

import FadeUp from "../projects/FadeUp";
import SideFadeOut from "../introduction/SideFadeOut";

// Icon image imports.
import JavaIcon from '../../../assets/technologies/JavaIcon.webp'
import SpringBoot from '../../../assets/technologies/SpringBoot.png'
import JUnitIcon from '../../../assets/technologies/JUnit5.png'
import PythonIcon from '../../../assets/technologies/PythonIcon.png'
import FlaskIcon from '../../../assets/technologies/FlaskIcon.png'
import JavaScriptIcon from '../../../assets/technologies/JavaScriptIcon.svg'
import CIcon from '../../../assets/technologies/CIcon.png'

import Icon from "./icon/Icon";
import React from "react";
import { motion } from "framer-motion";

const experienced = [
    {
        imageSrc: JavaIcon,
        title: "Java",
        hoverText: "Java",
        yearsOfExperience: 3,
        description: "Java was the first programming languages I learned, and where I developed a fundamental grasp of programming itself.",
        frameworks: [
            {
                imageSrc: SpringBoot,
                title: "Spring Boot",
                hoverText: "Spring Boot",
                yearsOfExperience: "~1",
                description: "Used in projects for managing CRUD operations as well as Spring Data JPA for database management.",
                relatedSoftwares: ""
            }, 
            {
                imageSrc: JUnitIcon,
                title: "JUnit 5",
                hoverText: "JUnit 5",
                yearsOfExperience: "~1",
                description: "Used in various projects of mine to cover Unit-Testing. Along with this application I frequently use Jacoco to analyze my code coverage.",
                relatedSoftwares: "",   
        
            }
        ]
    },
    {
        imageSrc: PythonIcon,
        title: "Python",
        hovertext: "Python",
        yearsOfExperience: 3,
        description: "I've used python in many different ways. Most often I would use to create CRUD methods to manage a database, but I've also used",
        frameworks: [{
            imageSrc: FlaskIcon,
            title: "Flask",
            hoverText: "Flask",
            yearsOfExperience: "~1/2",
            description: "Used in various applications to develop CRUD Applications."
        }]
    },
    {
        imageSrc: JavaScriptIcon,
        title: "JavaScript",
        hoverText: "JavaScript",
        yearsOfExperience: "~1",
        description: "Used in many projects of mine, mostly for front-end development. Developed Discord-bots with it, and many front-end interfaces.",
        frameworks: []
    },
    {
        imageSrc: CIcon,
        title: "C",
        hoverText: "C",
        yearsOfExperience: "~1",
        description: "Used to develop STM board applications, and experimented with it for use in Windows applications.",
        frameworks: [{
            imageSrc: "",
        }]
    }
]

const Technologies = () => {

    const [frameworks, setFrameworks] = useState([]);
    const [selectedTitle, setSelectedTitle] = useState('');

    const onTechClick = (e) => {
        if (selectedTitle === e) {
            setFrameworks([]);
            setSelectedTitle('')
            return;
        }
        let tempFrame = experienced.find(item => item.title === e)?.frameworks || [];
        setFrameworks(tempFrame);
        setSelectedTitle(e)
    }

    useEffect(() => {
        return () => {
            return selectedTitle === '' ? "closed" : "open";
        } 
    }, [frameworks]);
    

    return (
        <div className="d-block text-center vh-100 vw-100" style={{
            backgroundColor: "#AFDDE5"
        }}>
            <FadeUp>
                <div className="h1">
                    <p className="header-text pb-2 pt-5">Technologies</p>
                </div>
            </FadeUp>
            <SideFadeOut direction={-1}>
                <div className="body-text w-100">
                    <p className="mb-0">During my time as a programer, I've developed many strong skills</p>
                    <p className="mb-0">in various programming lanauges, softwares, and frameworks alike.</p>
                    <p className="mb-0">Here I'll highlight my strongest and weakest of each.</p>
                </div> 
            </SideFadeOut>           
            <div className="mt-5 text-left ml-5 h1">
                <p className="h2">Languages</p>    
                <motion.div className="icons fd-row d-flex spacing-10" layout>
                    {experienced.map(({imageSrc, title, hoverText, yearsOfExperience, description, relatedSoftwares}, index) => 
                        <Icon key={index} imageSrc={imageSrc} title={title} hoverText={hoverText} yearsOfExperience={yearsOfExperience} description={description} relatedSoftwares={relatedSoftwares} 
                            onTechClick={onTechClick}/>
                    )}
                </motion.div>
                <motion.div
                    variants={{
                        open: {
                            scaleY: 1,
                        },
                        closed: {
                            scaleY: 0,
                        },
                    }}
                    initial="closed"
                    style={{
                        height: "300px",
                        width: "100%",
                        display: "flex"
                    }}
                    animate={frameworks == [] ? "closed" : "open"}
                    // transition={{
                    //     scaleY: { duration: 1 },
                    // }}
                    layout>
                    { frameworks != [] && frameworks !== undefined ? frameworks.map(({imageSrc, title, hoverText, yearsOfExperience, description, relatedSoftwares}, index) => 
                        <Icon key={index} imageSrc={imageSrc} title={title} hoverText={hoverText} yearsOfExperience={yearsOfExperience} description={description} relatedSoftwares={relatedSoftwares} 
                            onTechClick={onTechClick} color={"gold"}/>
                    ) : <></>}
                </motion.div>
            </div>
        </div>
    )
}

export default Technologies;