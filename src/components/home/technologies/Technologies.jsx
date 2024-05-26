import { useState } from "react";
import { useScroll } from "framer-motion";

import FadeUp from "../projects/FadeUp";
import SideFadeOut from "../introduction/SideFadeOut";
const Technologies = () => {

    return (
    <div className="d-block text-center vh-100 vw-100">
        <FadeUp>
            <div className="h1">
                <p className="header-text pb-2">Technologies</p>
            </div>
        </FadeUp>
        <SideFadeOut direction={-1}>
            <div className="body-text">
                <p>During my time as a programer, I've developed many strong skills in programming lanauges, </p>
                <p>softwares, and frameworks alike. Highlighting my greatest experience and minimal experiences.</p>
                <p></p>
            </div> 
        </SideFadeOut>           
    </div>
    )
}

export default Technologies;