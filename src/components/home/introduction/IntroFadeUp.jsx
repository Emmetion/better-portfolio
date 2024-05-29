import { motion, useAnimation, useInView } from "framer-motion"
import { useRef } from "react"

const IntroFadeUp = ({children, delay}) => {

    const ref = useRef(null);
    const isInView = useInView(ref, {});
    const controls = useAnimation();

    const variants = {
        show: {
            y: 0,
            opacity: 1
        },
        hidden: {
            y: -100,
            opacity: 0
        }
    }



    return (
        <motion.div
            initial="hidden"
            animate={controls}>
                {children}
        </motion.div>
    )
}