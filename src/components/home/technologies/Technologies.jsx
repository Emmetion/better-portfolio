import { useEffect, useState } from "react";
import { frame, m, useAnimate, useAnimation, useScroll } from "framer-motion";

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
import ReactIcon from '../../../assets/technologies/ReactIcon.png'
import AngularIcon from '../../../assets/technologies/AngularIcon.png'
import CIcon from '../../../assets/technologies/CIcon.png'
import STM32Icon from '../../../assets/technologies/STM32Icon.avif'

import { FaComputer } from "react-icons/fa6";

import Icon from "./icon/Icon";
import React from "react";
import { motion } from "framer-motion";
import { wait } from "@testing-library/user-event/dist/utils";

const languages = [
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
        hoverText: "Python",
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
        frameworks: [
            {
                imageSrc: AngularIcon,
                title: "AngularJS",
                hoverText: "AngularJS",
                yearsOfExperience: "~1/2",
                description: "Developed several front-end applications with this software, combined with SpringBoot in some of my university projects."
            },
            {
                imageSrc: ReactIcon,
                title: "React",
                hoverText: "React",
                yearsOfExperience: "~1/2",
                description: "Used to develop this portfolio website, and some practice apps. Also used throughout some of my university projects."
            }
        ]
    },
    {
        imageSrc: CIcon,
        title: "C",
        hoverText: "C",
        yearsOfExperience: "~1",
        description: "Used to develop STM board applications, and experimented with it for use in Windows applications.",
        frameworks: [{
            imageSrc: STM32Icon,
            title: "STM32 MicroController",
            hoverText: "STM32 MicroController",
            yearsOfExperience: "~1/2",
            description: "Created a MicroController application with basic ability to play songs and "
        }]
    }
]

const Technologies = () => {

    const [frameworks, setFrameworks] = useState([]);
    const [inAnimation, setInAnimation] = useState(false);

    const controls = useAnimation()

    const onTechClick = (e) => {
        let tempFrame = languages.find(item => item.title === e)?.frameworks || []; // New list of Frameworks.
        controls.start('exit').then(() => {
            setFrameworks(tempFrame);
            controls.start('reset').then(() => {
                controls.start('open');
            })
            console.log("EXITED")
            console.log("CLOSED")
        })
    }



    const variants = {
        open: {
            x: 0,
            transition: {
                type: "tween",
                stiffness: 100,
                duration: .5
            },
            opacity: 1,

        },
        closed: {
            x: -400,   
            opacity: 0 
        },
        exit: {
            x: 400,
            opacity: 0
        },
        reset: {
            x: -400,
            opacity: 0,
            transition: {duration: 0.1}
        }
    }


    

    return (
        <div className="d-block text-center vh-100 vw-100" style={{
            backgroundColor: "#AFDDE5"
        }}>
            <FadeUp>
                <div className="h1">
                    <p className="header-text pb-2 pt-5 justify-content-center"><FaComputer className="pb-2"/> Technologies</p>
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
                    {languages.map(({imageSrc, title, hoverText, yearsOfExperience, description, frameworks}, index) => 
                        <Icon key={index} imageSrc={imageSrc} title={title} hoverText={hoverText} yearsOfExperience={yearsOfExperience} description={description} frameworks={frameworks} 
                            onTechClick={onTechClick}/>
                    )}
                </motion.div>
                <motion.div
                    variants={variants}
                    initial="closed"
                    style={{
                        height: "300px",
                        width: "100%",
                        display: "flex",
                        flex: "row",
                        alignItems: "center",
                        justifyContent: "center"
                        
                    }}
                    transition={{
                        opacity: 0.3
                    }}
                    animate={controls}
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