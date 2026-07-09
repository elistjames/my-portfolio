import React from "react";
import SubSectionComponent from "./SubSectionComponent";
import './SubSections.css';
import AnimateContainer from "./AnimateContainer";

const SubSectionsComponent = ({header, subsections, images}) => {


    return(
        <section>
            <div className="span-div">
                <div className="header">
                    {header}
                </div>
                {subsections.map((subSection, index) => (
                    <AnimateContainer key={index} >
                        <SubSectionComponent subsection={
                            {
                                header: subSection.header,
                                body: subSection.body,
                                image: {
                                    data: images[subSection.imageIndex].data,
                                    fit: images[subSection.imageIndex].fit
                                }
                            }
                        }/>
                    </AnimateContainer>
                ))}
            </div>
        </section>
    );
}


export default SubSectionsComponent;