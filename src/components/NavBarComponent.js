import React, {useEffect} from 'react';
import {Button, Container, Nav, OverlayTrigger, Tooltip} from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsList } from "react-icons/bs";
import { BsFileEarmarkPerson } from "react-icons/bs";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useMediaQuery} from "react-responsive";


const NavBarComponent = ({toggleToolBar, handleLandingNavigate}) =>{
    const navigate = useNavigate();
    const currentRoute = useLocation();


    const isMobile = useMediaQuery({
        query: '(max-width: 640px)'
    });

    const isSmallMobile = useMediaQuery({
        query: '(max-width: 450px)'
    });

    const handleNavigate = async (section) => {
        if (currentRoute.pathname !== "/" && currentRoute.pathname !== "/landing-title" && currentRoute.pathname !== "/about-me" && currentRoute.pathname !== "/landing-projects" && currentRoute.pathname !== "/lets-connect") {
            window.location.assign(`/${section}`);
        }
        else{
            handleLandingNavigate(section);
        }
    }

    const renderLinkedIn = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            LinkedIn
        </Tooltip>
    );

    const renderGitHub = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            GitHub
        </Tooltip>
    );

    const renderResume = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Resume
        </Tooltip>
    );

    const handleToggleToolBar = () => {
        toggleToolBar();
    }
    return(
        <div id="top-nav" data-bs-theme="dark" fixed="top">
            <div className="nav-container">
                <div className="div-inline-center">
                    {isMobile &&
                        <button className="tool-bar-toggle" onClick={handleToggleToolBar}>
                            <BsList size={30}></BsList>
                        </button>
                    }
                    {!isMobile &&
                        <OverlayTrigger placement="bottom" delay={{show: 100, hide: 100}} overlay={renderLinkedIn}>
                            <Button className="social-link-btn" variant="link" href="https://www.linkedin.com/in/eli-stjames/" target="_blank">
                                <BsLinkedin size={25}></BsLinkedin>
                            </Button>
                        </OverlayTrigger>
                    }
                    {!isMobile &&
                        <OverlayTrigger placement="bottom" delay={{show: 100, hide: 100}} overlay={renderGitHub}>
                            <Button className="social-link-btn" variant="link" href="https://github.com/elistjames" target="_blank">
                                <BsGithub size={25}></BsGithub>
                            </Button>
                        </OverlayTrigger>
                    }
                    {/*<OverlayTrigger placement="bottom" delay={{show: 100, hide: 100}} overlay={renderResume}>*/}
                    {/*    <Button className="social-link-btn" variant="link" href={}>*/}
                    {/*        <BsFileEarmarkPerson size={25}/>*/}
                    {/*    </Button>*/}
                    {/*</OverlayTrigger>*/}
                </div>
                <div className="div-inline-center">
                    {!isMobile &&
                        <Link className="nav-link" onClick={() => handleNavigate("landing-title")}>Home</Link>
                    }
                    {!isMobile &&
                        <Link className="nav-link" onClick={() => handleNavigate("about-me")}>About Me</Link>
                    }
                    {!isMobile &&
                        <Link className="nav-link" onClick={() => handleNavigate("landing-projects")}>Projects</Link>
                    }
                    {isMobile &&
                        <OverlayTrigger placement="bottom" delay={{show: 100, hide: 100}} overlay={renderLinkedIn}>
                            <Button className="social-link-btn" variant="link" href="https://www.linkedin.com/in/eli-stjames/" target="_blank">
                                <BsLinkedin size={25}></BsLinkedin>
                            </Button>
                        </OverlayTrigger>
                    }
                    {isMobile &&
                        <OverlayTrigger placement="bottom" delay={{show: 100, hide: 100}} overlay={renderGitHub}>
                            <Button className="social-link-btn" variant="link" href="https://github.com/elistjames" target="_blank">
                                <BsGithub size={25}></BsGithub>
                            </Button>
                        </OverlayTrigger>
                    }
                    <div className="btn-gradient">
                        <button className="nav-btn" onClick={() => handleNavigate("lets-connect")}>Let's Connect</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default NavBarComponent;