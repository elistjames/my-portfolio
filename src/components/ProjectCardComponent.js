import "./ProjectCard.css";
import {Button, Card, Carousel} from "react-bootstrap";
import {useRef} from "react";
import {motion, useMotionTemplate, useScroll, useSpring, useTransform, useVelocity} from "framer-motion";

function useParallax(value, distance1, distance2) {
    return useTransform(value, [0, 1], [distance1, distance2]);
}

const ProjectCardComponent = ({id, title, description, images}) => {

    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 0.8", "end end"]
    });

    const x = useParallax(scrollYProgress, 100, 0);
    const scrollVelocity = useVelocity(scrollYProgress);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const rotate = useTransform(smoothVelocity, [-10, 0, 10], [-20, 0, 20])
    const moveX = useSpring(x, {
        stiffness: 100,
        damping: 20,
        restDelta: 0.001
    });

    const transform = useMotionTemplate`translateX(${moveX}vw) rotate(${rotate}deg)`;

    return(
        <motion.div ref={ref} className="card-gradient" style={{transform: transform}}>
            <Card className="project-card">
                <Carousel className="card-images">
                    {images.map((image, index) => (
                        <Carousel.Item key={index} interval={5000}>
                            <Card.Img className="project-image" src={image.data} alt="Project image" style={{objectFit: image.fit}}/>
                        </Carousel.Item>
                    ))}
                </Carousel>
                <Card.Body style={{paddingBottom: 0}}>
                    <Card.Title id="card-title">{title}</Card.Title>
                    <p>{description}</p>
                </Card.Body>
                <div className="card-btn-container">
                    <Button id="card-btn" href={`project/${id}`}>Read more</Button>
                </div>
            </Card>
        </motion.div>

    );
}

export default ProjectCardComponent;