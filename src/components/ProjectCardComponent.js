import "./ProjectCard.css";
import {Button, Card, Carousel} from "react-bootstrap";


const ProjectCardComponent = ({id, title, description, images}) => {


    return(
        <div className="card-gradient">
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
        </div>

    );
}

export default ProjectCardComponent;