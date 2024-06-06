import ReactPlayer from "react-player";
import FadeUp from '../FadeUp'
import React from "react";

import './Projects.css'
import { VscVscode } from "react-icons/vsc";

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
        demoVideo: "https://www.youtube.com/watch?v=U6mSkunXqNc"
    },
    {
        title: "NUTRiAPP Application",
        description: "Group project in my Software Engineering class. Our goal was to build a nutritional application using JavaFX, and implementing various design patterns to understand how they're incoorportated a design document. Developed thorough understanding of the process from Design Document to MVP.",
        demoVideo: "https://www.youtube.com/watch?v=Xxa8UBh72EM",
        language: "Java",
        libraries: "JavaFX, Maven, JUnit, Mockito, Git, "
    }, {
        title: "Personal Portfolio",
        description: "Personal project showcasing my understanding of the React Framework and other libraries like Framer Motion.",
        demoVideo: "https://www.youtube.com/watch?v=6lTjV7rV2Zg"
    }, {
        title: "RapidTransfer",
        description: "This was a Hackathon Project. Our goal was to create an application that allows for file-transfers to occur through a terminal, via friend-codes. Our main-priority of the project was to learn a new language, not so much win an award. The application was written in Golang and utilized various libraries as well as Google Cloud.",
        demoVideo: "https://www.youtube.com/watch?v=6lTjV7rV2Zg"
    }
]

export default function Projects() {
    return (
        <div className='projects-container'> 
            <FadeUp>
                <div className="h1">
                    <p className="header-text pb-2 pt-5 justify-content-center text-center"><VscVscode className="pb-2" size={50}/>Projects</p>
                </div>
                {/* <div className='projects-container-title'>
                    <VscVscode size={40} style={{marginTop: "7px"}}/>
                    <h1 className='header-text'>Projects</h1>
                </div> */}
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
