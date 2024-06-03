import { useEffect, useRef, useState } from "react";
import { frame, m, useAnimate, useAnimation, useScroll } from "framer-motion";

import './Technologies.css'

import FadeUp from "../FadeUp";

// Icon image imports.
import JavaIcon from '../../../assets/technologies/JavaIcon.webp'
import SpringBoot from '../../../assets/technologies/SpringBoot.png'
import JUnitIcon from '../../../assets/technologies/JUnit5.png'
import MavenIcon from '../../../assets/technologies/MavenIcon.svg'
import PythonIcon from '../../../assets/technologies/PythonIcon.png'
import FlaskIcon from '../../../assets/technologies/FlaskIcon.png'
import MatPlotLibIcon from '../../../assets/technologies/MatPlotLibIcon.png'
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

import FileIcon from '../../../assets/technologies/FileIcon.png'
import JacksonIcon from '../../../assets/technologies/JacksonIcon.webp'
import CSVIcon from '../../../assets/technologies/CSVIcon.png'


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
            }, 
            {
                imageSrc: JUnitIcon,
                title: "JUnit 5",
                yearsOfExperience: "~1 Year",
                description: "Used in various projects of mine to cover Unit-Testing. Along with this application I frequently use Jacoco to analyze my code coverage.",
            },
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
        },{
            imageSrc: MatPlotLibIcon,
            title: "MatPlotLib",
            yearsOfExperience: "~1/4 Year",
            description: "Utilized in University classes for data analysis. Limited experience but gathered solid understanding of how powerful Python is."
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
            yearsOfExperience: "2 Months",
            description: "Utilized in the development of this website, in conjunction with react-strap.",
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
            description: "Created a MicroController application that acted as a basic audio Mini-Player. Providing controls for both a remote and physical user. See projects below. "
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
            yearsOfExperience: "1 Year",
            description: ""
        }]
    },{
        imageSrc: FileIcon,
        title: "File Formats",
        yearsOfExperience: "Many Years",
        description: "Almost all my projects involved many types of file formats. Here I highlight some major data storing formats.",
        frameworks: [
            {
                imageSrc: JacksonIcon,
                title: "Jackson",
                yearsOfExperience: "~3 Months",
                description: "Various mini-projects from both University and Personal projects utilized this library as a file-storage database."
            },
            {
                imageSrc: CSVIcon,
                title: "CSV",
                yearsOfExperience: "~1 Year",
                description: "Used in various data-analytic projects."
            }
        ]
    }
]

const Technologies = () => {
    const [frameworks, setFrameworks] = useState([])
    const [title, setTitle] = useState('');
    const [started, setStarted] = useState(false)

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

    let langCount = 0;

    return (
        <div className="d-block text-center" style={{
            backgroundColor: "#E7E7E7",
            maxHeight: "800vh",
            minHeight: "100vh",
            width: "100%"
        }}>
            <FadeUp bottomMargin="-50px">
                <div className="h1">
                    <p className="header-text pb-2 pt-5 justify-content-center"><FaComputer className="pb-2"/> Technologies</p>
                </div>
            </FadeUp>
            <FadeUp bottomMargin="-50px" direction={-1}>
                <div className="body-text w-100">
                    <p className="mb-0">Over the course of my career, I've developed many strong skills</p>
                    <p className="mb-0">in various programming lanauges, softwares, and frameworks alike.</p>
                    <p className="mb-0">Here I'll highlight some of my greatest experiences.</p>
                </div> 
            </FadeUp >           
            <div className="mt-5 text-left ml-5 h1">
                <div className="grid-container justify-content-center">
                    { languages.map(lang => {
                        langCount++;
                        return (
                        <FadeUp bottomMargin={"0px"} setStarted={setStarted} started={started} delay={langCount * 0.2}>
                            <Lang lang={lang} key={lang.title}/>
                        </FadeUp>
                        )
                    }) }
                </div>
            </div>
        </div>
    )
}

export default Technologies;