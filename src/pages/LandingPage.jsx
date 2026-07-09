import React, {useCallback, useEffect, useLayoutEffect, useRef} from 'react';
import './LandingPage.css';
import {motion, stagger, useAnimate} from "framer-motion"

import {useParams} from "react-router-dom";
import EmailFormComponent from "../components/EmailFormComponent";
import ProjectCards from "../components/ProjectCards";
import AnimateContainer from "../components/AnimateContainer";

const LandingPage = ({scrollTarget}) =>{

    const {section} = useParams();

    const [scope, animate] = useAnimate();
    const mounted = useRef(false);


    const codeIntro1= "> Hello World!"
    const codeIntro2= "> I am:"
    const abstractText = "Software Engineering,|,Full Stack Development,|,Product Management";

    const scrollToSection = useCallback((id, behavior) => {
        const sectionElement = document.getElementById(id);
        if (!sectionElement) return;
        sectionElement.scrollIntoView({block: "center", behavior});
    }, []);

    // The URL owns the scroll position on arrival. This jumps rather than
    // animates: the browser preserves the scroll offset across a route change,
    // so a smooth scroll here would slide up from wherever the project page was
    // left instead of simply landing on the requested section.
    useLayoutEffect(() => {
        scrollToSection(section, "auto");
    }, [section, scrollToSection]);

    // Nav clicks scroll without changing the route, and those should animate.
    // Skipping the first run keeps a stale target from fighting the arrival
    // scroll above on mount.
    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
            return;
        }
        if (!scrollTarget) return;
        scrollToSection(scrollTarget.section, "smooth");
    }, [scrollTarget, scrollToSection]);

    useEffect(() => {
        animate([
            [".code-intro1 span", { opacity: 1 }, {delay: stagger(0.04, {startDelay: 0})}],
            [".code-intro2 span", { opacity: 1 }, {delay: stagger(0.04, {startDelay: -0.2})}],
            [".title", {opacity: 1, x: "0px"}, {duration: 0.5}, {ease: "easeOut"}],
            [".abstract span", {opacity: 1, x: "0px"}, {delay: stagger(0.1, {startDelay: -0.3, ease: "easeOut"})}]
        ]);
    }, [animate]);

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
                                    <p style={{fontSize:"18px"}}>I'm a full-stack software engineer and a software engineering graduate of
                                        the University of Calgary. For the last two years I was at cofi.ai, an early-stage fintech startup building an
                                        AI SaaS platform for private-equity firms. I joined on the frontend and grew into owning features end to end,
                                        scoping them with customer stakeholders, building them across the stack, and shipping them to production.
                                    </p>
                                    <br/>
                                    <p style={{fontSize:"18px"}}>I was the primary author of the product's full frontend rebuild in Vue 3, Nuxt and
                                        TypeScript, along with its design-system component library, and I built its most complex features: an AI chat
                                        assistant, interactive dashboards, and spreadsheet-style data grids that clients used every day. On the backend
                                        I wired up third-party data integrations with Nango and built data-transformation and workflow pipelines. Over
                                        the past year I planned and shipped large features independently using agentic development tools like Claude Code,
                                        with automated review gates in CI.
                                    </p>
                                    <br/>
                                    <p style={{fontSize:"18px"}}>Working at a startup taught me to move fast, own what I ship, and pay attention to why
                                        a feature matters to the business, not just how it's built. In my spare time I fish, play hockey, and if I'm bored,
                                        see if I can think of the next big app idea. I'm looking for my next full-stack or product engineering role on a
                                        team that ships and cares about craft, and I'm open to remote and Toronto-area work.
                                    </p>
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