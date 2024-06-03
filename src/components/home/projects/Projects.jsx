import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import FadeUp from '../FadeUp'

const Proj = ({item}) => {
    return (
        <div style={{
            height: "500px",
            width: "700px",
            borderColor: "black",
            borderStyle: "solid",
            borderWidth: "1px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
}}>
            <h1>{item.title}</h1>
            <div style={{
                paddingLeft: "50px",
                paddingRight: "50px",
            }}>
                <p>{item.description}</p>
            </div>

            <ReactPlayer url={item.demoVideo} controls />
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
        <div style={{width: "100%", height: "100vh", backgroundColor: "white"}}> 
            <motion.h1 style={{paddingTop: "50px", textAlign: "center"}}>
                <FadeUp>
                    <p>Projects</p>
                </FadeUp>
            </motion.h1>


            {/* List of Project Cards */}
            <div style={{
                alignContent: "center",
                justifyContent: "center",
                display: "flex",
                gap: "50px",
            }}>
                {projects.map((item, index) => {
                    return (
                        <Proj item={item} key={index}/>
                    )
                })}
            </div>
        </div>
    )
};
