import React, {useEffect} from "react";
import './PointGrid.css';
import PointCardComponent from "./PointCardComponent";
import {stagger, useAnimate, useInView} from "framer-motion";


const PointGridComponent = ({id, header, points}) => {

    const [scope, animate] = useAnimate()
    const isInView = useInView(scope, {
        margin: "-300px 0px -300px 0px"
    });

    // When the points carry icons, the grid switches to wider auto-fit tiles;
    // otherwise it keeps the fixed 200×200 look.
    const hasIcons = points.some((point) => point.icon);

    useEffect(() => {
        if(isInView){

            animate(".card-gradient", {scale: 1}, {delay: stagger(0.1)});

        }
    }, [animate, isInView])

    return(
        <section id={id}>
            <div ref={scope} className="span-div">
                <div className="header">
                    {header}
                </div>
                <div className={`points-flex-container${hasIcons ? " has-icons" : ""}`}>
                {points.map((point, index) => (
                        <PointCardComponent key={index} header={point.header} body={point.body} icon={point.icon}/>
                ))}
                </div>
            </div>
        </section>
    );
}

export default PointGridComponent;