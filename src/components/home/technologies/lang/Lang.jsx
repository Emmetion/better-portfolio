import React, { useCallback, useEffect, useState } from "react"
import Icon from "../icon/Icon"
import { motion, useAnimation } from "framer-motion";
// Represents a Stack in the Technologies section. The top icon is the languagage
const Lang = ({lang}) => {
    const [isOpen, setIsOpen] = useState(false);

    const controls = useAnimation();

    const onTechnologyClick = () => {
        setIsOpen(!isOpen); // Toggler
    }

    const onFrameworkClick = () => {
        setIsOpen(false); // Always closes.
    }

    const containerVariants = {
        hidden: {  
            height: "250px",
        },
        showingOne: {
            height: "450px",
        },
        showingTwo: {
            height: "670px", 
        },
        showingThree: {
            height: "890px"
        }
    }

    const getContainerVariant = useCallback(() => {
        if (lang.frameworks.length === 1) {
            return "showingOne";
        } else if (lang.frameworks.length === 2) {
            return "showingTwo";
        } else if (lang.frameworks.length >= 3) {
            return "showingThree";
        } else {
            return "hidden";
        }
    }, [lang.frameworks.length]);

    const frameworkVariants = {
        hidden: { y: "-120px", opacity: 0, transition: { type: "tween", duration: 0.3 } },
        showingOne: { y: "0px", opacity: 1, transition: { type: "tween", duration: 0.7 } },
        showingTwo: { y: "0px", opacity: 1, transition: { type: "tween", duration: 0.7 } },
        showingThree: { y: "0px", opacity: 1, transition: { type: "tween", duration: 0.7 } }
    }

    useEffect(() => {
        const variant = getContainerVariant();
        controls.start(isOpen ? variant : "hidden");
    }, [isOpen, controls, getContainerVariant]);

    return (
        <div id='lang-section' style={{
            marginLeft: "auto",
            marginRight: "auto",
        }}>
        <motion.div style={{
            height: "70vh",
        }}
            animate={controls}
            initial="hidden"
            variants={containerVariants}
            custom={getContainerVariant()}>
            <div style={{
                zIndex: "1", 
                position: "relative", // Ensure the parent has a relative position
                display: "flex", // Use flexbox
                flexDirection: "column", // Arrange children in a column
                justifyContent: "center", // Center horizontally
                width: "100%",
            }}>
                <Icon onClick={onTechnologyClick}  key={lang.title} isOpen={isOpen} imageSrc={lang.imageSrc} description={lang.description} title={lang.title} yearsOfExperience={lang.yearsOfExperience} style={{}} primary={true}/>
            </div>

            {/* Map list of Frameworks. these will not display unless the main Icon is clicked. */}
            <motion.div
                animate={controls}
                variants={frameworkVariants}
                initial="hidden"
                style={{zIndex: "2"}}>
                { lang.frameworks.map((fw) => 
                    <Icon onClick={onFrameworkClick} key={fw.title} imageSrc={fw.imageSrc} description={fw.description} title={fw.title} yearsOfExperience={fw.yearsOfExperience} style={{marginTop: "20px"}} primary={false}/>
                )} 
            </motion.div>
        </motion.div>
        </div>
    )
}

export default Lang;