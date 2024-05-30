import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView, useAnimate, MotionConfig, DragControls, useAnimation } from "framer-motion";

const FadeUp = ({children}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {margin: "0px 0px -100px", once: true})
    const controls = useAnimation();
    
    useEffect(() => {
        if (isInView) {
          controls.start('visible')
        } else {
          controls.start('hidden')
        }
      }, [isInView]); // Observe the ref on change
    console.log(isInView)
    const variants = {
        visible: {
            opacity: 1,
            y: 0
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
            animate={controls}>
            {children}
        </motion.div>
    )
}

export default FadeUp;