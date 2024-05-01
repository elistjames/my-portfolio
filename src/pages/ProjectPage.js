import {ProjectData} from "../data/ProjectData";
import {useParams} from "react-router-dom";
import React, {useEffect} from "react";
import Image from 'react-bootstrap/Image';
import {SectionType} from "../data/ProjectData";
import "./ProjectPage.css";
import AnimateContainer from "../components/AnimateContainer";
import ProjectCards from "../components/ProjectCards";
import PointGridComponent from "../components/PointGridComponent";
import SubSectionsComponent from "../components/SubSectionsComponent";



const ProjectPage = () =>{
    const { id } = useParams();
    const project = ProjectData[id];

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
                                            <Image className="section-image main"
                                                   src={project.images[section.imageIndex].data} alt="project image"/>
                                        </div>
                                    </div>
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
                                    <div className="div-inline-center span-div">
                                        <Image className="section-image fill"
                                               src={project.images[section.imageIndex].data}
                                               alt="project image"/>
                                    </div>
                                </section>
                            </AnimateContainer>
                        );
                    case SectionType.imageParagraph:

                        break;
                    case SectionType.paragraphImage:
                        return (
                            <AnimateContainer key={index}>
                                <section>
                                <div className="span-div">
                                        <div className="header">{section.header}</div>
                                        <div className="side-to-side-div">
                                            <div className="paragraph-image-text blur-container">{section.body}</div>
                                            <div className="image-container">
                                                <AnimateContainer slideIn={true} amount={10}>
                                                    <Image className="section-image phone-gif"
                                                           src={project.images[section.imageIndex].data} alt="project image"
                                                           style={{objectFit: project.images[section.imageIndex].objectFit}}/>
                                                </AnimateContainer>
                                            </div>
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
                            <PointGridComponent key={index} header={section.header} points={section.subsections}/>
                        );
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