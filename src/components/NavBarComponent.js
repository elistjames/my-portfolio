import React from 'react';
import {Button, Container, Nav} from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsList } from "react-icons/bs";


const NavBarComponent = ({toggleToolBar}) =>{

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
                    <div className="web-title">My Portfolio</div>
                    <Nav>
                        <Nav.Link id="nav-link">About Me</Nav.Link>
                        <Nav.Link id="nav-link">Projects</Nav.Link>
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