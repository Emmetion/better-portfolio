import React from "react";
import { motion } from "framer-motion";

import "./Icon.css"

const Icon = ({imageSrc, title, yearsOfExperience, description, style, onClick, primary, isOpen}) => {
    return (
        <div id='icon-container' style={{
            marginLeft: "auto",
            marginRight: "auto",
        }}>
            <motion.div id='icon-item' className="lang-item d-flex flex-column mr-2"
                layout
                onClick={() => onClick()}
                whileHover={() => {
                if (primary === false) return; // Only increase size on Language, not frameworks.
                return {
                    scale: 1.05,
                    transition: { type: "spring", duration: 0.4 }
                }}}
                style={{...style, 
                    borderWidth: "3px", 
                    borderColor: isOpen === true ? "#6ca0dc" : "",
                    cursor: primary ? "pointer" : "default"
                }}>
                <div style={{
                    marginTop: "10px",
                    marginLeft: "10px",
                    textAlign: "left",
                    height: "60px",
                    transformOrigin: "center"
                }} className="d-flex">
                    {/*  Icon */}
                    <img src={imageSrc} title={title} alt={title} className="icon mr-2" style={{
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
                        }}>{yearsOfExperience} of Experience</p>
                    </div>
                </div>
                <div style={{
                    fontSize: "16px"
                }} className="pl-2">
                    <p>{description}</p>
                </div>
                
                <div style={{
                    fontSize: "16px",
                    alignItems: "flex-end",
                    marginTop: "auto", 
                    marginBottom: "9px",
                    paddingLeft: "10px"
                }}>
                    {/* Hideable */}
                    {primary === true ? "Click to view frameworks..." : ""}
                </div>
            </motion.div>
            
        </div>
    )
}


export default Icon;