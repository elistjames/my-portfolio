import {LandingPageProjects} from "./LandingProjects";
import React from "react";
import ProjectCardComponent from "./ProjectCardComponent";





const ProjectCards = ({excludeId}) => {


    return (
        <div className="projects">
            {LandingPageProjects
                .filter((project) => project.id !== excludeId)
                .map((project) => (
                    <ProjectCardComponent key={project.id} id={project.id} title={project.title}
                                          description={project.description} images={project.images}/>
                ))}
        </div>
    );
}

export default ProjectCards;