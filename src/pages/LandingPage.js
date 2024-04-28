import React from 'react';
import './LandingPage.css';
import { motion } from "framer-motion"
import ProjectCardComponent from "../components/ProjectCardComponent";
import {ProjectData} from "../data/ProjectData";

const LandingPage = () =>{

    return (
        <>
            <div className="background-texture">

            </div>
            <div className="page">
                <section className="main">
                    <div className="div-inline-center">
                        <div className="">
                            <div>
                                <div className="coding-font">> Hello World!</div>
                                <div className="coding-font">> I am:</div>
                            </div>
                            <div className="title">Eli St. James</div>
                            <div className="abstract">
                                <span>Software Engineer</span>
                                <span>|</span>
                                <span>Full Stack Development</span>
                                <span>|</span>
                                <span>Machine Learning</span>
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
                    <div className="div-inline-center">
                        <div>
                            <div className="header">
                                Recent Projects
                            </div>
                            <div className="projects">
                                {ProjectData.map((project, index) => (
                                    <ProjectCardComponent key={index} title={project.title} description={project.description} images={project.images} url={project.url}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>

    );
}

export default LandingPage;