import React from 'react';
import {Button, Container, Nav} from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsList } from "react-icons/bs";
import face from "../resources/me.jpg";
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
        <div id="top-nav" data-bs-theme="dark" fixed="top">
            <div className="nav-container">
                <div className="div-inline-center">
                    <Button className="social-link-btn" variant="link" href="https://www.linkedin.com/in/eli-stjames/" target="_blank">
                        <BsLinkedin size={25}></BsLinkedin>
                    </Button>
                    <Button className="social-link-btn" variant="link" href="https://github.com/elistjames" target="_blank">
                        <BsGithub size={25}></BsGithub>
                    </Button>
                </div>
                <div className="div-inline-center">
                    <Link className="nav-link" href="/">Home</Link>
                    <Link className="nav-link" href="/">About Me</Link>
                    <Link className="nav-link" href="/projects">Projects</Link>
                    <div className="nav-btn-gradient">
                        <Button className="nav-btn">Let's Connect</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default NavBarComponent;