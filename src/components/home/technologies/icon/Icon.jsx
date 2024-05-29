import React from "react";
import { motion } from "framer-motion";

import "./Icon.css"

const Icon = ({imageSrc, title, hoverText, yearsOfExperience, description, frameworks, color, onTechClick}) => {
    return (
        // Image with shadow background.
        <motion.div className="lang-item d-flex flex-column mr-2"
            whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
            }}
            layout
            onClick={e => onTechClick(title)}
            style={{
                backgroundColor: color
            }}
        >
            <div style={{
                marginTop: "10px",
                marginLeft: "10px",
                textAlign: "left",
                height: "60px",
                transformOrigin: "center", // Ensuring the scale happens from the center
            }} className="d-flex">
                {/*  Icon */}
                <img src={imageSrc} title={hoverText} className="icon mr-2" style={{
                    width: "75px",
                    height: "75px",
                    borderRadius: "10px",
                    boxShadow: " 0 6px 5px 0 rgba(0, 0, 0, 0.2)",
                    backgroundColor: "white"
                }}/>
                {/* Title + Years of Experience */}
                <div className='d-flex flex-column'>
                    <p className="h3 pt-0 mb-0 fs-12">{title}</p>
                    <p style={{
                        fontSize: "12px"
                    }}>{yearsOfExperience} years of experience</p>
                </div>
            </div>
            <div style={{
                fontSize: "16px"
            }} className="pl-2">
                <p>{description}</p>
            </div>
            <div style={{
                fontSize: "16px",
                alignItems: "flex-end"
            }} className="pl-2  ">
                {/* Hideable */}
                {/* {
                    frameworks != [] && frameworks !== undefined ? 
                        "Frameworks: " + frameworks.map(item => item.title) : ""
                }    */}
                 {
                    frameworks != [] && frameworks !== undefined ? 
                        "Click to view frameworks..." : ""
                }
            </div>
            <div style={{
                textAlign: "center",
            }}> 
               
            </div>

        </motion.div>
    )
}


export default Icon;