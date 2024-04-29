import React, {useEffect} from 'react';
import {Button, Container, Nav} from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsList } from "react-icons/bs";
import face from "../resources/me.jpg";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useMediaQuery} from "react-responsive";


const NavBarComponent = ({toggleToolBar, handleLandingNavigate}) =>{
    const navigate = useNavigate();
    const currentRoute = useLocation();


    const isMobile = useMediaQuery({
        query: '(max-width: 700px)'
    });

    const isSmallMobile = useMediaQuery({
        query: '(max-width: 450px)'
    });

    const handleNavigate = async (section) => {
        if (currentRoute.pathname !== "/" && currentRoute.pathname !== "/landing-title" && currentRoute.pathname !== "/about-me" && currentRoute.pathname !== "/landing-projects") {
            window.location.assign(`/${section}`);
        }
        else{
            handleLandingNavigate(section);
        }


    }

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
                    <Link className="nav-link" onClick={() => handleNavigate("landing-title")}>Home</Link>
                    <Link className="nav-link" onClick={() => handleNavigate("about-me")}>About Me</Link>
                    <Link className="nav-link" onClick={() => handleNavigate("landing-projects")}>Projects</Link>
                    <div className="nav-btn-gradient">
                        <Button className="nav-btn">Let's Connect</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default NavBarComponent;