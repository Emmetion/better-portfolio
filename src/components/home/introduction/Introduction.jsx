import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView, useScroll } from "framer-motion";
import { Col, Row } from "reactstrap";
import EmmetPfp from '../../../assets/Emmet_Pfp.jpg'
import RITLogo from '../../../assets/RIT-Logo.png'
import './Introduction.css';
import SideFadeOut from './SideFadeOut'
const Introduction = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, {margin: "0 0 -200px"})
    const controls = useAnimation()

    useEffect(() => {
        if (isInView) {
            controls.start('visible')
        } else {
            controls.start('hidden')
        }
    }, [isInView])

    return (
        <div>
            <div className="align-items-center justify-content-center d-flex fd-row vw-10" style={{backgroundColor: "#AFDDE5", height: "105vh"}}>

                {/* <motion.div
                    initial={{x: -300, opacity: 0.1}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.5}}
                > */}
                <SideFadeOut direction={-1}>
                    <span className="header-text">Hey There!</span>
                    <p className="body-text" style={{marginBottom: "0px"}}>I'm Emmet, a passionate software developer pursueing</p>
                    <p className="body-text"> a <b>Bachelors of Software Engineering</b> @{' '}
                        <motion.a 
                            whileHover={{
                                        backgroundColor: "#FFA500", 
                                        borderColor: "#FFA500", 
                                        borderWidth: "5px", 
                                        color: "white"
                                        }}
                            
                            style={{
                                textDecoration: "none",
                                color: "black",
                                borderRadius: "10px",
                                borderStyle: "solid",
                                borderColor: "#AFDDE5",
                                transition: "border-width 0s, border-width 0s, border-color 0s, background-color 0s" // Adding transition properties here
                            }}
                            transition={{
                                backgroundColor: { duration: 0 },
                                borderColor: { duration: 0 },
                                // borderWidth: { duration: 0.3 }
                            }}
                            initial={{
                                borderWidth: "0px"
                            }}
                            exit={{
                                borderWidth: "0px",
                                borderStyle: "none",
                                
                                // borderStyle: "none"
                            }}
                            href="http://rit.edu">
                            <img src={RITLogo} style={{width: "30px", height: "30px", marginRight: "3px", marginBottom: "2px"}}/>RIT!
                        </motion.a>
                    </p>   
                    <p className="body-text" style={{marginBottom: "0px"}}>This website serves as a portfolio of accomplishments</p>
                    <p className="body-text">and other stuff I've made over my software journey.</p>
                </SideFadeOut>
                {/* </motion.div> */}
                <SideFadeOut direction={1}>
                    <motion.div
                        initial={{x: 300, opacity: 0.1}}
                        animate={{x: 0, opacity: 1}}
                        transition={{duration: 0.5}}
                        whileHover={{scale: 1.1}}
                    >
                        <img src={EmmetPfp} style={{width: "300px", height: "300px", borderRadius: "10%"}} className="emmet-pfp"/>
                    </motion.div>
                </SideFadeOut>
                
            </div>
            <div style={{
                textAlign: "center"
            }}>

            </div>
        </div>
    )
}

export default Introduction;