import "./ProjectCard.css";
import {Button, Card, Carousel} from "react-bootstrap";


const ProjectCardComponent = ({title, description, images, url}) => {


    return(
        <div className="card-gradient">
            <Card className="project-card">
                <Carousel className="card-images">
                    {images.map((image, index) => (
                        <Carousel.Item key={index} interval={4000}>
                            <Card.Img className="project-image" top src={image} alt="Project image"/>
                        </Carousel.Item>
                    ))}
                </Carousel>
                <Card.Body>
                    <Card.Title id="card-title">{title}</Card.Title>
                    <p>{description}</p>
                    <div className="card-btn-container">
                        <Button className="card-btn">Read more</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>

    );
}

export default ProjectCardComponent;