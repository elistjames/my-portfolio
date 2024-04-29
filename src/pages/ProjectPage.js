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
                            <section className="main">
                                <div className="title-section-div">
                                    <div className="page-title">
                                        {project.title}
                                    </div>
                                    <div className="title-image-container">
                                        <Image className="main-image" src={project.images[section.imageIndex].data}/>
                                    </div>
                                </div>
                            </section>
                        );
                        break;
                    case SectionType.video:

                        break;
                    case SectionType.imageParagraph:

                        break;
                    case SectionType.paragraphImage:

                        break;
                    case SectionType.roles:

                        break;
                    case SectionType.subsections:

                        break;
                    default:
                        return (
                            <section>
                                <div className="span-div">
                                    <div className="header">
                                        {section.header}
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