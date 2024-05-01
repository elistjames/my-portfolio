import React, {useEffect, useState} from "react";
import Image from 'react-bootstrap/Image';
import './SubSections.css';
import {motion, stagger, useAnimate, useInView} from "framer-motion";
import {useMediaQuery} from "react-responsive";

const SubSectionComponent = ({subsection}) => {
    const [showDetails, setShowDetails] = useState(false);

    const isMobile = useMediaQuery({
        query: '(max-width: 400px)'
    });

    const [scope, animate] = useAnimate()
    const isInView = useInView(scope, {
        margin: "-40% 0% -40% 0%"
    });

    useEffect(() => {
        if(isInView){
            animate(scope.current, {width: "100%"}, {duration: 0.3});
            setShowDetails(true);
            animate(".subsection-details", {opacity: 1}, {delay: 0.3})
        }
    }, [isInView])

    return(
        <div className="subsection-wrapper">
            <div ref={scope} className="card-gradient subsection-gradient">
                {!isMobile &&
                    <motion.div className="subsection-container" initial={{width: "auto"}}>
                        <div className="subsection-image-container">
                            <img className="subsection-image" src={subsection.image.data}
                                 style={{objectFit: subsection.image.fit}}/>
                        </div>
                        <motion.div className={showDetails ? "subsection-details" : "subsection-details outside"}
                                    initial={{opacity: 0}}>
                            <div className="subsection-details-header">
                                {subsection.header}
                            </div>
                            <div className="subsection-body">
                                {subsection.body}
                            </div>
                        </motion.div>
                    </motion.div>
                }
                {isMobile &&
                    <motion.div className="subsection-container mobile" initial={{width: "auto"}}>
                        <div className="mobile-subsection-header">
                            <div className="subsection-image-container">
                                <img className="subsection-image" src={subsection.image.data}
                                     style={{objectFit: subsection.image.fit}}/>
                            </div>
                            <div className="subsection-details-header mobile">
                                {subsection.header}
                            </div>
                        </div>
                        <motion.div className={showDetails ? "subsection-details mobile" : "subsection-details outside"}
                                    initial={{opacity: 0}}>

                            <div className="subsection-body">
                                {subsection.body}
                            </div>
                        </motion.div>
                    </motion.div>
                }
            </div>
        </div>


    );
}

export default SubSectionComponent;