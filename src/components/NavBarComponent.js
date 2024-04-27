import React from 'react';
import {Button, Container, Nav} from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsList } from "react-icons/bs";
import face from "../images/me.jpg";
import {Link} from "react-router-dom";
import {useMediaQuery} from "react-responsive";


const NavBarComponent = ({toggleToolBar}) =>{
    const isMobile = useMediaQuery({
        query: '(max-width: 700px)'
    });

    const isSmallMobile = useMediaQuery({
        query: '(max-width: 450px)'
    });

    const handleToggleToolBar = () => {
        toggleToolBar();
    }
    return(
        <Navbar id="top-nav" data-bs-theme="dark" fixed="top">
            <div className="nav-container">
                <div className="nav-list">
                    <Button className="tool-bar-toggle" onClick={handleToggleToolBar}>
                        <BsList size={30}></BsList>
                    </Button>
                    {!isSmallMobile &&
                        <div className="web-title">
                            <img src={face} className="main-img" alt="Eli St. james"/>
                            <a className="title-link" href="/">Eli St. James</a>

                        </div>
                    }
                    {!isMobile &&
                        <Nav>
                            <Nav.Link id="nav-link" href="/">About Me</Nav.Link>
                            <Nav.Link id="nav-link" href="/projects">Projects</Nav.Link>
                            <Nav.Link id="nav-link" href="/accomplishments">Accomplishments</Nav.Link>
                        </Nav>
                    }
                </div>
                <div className="my-links">
                    <Button className="social-link-btn" variant="link" href="https://www.linkedin.com/in/eli-stjames/" target="_blank">
                        <BsLinkedin size={20}></BsLinkedin>
                    </Button>
                    <Button className="social-link-btn" variant="link" href="https://github.com/elistjames" target="_blank">
                        <BsGithub size={20}></BsGithub>
                    </Button>
                </div>
            </div>
        </Navbar>
    );
}


export default NavBarComponent;