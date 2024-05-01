import React from "react";
import {Card} from "react-bootstrap";
import './PointGrid.css';
import {motion} from "framer-motion";


const PointCardComponent = ({header, body}) => {


    return (
        <motion.div className="card-gradient" initial={{scale: 0}} style={{margin: "1rem"}}>
            <Card className="point-card">
                <Card.Body style={{paddingBottom: 0}}>
                    <Card.Title id="card-title">{header}</Card.Title>
                    <p>{body}</p>
                </Card.Body>
            </Card>
        </motion.div>
    );
}

export default PointCardComponent;
