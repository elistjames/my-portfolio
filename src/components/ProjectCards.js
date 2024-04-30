import {LandingPageProjects} from "../data/ProjectData";
import {motion, useScroll, useSpring, useTransform, useVelocity} from "framer-motion"
import React, {useEffect, useRef} from "react";
import { useMotionTemplate } from "framer-motion"
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