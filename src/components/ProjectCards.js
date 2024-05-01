import {LandingPageProjects} from "../data/ProjectData";
import React from "react";
import ProjectCardComponent from "./ProjectCardComponent";





const ProjectCards = ({excludeId}) => {


    return (
        <div className="projects">
            {LandingPageProjects.map((project, index) =>
                {
                    if(excludeId !== project.id){
                        return(
                            <ProjectCardComponent key={index} id={index} title={project.title}
                                                  description={project.description} images={project.images}/>
                        );
                    }
                }

            )}
        </div>
    );
}

export default ProjectCards;