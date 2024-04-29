import React, {useEffect} from 'react';
import './LandingPage.css';
import {motion, stagger, useAnimate} from "framer-motion"
import ProjectCardComponent from "../components/ProjectCardComponent";
import {LandingPageProjects} from "../data/ProjectData";
import {useLocation, useParams} from "react-router-dom";

const LandingPage = ({landingSection}) =>{
    const [scope, animate] = useAnimate();
    const {section} = useParams();
    const currentRoute = useLocation();
    const codeIntro1= "> Hello World!"
    const codeIntro2= "> I am:"
    const abstractText = "Software Engineer,|,Full Stack Development,|,Machine Learning"

    useEffect(() => {
        let result = currentRoute.pathname.slice(1);
        landingSection = section;
        const sectionElement = document.getElementById(section);
        sectionElement.scrollIntoView({ block: "center" });


        const sequence = [
            [".code-intro1 span", { opacity: 1 }, {delay: stagger(0.04, {startDelay: 0})}],
            [".code-intro2 span", { opacity: 1 }, {delay: stagger(0.04, {startDelay: -0.2})}],
            [".title", {opacity: 1, x: "0px"}, {duration: 0.5}, {ease: "easeOut"}],
            [".abstract span", {opacity: 1, x: "0px"}, {delay: stagger(0.1, {startDelay: -0.3, ease: "easeOut"})}]

        ]
        animate(sequence);

    }, [section]);

    useEffect(() => {
        const sectionElement = document.getElementById(landingSection);
        sectionElement.scrollIntoView({ block: "center" });
    }, [landingSection]);

    return (
        <>
            <div className="page">
                <section id="landing-title" className="main">
                    <div ref={scope} className="div-inline-center">
                        <div className="intro-container">
                            <div className="code-intro-container">
                                <div className="code-intro1 coding-font">
                                    {codeIntro1.split("").map((char, index) => (<span key={index}>{char}</span>))}
                                </div>
                                <div className="code-intro2 coding-font">
                                    {codeIntro2.split("").map((char, index) => (<span key={index}>{char}</span>))}
                                </div>
                            </div>
                            <div className="title-container">
                                <motion.div className="title" initial={{x:"50px"}}>
                                    Eli St. James
                                </motion.div>
                                <div className="abstract">
                                    {abstractText.split(",").map((text, index) => (
                                        <motion.span key={index} initial={{x:"50px"}}>{text}</motion.span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="about-me">
                    <div className="div-inline-center">
                        <div>
                            <div className="header landing">
                                About Me
                            </div>
                            <div className="blur-container landing">
                                <p>I'm a recent graduate software engineer from the University of Calgary,
                                    with a strong passion for web development. Crafting dynamic web pages using
                                    frameworks like React and Angular is where I truly shine. But my skills don't
                                    stop there; I love diving into the worlds of machine learning and DevOps, using
                                    my knowledge to solve complex problems and streamline processes. What drives me?
                                    It's the thrill of innovation and the satisfaction of finding solutions that make
                                    a real impact. I'm constantly seeking new challenges and opportunities to learn
                                    and grow in this ever-evolving field.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="landing-projects">
                    <div className="span-div">
                        <div className="header landing">
                            Recent Projects
                        </div>
                        <div className="projects">
                            {LandingPageProjects.map((project, index) => (
                                <ProjectCardComponent key={index} id={index} title={project.title} description={project.description} images={project.images}/>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>

    );
}

export default LandingPage;