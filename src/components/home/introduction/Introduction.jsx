import { motion } from "framer-motion";
import EmmetPfp from '../../../assets/Emmet_Pfp.jpg'
import RITLogo from '../../../assets/RIT-Logo.png'
import SideFadeOut from '../SideFadeOut'
import './Introduction.css';
import { FaCodeBranch, FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Introduction() {
    return (
        <div className="main-scene" style={{paddingTop: "24vh"}}>
            <div id='introduction' className="align-items-center justify-content-center d-flex fd-row vw-10">
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
                        <div className="m-1 d-flex flex-row gap-3">
                            <FaLinkedin size={40} className="icon-hover"/>
                            <FaGithub size={40} className="icon-hover"/>
                            <FaCodeBranch size={40} className="icon-hover"/>
                        </div>
                    </div>
                </SideFadeOut>
                <SideFadeOut amount={.5} direction={1}>
                    <div>
                        <img alt="Emmet's Profile" src={EmmetPfp} className="emmet-pfp"/>
                    </div>
                </SideFadeOut>
            </div>
        </div>
    )
}