import {ProjectData} from "../components/ProjectData";
import {useParams} from "react-router-dom";
import React, {useLayoutEffect} from "react";
import {SectionType} from "../components/ProjectData";
import "./ProjectPage.css";
import AnimateContainer from "../components/AnimateContainer";
import PointGridComponent from "../components/PointGridComponent";
import SectionMedia from "../components/SectionMedia";
import SubSectionsComponent from "../components/SubSectionsComponent";


const ProjectPage = () =>{
    const { id } = useParams();
    const project = ProjectData[id];

    // The browser keeps the scroll offset across a client-side route change, so
    // arriving from a scrolled landing page would drop you into the middle of
    // this one. Before paint, not after, or the wrong position flashes first.
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    return (
        <div className="page">
            {project.sections.map((section, index) => {
                switch(section.sectionType) {
                    case SectionType.main:
                        return(
                            <AnimateContainer key={index}>
                                <section  className="main">
                                    <div className="side-to-side-div main">
                                        <div className="page-title">
                                            {project.title}
                                        </div>
                                        <div className="image-container">
                                            <SectionMedia className="section-image main"
                                                          image={project.images[section.imageIndex]}
                                                          alt={project.title}
                                                          eager/>
                                        </div>
                                    </div>
                                </section>
                            </AnimateContainer>
                        );
                    case SectionType.mainImage:
                        return(
                            <AnimateContainer key={index}>
                                <section className="main">
                                    <div className="div-inline-center span-div">
                                        {/* This image is the whole hero, so it carries the page's
                                            accessible name — section.header is empty here. */}
                                        <SectionMedia className="section-image fill"
                                                        image={project.images[section.imageIndex]}
                                                        alt={project.title}
                                                        eager/>
                                    </div>
                                    <div className="span-div"></div>
                                </section>
                            </AnimateContainer>
                        );
                    case SectionType.multiParagraph:
                        return (
                            <AnimateContainer key={index}>
                                <section>
                                    <div className="span-div">
                                        <div className="header">
                                            {section.header}
                                        </div>
                                        <div className="blur-container">
                                            {section.paragraphs.map((paragraph, index) => (
                                                <div key={index}><p key={index}>{paragraph}</p><br/></div>

                                            ))}
                                        </div>
                                    </div>
                                </section>
                            </AnimateContainer>
                        );
                    case SectionType.image:
                        return (
                            <AnimateContainer key={index}>
                                <section>
                                    <div className="span-div">
                                        <div className="span-div">
                                            <div className="header">
                                                {section.header}
                                            </div>
                                        </div>
                                        <div className="div-inline-center span-div">
                                            <SectionMedia className="section-image fill"
                                                          image={project.images[section.imageIndex]}
                                                          alt={section.header}/>
                                        </div>
                                    </div>
                                </section>
                            </AnimateContainer>
                        );
                    case SectionType.video:
                        return(
                            <AnimateContainer key={index}>
                                <section className="main">
                                    <div className="span-div">
                                        <div className="span-div">
                                            <div className="header">
                                                {section.header}
                                            </div>
                                        </div>
                                        <div className="div-inline-center span-div" style={{height: "100%"}}>
                                            {/* #t=0.1 makes the browser render the first frame as a
                                                poster without preloading the whole file. */}
                                            <video
                                                width="100%"
                                                height="100%"
                                                className="section-video"
                                                title="project video"
                                                src={`${project.videos[section.videoIndex].data}#t=0.1`}
                                                preload="metadata"
                                                controls
                                                playsInline
                                            />
                                        </div>
                                    </div>
                                </section>
                            </AnimateContainer>
                        );
                    case SectionType.paragraphImage:
                        return (
                            <AnimateContainer key={index}>
                                <section>
                                    <div className="span-div">
                                        <div className="header">{section.header}</div>
                                        <div className="side-to-side-div">
                                            <div className="paragraph-image-text blur-container">{section.body}</div>

                                            <AnimateContainer slideIn={true} amount={0}>
                                                <div className="image-container">
                                                    <SectionMedia className="section-image"
                                                                  image={project.images[section.imageIndex]}
                                                                  alt={section.header}/>
                                                </div>
                                            </AnimateContainer>
                                        </div>
                                    </div>
                                </section>
                            </AnimateContainer>
                        );
                    case SectionType.subsections:
                        return(
                            <SubSectionsComponent key={index} header={section.header} subsections={section.subsections} images={project.images}/>
                        );
                    case SectionType.pointGrid:
                        return (
                            <AnimateContainer key={index} >
                                <PointGridComponent header={section.header} points={section.subsections}/>
                            </AnimateContainer>
                        );
                    default:
                        return (
                            <AnimateContainer key={index}>
                                <section >
                                    <div className="span-div">
                                        <div className="header">
                                            {section.header}
                                        </div>
                                        <div className="blur-container">
                                            <p>{section.body}</p>
                                        </div>
                                    </div>
                                </section>
                            </AnimateContainer>
                        );
                }
            })}
        </div>
    );
}

export default ProjectPage;