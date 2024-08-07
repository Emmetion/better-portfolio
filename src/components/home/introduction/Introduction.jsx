import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import EmmetPfp from '../../../assets/Emmet_Pfp.jpg'
import RITLogo from '../../../assets/RIT-Logo.png'
import SideFadeOut from '../SideFadeOut'
import './Introduction.css';

export default function Introduction() {

    const ref = useRef(null);
    const isInView = useInView(ref, {margin: "0 0 -100px"})
    const controls = useAnimation()

    useEffect(() => {
        controls.start(isInView ? 'visible': 'hidden')
    }, [isInView, controls])

    return (
        <div>
            <div id='introduction' className="align-items-center justify-content-center d-flex fd-row vw-10 main-scene">
                <SideFadeOut amount={.2} direction={-1}>
                    <div id='intro-text' style={{marginRight: "10px"}}>
                        <span className="header-text">Hey There!</span>
                        <br/>
                        <p className="body-text" style={{marginBottom: "0px"}}>I'm Emmet, a passionate software developer pursuing a</p>
                        <p className="body-text"><b>Bachelor of Science</b> in <b>Software Engineering</b> @{' '}
                            <motion.a 
                                className="rit-hover"
                                whileHover={{
                                    backgroundColor: "#FFA500", 
                                    borderColor: "#FFA500", 
                                    borderWidth: "5px", 
                                }}
                                transition={{
                                    backgroundColor: { duration: 0 },
                                    borderColor: { duration: 0 },
                                }}
                                initial={{
                                    borderWidth: "0px"
                                }}
                                exit={{
                                    borderWidth: "0px",
                                    borderStyle: "none",
                                }}
                                href="http://rit.edu"
                                target="_blank">
                                <img alt="RIT Logo" src={RITLogo} className="rit-logo"/>RIT!
                            </motion.a>
                        </p>   
                        <p className="body-text" style={{marginBottom: "0px"}}>This website serves as a portfolio of accomplishments</p>
                        <p className="body-text">and other stuff I've made over my software journey.</p>
                    </div>
                </SideFadeOut>
                <SideFadeOut amount={.5} direction={1}>
                    <motion.div
                        animate={{opacity: 1}}
                        transition={{duration: 0.5}}
                        whileHover={{scale: 1.1}}
                    >
                        <img alt="Emmet's Profile" src={EmmetPfp} className="emmet-pfp"/>
                    </motion.div>
                </SideFadeOut>
            </div>
        </div>
    )
}