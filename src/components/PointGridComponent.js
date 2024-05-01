import React, {useEffect} from "react";
import './PointGrid.css';
import PointCardComponent from "./PointCardComponent";
import {stagger, useAnimate, useInView} from "framer-motion";


const PointGridComponent = ({header, points}) => {

    const [scope, animate] = useAnimate()
    const isInView = useInView(scope, {
        margin: "-300px 0px -300px 0px"
    });

    useEffect(() => {
        if(isInView){

            animate(".card-gradient", {scale: 1}, {delay: stagger(0.1)});

        }
    }, [isInView])

    return(
        <section>
            <div ref={scope} className="span-div">
                <div className="header">
                    {header}
                </div>
                <div className="points-flex-container">
                {points.map((point, index) => (
                        <PointCardComponent key={index} header={point.header} body={point.body}/>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PointGridComponent;