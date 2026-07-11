import React from "react";
import {Card} from "react-bootstrap";
import './PointGrid.css';
import {motion} from "framer-motion";


const PointCardComponent = ({header, body, icon: Icon}) => {


    return (
        <motion.div className={`card-gradient${Icon ? " icon-tile" : ""}`} initial={{scale: 0}} style={{margin: Icon ? 0 : "1rem"}}>
            <Card className={`point-card${Icon ? " icon-tile" : ""}`}>
                <Card.Body style={{paddingBottom: 0}}>
                    {Icon && <Icon className="point-icon" aria-hidden="true"/>}
                    <Card.Title id="card-title">{header}</Card.Title>
                    <p>{body}</p>
                </Card.Body>
            </Card>
        </motion.div>
    );
}

export default PointCardComponent;
