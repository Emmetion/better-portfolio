import React from "react";
import './NewHeader.css'

export function NewHeader() {
    return (
        <div className="pt-5">
            <div className="text-center text-decoration-none display-6">
                <a href="/home" className="no-highlight">Home</a>
                <b> | </b>
                <a href="/technologies" className="no-highlight">Technologies</a>
                <b> | </b>
                <a href="/projects" className="no-highlight">Projects</a>
                <b> | </b>
                <a href="/contact" className="no-highlight">Contact</a>
            </div>
        </div>
    )
}