import React, {useEffect} from 'react';
import './LandingPage.css';
import {motion, stagger, useAnimate} from "framer-motion"
import ProjectCardComponent from "../components/ProjectCardComponent";
import {ProjectData} from "../data/ProjectData";

const LandingPage = () =>{
    const [scope, animate] = useAnimate();

    const codeIntro1= "> Hello World!"
    const codeIntro2= "> I am:"
    const abstractText = "Software Engineer,|,Full Stack Development,|,Machine Learning"

    useEffect(() => {
        const sequence = [
            [".code-intro1 span", { opacity: 1 }, {delay: stagger(0.04, {startDelay: 0})}],
            [".code-intro2 span", { opacity: 1 }, {delay: stagger(0.04, {startDelay: -0.2})}],
            [".title", {opacity: 1, x: "0px"}, {duration: 0.5}, {ease: "easeOut"}],
            [".abstract span", {opacity: 1, x: "0px"}, {delay: stagger(0.1, {startDelay: -0.3, ease: "easeOut"})}]

        ]
        animate(sequence);
    }, []);

    return (
        <>
            <div className="background-texture">

            </div>
            <div className="page">
                <section className="main">
                    <div ref={scope} className="div-inline-center">
                        <div className="intro-container">
                            <div className="code-intro-container">
                                <div className="code-intro1 coding-font">
                                    {codeIntro1.split("").map(char => (<span>{char}</span>))}
                                </div>
                                <div className="code-intro2 coding-font">
                                    {codeIntro2.split("").map(char => (<span>{char}</span>))}
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
                                    {/*<span>Software Engineer</span>*/}
                                    {/*<span>|</span>*/}
                                    {/*<span>Full Stack Development</span>*/}
                                    {/*<span>|</span>*/}
                                    {/*<span>Machine Learning</span>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="div-inline-center">
                        <div>
                            <div className="header">
                                About Me
                            </div>
                            <div className="blur-container">
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
                <section>
                    <div className="span-div">
                        <div className="header">
                            Recent Projects
                        </div>
                        <div className="projects">
                            {ProjectData.map((project, index) => (
                                <ProjectCardComponent key={index} title={project.title} description={project.description} images={project.images} url={project.url}/>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>

    );
}

export default LandingPage;