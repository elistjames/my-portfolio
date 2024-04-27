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
        <div id="top-nav" data-bs-theme="dark" fixed="top">
            <div className="nav-container">
                <div className="nav-list">
                    {isSmallMobile &&
                        <Button className="tool-bar-toggle" onClick={handleToggleToolBar}>
                            <BsList size={30}></BsList>
                        </Button>
                    }
                    <div className="web-title">
                        <a className="title-link" href="/">Eli_</a>
                    </div>

                    {!isMobile &&
                        <div className="div-inline-center">

                        </div>
                    }
                </div>
                <div className="div-inline-center">
                    {/*<Button className="social-link-btn" variant="link" href="https://www.linkedin.com/in/eli-stjames/" target="_blank">*/}
                    {/*    <BsLinkedin size={20}></BsLinkedin>*/}
                    {/*</Button>*/}
                    {/*<Button className="social-link-btn" variant="link" href="https://github.com/elistjames" target="_blank">*/}
                    {/*    <BsGithub size={20}></BsGithub>*/}
                    {/*</Button>*/}
                    <Link className="nav-link" href="/">About Me</Link>
                    <Link className="nav-link" href="/projects">Projects</Link>
                    <Link className="nav-link" href="/accomplishments">Accomplishments</Link>
                    <div className="nav-btn-gradient">
                        <Button className="nav-btn">Work with me</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default NavBarComponent;