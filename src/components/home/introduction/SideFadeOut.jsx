import { MotionConfig, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react"
import { motion } from "framer-motion";
const SideFadeOut = ({children, direction}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: .6, once: false}) // 70% in view = INVIEW

    const controls = useAnimation();
    const variants = {
        hidden: {
            opacity: 0,
            x: (direction * 200),
        },
        visible: {
            opacity: 1,
            x: 0
        }
    }

    useEffect(() => {
        console.log(isInView)
        controls.start(isInView ? "visible" : "hidden");
    }, [isInView]);


    return (<motion.div
        ref={ref}
        variants={variants}
        animate={controls}
        transition={{duration: 0.5}}>
            {children}
    </motion.div>)
}

export default SideFadeOut;