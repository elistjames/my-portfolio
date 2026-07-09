import "./ProjectCard.css";
import {Button, Card, Carousel} from "react-bootstrap";
import {useRef} from "react";
import {Link} from "react-router-dom";
import {motion, useMotionTemplate, useScroll, useSpring, useTransform, useVelocity} from "framer-motion";

const ProjectCardComponent = ({id, title, description, images}) => {

    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 0.8", "end end"]
    });

    const x = useTransform(scrollYProgress, [0, 1], [100, 0]);
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

    // The scroll transform and the hover transform live on separate elements:
    // framer-motion owns the outer inline transform, CSS owns the inner hover
    // scale. Both stay on the compositor, and hover costs no JS.
    return(
        <motion.div ref={ref} className="card-scroll-transform" style={{transform}}>
            <div className="card-gradient project-card-hover">
            <Card className="project-card" as={Link} to={`/project/${id}`}>
                {/* No indicators: the whole card is a Link, and the dots are plain
                    <button>s whose clicks bubble up to it, so tapping one navigated
                    instead of changing slide. The prev/next arrows are safe — they
                    are href-less anchors, and @restart/ui calls preventDefault on
                    those, which makes Link skip navigation. */}
                <Carousel className="card-images" indicators={false}>
                    {images.map((image, index) => (
                        <Carousel.Item key={index} interval={5000}>
                            <Card.Img className="project-image" src={image.data} alt="Project image"
                                      width={250} height={130} loading="lazy" decoding="async"
                                      style={{objectFit: image.fit}}/>
                        </Carousel.Item>
                    ))}
                </Carousel>
                <Card.Body style={{paddingBottom: 0}}>
                    <Card.Title id="card-title">{title}</Card.Title>
                    <p>{description}</p>
                </Card.Body>
                <div className="card-btn-container">
                    <Button id="card-btn">Read more</Button>
                </div>
            </Card>
            </div>
        </motion.div>

    );
}

export default ProjectCardComponent;
