import React, {useEffect} from 'react';
import './LandingPage.css';
import {motion, stagger, useAnimate} from "framer-motion"

import {useParams} from "react-router-dom";
import EmailFormComponent from "../components/EmailFormComponent";
import ProjectCards from "../components/ProjectCards";
import AnimateContainer from "../components/AnimateContainer";

const LandingPage = ({landingSection}) =>{

    let {section} = useParams();

    const [scope, animate] = useAnimate();


    const codeIntro1= "> Hello World!"
    const codeIntro2= "> I am:"
    const abstractText = "Software Engineering,|,Full Stack Development,|,Machine Learning";

    useEffect(() => {
        landingSection = section;
        const sectionElement = document.getElementById(section);
        sectionElement.scrollIntoView({ block: landingSection === "landing-title" ? "center" : "center", behavior: "smooth" });


        const sequence = [
            [".code-intro1 span", { opacity: 1 }, {delay: stagger(0.04, {startDelay: 0})}],
            [".code-intro2 span", { opacity: 1 }, {delay: stagger(0.04, {startDelay: -0.2})}],
            [".title", {opacity: 1, x: "0px"}, {duration: 0.5}, {ease: "easeOut"}],
            [".abstract span", {opacity: 1, x: "0px"}, {delay: stagger(0.1, {startDelay: -0.3, ease: "easeOut"})}]

        ]
        animate(sequence);

    }, [section]);



    useEffect(() => {

        if(landingSection === "sup") return;
        const sectionElement = document.getElementById(landingSection);
        sectionElement.scrollIntoView({ block: landingSection === "landing-title" ? "center" : "center", behavior: "smooth"});
    }, [landingSection]);

    return (
        <>
            <div ref={scope} className="page">
                <section id="landing-title" className="main span-div">
                    <div className="div-inline-center span-div">
                        <div className="intro-container">
                            <div className="code-intro-container">
                                <div className="code-intro1 coding-font">
                                    {codeIntro1.split("").map((char, index) => (<span key={index}>{char}</span>))}
                                </div>
                                <div className="code-intro2 coding-font">
                                    {codeIntro2.split("").map((char, index) => (<span key={index}>{char}</span>))}
                                </div>
                            </div>
                            <div className="title-container span-div">
                                <motion.div className="title" initial={{x:"50px"}}>
                                    Eli St. James
                                </motion.div>
                                <div className="abstract">
                                    {abstractText.split(",").map((text, index) => (
                                        <motion.span style={{width:"auto"}} key={index} initial={{x:"50px"}}>{text}</motion.span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="div-inline-center">
                        <div id="about-me-container">
                            <AnimateContainer>
                                <div  id="about-me" className="header landing">
                                    About Me
                                </div>
                            </AnimateContainer>
                            <AnimateContainer>
                                <div className="blur-container landing">
                                    <p>I'm a recent graduate software engineer from the University of Calgary,
                                        with a strong passion for web development. Crafting dynamic web pages using
                                        frameworks like React and Angular is where I truly shine. But my skills don't
                                        stop there; I love diving into the worlds of machine learning and DevOps, using
                                        my knowledge to solve complex problems and streamline processes. What drives me?
                                        It's the thrill of innovation and the satisfaction of finding solutions that
                                        make
                                        a real impact. I'm constantly seeking new challenges and opportunities to learn
                                        and grow in this ever-evolving field.</p>
                                </div>
                            </AnimateContainer>
                        </div>
                    </div>
                </section>
                <section id="landing-projects">
                    <div className="span-div">
                        <AnimateContainer>
                            <div className="header landing">
                                Recent Projects
                            </div>
                        </AnimateContainer>
                        <ProjectCards excludeId={-1}></ProjectCards>
                    </div>
                </section>
                <section  id="lets-connect">
                    <div className="div-inline-center span-div" style={{flexDirection: "column"}}>
                            <AnimateContainer>
                                <div className="header landing">Send me a message</div>
                            </AnimateContainer>
                        <div className="lets-connect-form">
                            <div className="blur-container">
                                <EmailFormComponent/>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </>

    );
}

export default LandingPage;