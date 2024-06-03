import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView, useAnimation } from "framer-motion";

const FadeUp = ({children, bottomMargin, delay, started, setStarted}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {margin: bottomMargin !== undefined ? "0px 0px " + bottomMargin : "", once: true})
    const controls = useAnimation();
    
    useEffect(() => {
        if (isInView || started) {
            controls.start('visible')
            if (setStarted !== undefined && started === false) {
                setStarted(true);
            }
        } else {
            console.log("hidden")
          controls.start('hidden')
        }
    }, [isInView, controls, started, setStarted]); 
    
    useEffect(() => {
        if (started) {
            controls.start("visible");
        }
    }, [started, controls]);

    const variants = {
        visible: {
            opacity: 1,
            y: 0,
        },
        hidden: {
            opacity: 0,
            y: 50
        }
    }

    return (
        <motion.div 
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{delay: delay}}>
            {children}
        </motion.div>
    )
}

export default FadeUp;