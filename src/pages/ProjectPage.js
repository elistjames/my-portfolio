import {ProjectData} from "../data/ProjectData";
import {useParams} from "react-router-dom";
import React, {useEffect} from "react";
import Image from 'react-bootstrap/Image';
import {SectionType} from "../data/ProjectData";
import "./ProjectPage.css";



const ProjectPage = () =>{
    const { id } = useParams();
    const project = ProjectData[id];

    return (
        <div className="page">
            {project.sections.map((section, index) => {
                switch(section.sectionType) {
                    case SectionType.main:
                        return(
                            <section key={index} className="main">
                                <div className="side-to-side-div main">
                                    <div className="page-title">
                                        {project.title}
                                    </div>
                                    <div className="image-container">
                                        <Image className="section-image main" src={project.images[section.imageIndex].data} alt="project image"/>
                                    </div>
                                </div>
                            </section>
                        );
                        break;
                    case SectionType.multiParagraph:
                        return (
                            <section key={index}>
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
                        );
                        break;
                    case SectionType.image:
                        return (
                            <section key={index}>
                                <div className="div-inline-center span-div">
                                    <Image className="section-image fill" src={project.images[section.imageIndex].data} alt="project image"/>
                                </div>
                            </section>
                        );
                        break;
                    case SectionType.imageParagraph:

                        break;
                    case SectionType.paragraphImage:
                        return (
                            <section key={index}>
                                <div className="span-div">
                                    <div className="header">{section.header}</div>
                                    <div className="side-to-side-div">
                                        <div className="paragraph-image-text blur-container">{section.body}</div>
                                        <div className="image-container">
                                            <Image className="section-image phone-gif" src={project.images[section.imageIndex].data} alt="project image" style={{objectFit: project.images[section.imageIndex].objectFit}}/>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        );
                        break;
                    case SectionType.roles:

                        break;
                    case SectionType.subsections:

                        break;
                    default:
                        return (
                            <section key={index}>
                                <div className="span-div">
                                    <div className="header">
                                        {section.header}
                                    </div>
                                    <div className="blur-container">
                                        <p>{section.body}</p>
                                    </div>
                                </div>
                            </section>
                        );
                }
            })}
        </div>
    );
}

export default ProjectPage;