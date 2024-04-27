import React from 'react';
import {Button, Container, Nav} from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";


const NavBarComponent = () =>{



    return(
        <Navbar id="top-nav" data-bs-theme="dark" fixed="top">
            <div className="nav-container">
                <div className="nav-list">
                    <Navbar.Brand>Eli St. James</Navbar.Brand>
                    <Nav>
                        <Nav.Link>About Me</Nav.Link>
                        <Nav.Link>Projects</Nav.Link>
                    </Nav>
                </div>
                <div className="my-links">
                    <Button className="social-link-btn" variant="link">
                        <BsLinkedin size={20}></BsLinkedin>
                    </Button>
                    <Button className="social-link-btn" variant="link">
                        <BsGithub size={20}></BsGithub>
                    </Button>
                </div>
            </div>
        </Navbar>
    );
}


export default NavBarComponent;