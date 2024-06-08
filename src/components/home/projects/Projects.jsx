import ReactPlayer from "react-player";
import FadeUp from '../FadeUp'
import React from "react";

import './Projects.css'
import { VscVscode } from "react-icons/vsc";
import { Button } from "reactstrap";
import { FaCodeBranch } from "react-icons/fa6";
import RapidTransferImage from '../../../assets/projects/RapidTransferImage.png'

const Proj = ({item}) => {
    return (
        <div className="project-wrapper">
            <div className="project-item">
                <h1 className='project-title'>
                    <span>
                        {item.title} {' '}
                        {
                            item.github && ( <a href={item.github} target="_blank" rel='noreferrer'>
                                <Button style={{marginBottom: "7px"}} color="primary"><FaCodeBranch size={15}/>{' '}GitHub</Button>
                            </a>)
                        }
                    </span>
                </h1>
                
                <div className="project-description">
                    <p>{item.description}</p>
                </div>
                {
                    item.demoVideo && (
                    <div className='project-player'>
                        <ReactPlayer 
                            width='90%'
                            height='100%'
                            url={item.demoVideo} 
                            controls
                        />
                    </div>
                    )
                }
                {
                    item.image && (
                        <img src={item.image} style={{
                            width: "90%",
                            height: "400px"
                        }} alt={item.imagetext}/>
                    )
                }

            
                <div style={{marginBottom: "20px"}}/>
            </div>
        </div>
    )
}

const projects = [
    {
        title: "STM32 Mini-Player Project",
        description: "Developed on a MicroController to create a Mini Music Player. Two forms of inputs were implemented, the first of which being a terminal interface, the other being a physical button interface. The notes were played through a square buzzer located on a connected breadboard. This project was a lot of fun because of it's limitations. A lot of challanges came with the single-threaded limitation of the MicroController, but super fun when  ",
        demoVideo: "https://www.youtube.com/watch?v=U6mSkunXqNc",
    },
    {
        title: "NUTRiAPP Application",
        description: "Group project in my Software Engineering class. Our goal was to build a nutritional application using JavaFX, and implementing various design patterns to understand how they're incoorportated a design document. Developed thorough understanding of the process from Design Document to MVP.",
        demoVideo: "https://www.youtube.com/watch?v=Xxa8UBh72EM",
        language: "Java",
        libraries: "JavaFX, Maven, JUnit, Mockito, Git",
    }, 
    // {
    //     title: "Personal Portfolio",
    //     description: "Personal project showcasing my understanding of the React Framework and other libraries like Framer Motion.",
    //     github: "https://github.com/Emmetion/better-portfolio",
    // }, 
    // {
    //     title: "Wells Plugin",
    //     description: "A Minecraft Plugin written using the SpigotAPI. The goal of the project was to create new way for users in a minecraft server to interact and birng a community feel to the already existing plugin Towny.",
    //     github: "https://"
    // },
    {
        title: "RapidTransfer",
        description: "This was a Hackathon Project. My teams goal was to create an application that allowed file-transfers to occur through terminal, via friend-codes. Each user of the application was granted a code to use the app, generated via MAC Address on the device. Our Main Priority in building the Application was to learn a new Language (Golang). The application utilized various libraries as well as Google Cloud.",
        github: "https://github.com/OrestesK/RapidTransfer",
        image: RapidTransferImage
    }
]

export default function Projects() {
    const handleScroll = (event) => {
        const container = event.target;
        const scrollAmount = event.deltaY;
        container.scrollTo({
          top: 0,
          left: container.scrollLeft + scrollAmount,
          behavior: 'smooth'
        });
    };
    
    return (
        <div className='projects-container'> 
            <FadeUp>
                <div className="h1">
                    <p className="header-text pb-2 pt-5 justify-content-center text-center">
                        <VscVscode className="pb-2" size={50}/>Projects
                    </p>
                </div>
            </FadeUp>
            <div className="project-format" onWheel={e => handleScroll(e)}>
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
