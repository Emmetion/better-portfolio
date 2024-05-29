import { motion } from "framer-motion";

import FadeUp from './FadeUp'
import HorizontalScroller from "./HorizontalScroller";

const Projects = () => {

    return (
        <div style={{width: "100%", height: "100vh", backgroundColor: "white"}}> 
            <motion.div>

                <motion.h1 style={{paddingTop: "1vh", textAlign: "center"}}>
                    <FadeUp children={<p>Projects</p>}/>
                </motion.h1>
            </motion.div>
            
            <HorizontalScroller/>
        </div>
    )
}

export default Projects;