import React, {useEffect} from "react";
import SubSectionComponent from "./SubSectionComponent";
import './SubSections.css';

const SubSectionsComponent = ({header, subsections, images}) => {


    return(
        <section>
            <div className="span-div">
                <div className="header">
                    {header}
                </div>
                {subsections.map((subSection, index) => (
                    <SubSectionComponent key={index} subsection={
                        {
                            header: subSection.header,
                            body: subSection.body,
                            image: {
                                data: images[subSection.imageIndex].data,
                                fit: images[subSection.imageIndex].fit
                            }
                        }
                    }/>
                ))}
            </div>
        </section>
    );
}


export default SubSectionsComponent;