import { useEffect, useRef, useState } from "react";
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
import HTMLCSSIcon from '../../../assets/technologies/HTMLandCSSIcon.png'
import BootstrapIcon from '../../../assets/technologies/BootstrapIcon.png'
import JavaScriptIcon from '../../../assets/technologies/JavaScriptIcon.svg'
import ReactIcon from '../../../assets/technologies/ReactIcon.png'
import AngularIcon from '../../../assets/technologies/AngularIcon.png'
import CIcon from '../../../assets/technologies/CIcon.png'
import STM32Icon from '../../../assets/technologies/STM32Icon.avif'
import SQLIcon from '../../../assets/technologies/SQLIcon.png'
import PostgresSQLIcon from '../../../assets/technologies/PostgreSQLIcon.png'
import MySQLIcon from '../../../assets/technologies/MySQLIcon.png'

import { FaComputer } from "react-icons/fa6";

import Icon from "./icon/Icon";
import React from "react";
import { motion } from "framer-motion";
import Lang from './lang/Lang'

const languages = [
    {
        imageSrc: JavaIcon,
        title: "Java",
        yearsOfExperience: "3 Years",
        description: "Java was the first programming languages I learned, and where I developed a fundamental grasp of programming itself.",
        frameworks: [
            {
                imageSrc: SpringBoot,
                title: "Spring Boot",
                yearsOfExperience: "~1 Year",
                description: "Used in projects for managing CRUD operations as well as Spring Data JPA for database management.",
                relatedSoftwares: ""
            }, 
            {
                imageSrc: JUnitIcon,
                title: "JUnit 5",
                yearsOfExperience: "~1 Year",
                description: "Used in various projects of mine to cover Unit-Testing. Along with this application I frequently use Jacoco to analyze my code coverage.",
                relatedSoftwares: "",   
        
            }
        ]
    },
    {
        imageSrc: PythonIcon,
        title: "Python",
        yearsOfExperience: "3 Years",
        description: "I've used python in many different ways. Most often I would use to create CRUD methods to manage a database, but I've also used",
        frameworks: [{
            imageSrc: FlaskIcon,
            title: "Flask",
            yearsOfExperience: "~1/2 Year",
            description: "Used in various applications to develop CRUD Applications."
        }]
    },
    {
        imageSrc: HTMLCSSIcon,
        title: "HTML & CSS",
        yearsOfExperience: "~2 Years",
        description: "Made several front-end end applications with using various libraries.",
        frameworks: [{
            imageSrc: BootstrapIcon,
            title: "Bootstrap",
            yearsOfExperience: "2 Months"
        }]
    },
    {
        imageSrc: JavaScriptIcon,
        title: "JavaScript",
        yearsOfExperience: "~1 Year",
        description: "Used in many projects of mine, mostly for front-end development. Developed Discord-bots with it, and many front-end interfaces.",
        frameworks: [
            {
                imageSrc: AngularIcon,
                title: "AngularJS",
                yearsOfExperience: "~1/2 Year",
                description: "Developed several front-end applications with this software, combined with SpringBoot in some of my university projects."
            },
            {
                imageSrc: ReactIcon,
                title: "React",
                yearsOfExperience: "~1/2 Year",
                description: "Used to develop this portfolio website, and some practice apps. Also used throughout some of my university projects."
            }
        ]
    },
    {
        imageSrc: CIcon,
        title: "C",
        yearsOfExperience: "~1 Year",
        description: "Used to develop STM board applications, and experimented with it for use in Windows applications.",
        frameworks: [{
            imageSrc: STM32Icon,
            title: "STM32 ",
            yearsOfExperience: "~1/2 Year",
            description: "Created a MicroController application that acted as a basic Mini-Player for  "
        }]
    },
    {
        imageSrc: SQLIcon,
        title: "SQL",
        yearsOfExperience: ">1 Year",
        description: "My favored database methodology. Used in various projects of mine as a database layer.",
        frameworks: [{
            imageSrc: PostgresSQLIcon,
            title: "PostgreSQL",
            yearsOfExperience: "~1/2 Year",
            description: "Used in a couple of projects, majority of which being university projects. Also used in hackathon project."
        },{
            imageSrc: MySQLIcon,
            title: "MySQL",
            yearsOfExperience: "1 Year"
        }]
    }
]

const Technologies = () => {
    const [frameworks, setFrameworks] = useState([])
    const [title, setTitle] = useState('');

    const controls = useAnimation()

    const onTechClick = async (e) => {
        if (title === e) {
            return;
        }
        setTitle(e);
        let tempFrame = languages.find(item => item.title === e)?.frameworks || []; // New list of Frameworks.
        await console.start('exit');
        setFrameworks(tempFrame);
        await controls.start('reset');
        await controls.start('open');
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
        <div className="d-block text-center" style={{
            backgroundColor: "#E7E7E7",
            maxHeight: "800vh",
            minHeight: "100vh",
            width: "100%"
        }}>
            <FadeUp>
                <div className="h1">
                    <p className="header-text pb-2 pt-5 justify-content-center"><FaComputer className="pb-2"/> Technologies</p>
                </div>
            </FadeUp>
            <FadeUp direction={-1}>
                <div className="body-text w-100">
                    <p className="mb-0">Over the course of my career, I've developed many strong skills</p>
                    <p className="mb-0">in various programming lanauges, softwares, and frameworks alike.</p>
                    <p className="mb-0">Here I'll highlight some of my greatest experiences.</p>
                </div> 
            </FadeUp>           
            <div className="mt-5 text-left ml-5 h1">
                    
                <div className="grid-container justify-content-center">
                    { languages.map(lang => <Lang lang={lang} key={lang.title}/>) }
                </div>
                {/* <motion.div className="icons fd-row d-flex" layout>
                    {languages.map(({imageSrc, title, hoverText, yearsOfExperience, description, frameworks}, index) => 
                        <Icon key={index} imageSrc={imageSrc} title={title} hoverText={hoverText} yearsOfExperience={yearsOfExperience} description={description} frameworksText={true} 
                            onTechClick={onTechClick} style={{borderColor: "#6ca0dc", borderWidth: "4px"}} />
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
                        style={{borderColor: "#6ca0dc", borderWidth: "2px"}} />
                    ) : <></>}
                </motion.div> */}
            </div>
        </div>
    )
}

export default Technologies;