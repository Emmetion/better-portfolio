import { MotionConfig, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react"
import { motion } from "framer-motion";
const SideFadeOut = ({children, amount, direction, style}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: amount, once: false})

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
        transition={{duration: 0.5}}
        style={style}>
            {children}
    </motion.div>)
}

export default SideFadeOut;