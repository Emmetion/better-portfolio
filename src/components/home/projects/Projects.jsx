import { motion } from "framer-motion";

import FadeUp from './FadeUp'

const Projects = () => {

    return (
        <div style={{width: "100%", height: "100vh", backgroundColor: "white"}}> 
            <motion.h1 style={{paddingTop: "1vh", textAlign: "center"}}>
                <FadeUp children={<p>Projects</p>}/>
            </motion.h1>
        </div>
    )
}

export default Projects;