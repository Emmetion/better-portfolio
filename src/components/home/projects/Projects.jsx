import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import FadeUp from '../FadeUp'
import React from "react";

import './Projects.css'
import { FaBoxOpen } from "react-icons/fa";

const Proj = ({item}) => {
    return (
        <div className="project-item">
            <h1 className='project-title'>
                <span>
                    {item.title}
                </span>
            </h1>
            <div className="project-description">
                <p>{item.description}</p>
            </div>
            <div className='project-player'>
                <ReactPlayer 
                    width='90%'
                    height='100%'
                    url={item.demoVideo} 
                    controls
                />
            </div>
            <div style={{marginBottom: "20px"}}/>
        </div>
    )
}

const projects = [
    {
        title: "STM32 Mini-Player Project",
        description: "This project utilized a microcontroller to create a mini music player. There were two forms of inputs implemented, one being a terminal interface, and the other being a physical button interface. The music was played through a square buzzer located on a connected breadboard. This project helped gather understnaindg",
        demoVideo: "https://www.youtube.com/watch?v=6lTjV7rV2Zg"
    },
    {
        title: "NUTRiAPP Application",
        description: "Group project in my Software Engineering class. Our goal was to build a nutritional application using JavaFX, and implementing various design patterns to understand how they're incoorportated a design document. Developed thorough understanding of the process from Design Document to MVP.",
        demoVideo: "https://www.youtube.com/watch?v=Xxa8UBh72EM"
    }, {
        title: "Personal Portfolio",
        description: "This project was created to highlight my experiences and projects. Built using React, Framer Motion, and Reactstrap. This serves to highlight my knowledge of web-development frameworks and technologies.",
        demoVideo: "https://www.youtube.com/watch?v=6lTjV7rV2Zg"
    }
]

export default function Projects() {
    return (
        <div className='projects-container'> 
            <FadeUp>
                <div className='projects-container-title'>
                    <FaBoxOpen size={40}/>
                    <h1>Projects</h1>
                </div>
            </FadeUp>

            <div className="project-format">
                { 
                    projects.map(item => {
                        return (
                            <div className='project-section'>
                                <Proj item={item} key={item.title}/>
                            </div>
                        )
                    }) 
                }
            </div>
        </div>
    )
};
