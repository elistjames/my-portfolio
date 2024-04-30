import logo from './logo.svg';
import './App.css';
import { useMediaQuery } from 'react-responsive';
import {BrowserRouter as Router, Routes, Route, useNavigate, useLocation, Navigate} from "react-router-dom";
import NavBarComponent from "./components/NavBarComponent";
import LandingPage from "./pages/LandingPage";
import ToolBarComponent from "./components/ToolBarComponent";
import React, {useEffect, useRef, useState} from "react";
import ProjectPage from "./pages/ProjectPage";
import {Button, Image, OverlayTrigger, Tooltip} from "react-bootstrap";
import {useMotionValueEvent, useScroll, useTransform} from "framer-motion";
import { motion } from "framer-motion";
import { BsChevronUp } from "react-icons/bs";


function useParallax(value, distance1, distance2) {
    return useTransform(value, [0, 1], [distance1, distance2]);
}

function App() {
    const [landingSection, setLandingSection] = useState("landing-title");
    const [atTop, setAtTop] = useState(true);
    const background = useRef();

    const {scrollYProgress} = useScroll();
    const y = useParallax(scrollYProgress, 0, -150);
    const scale = useParallax(scrollYProgress, 1, 2);

    React.useEffect(() => {
        window.onscroll = () => {
            setAtTop(window.scrollY === 0);
        }


        return () => (window.onscroll = null);
    });

    const renderToTop = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Back To Top
        </Tooltip>
    );

    const isMobile = useMediaQuery({
        query: '(max-width: 700px)'
    });

    const isSmallMobile = useMediaQuery({
        query: '(max-width: 450px)'
    });

    const handleLandingNavigate = (section) =>{
        setLandingSection(section);
    }

    const handleToolBarToggle = () =>{
      setToolBarActive(!toolBarActive);
    }

    const [toolBarActive, setToolBarActive] = useState(false);
    return (
      <div className="app-wrapper">
          <motion.div ref={background} className="background-texture" style={{translateY: y}}>

          </motion.div>
          <OverlayTrigger placement="left" delay={{show: 100, hide: 100}} overlay={renderToTop}>
              <Button className={atTop ? "to-top-btn blur hidden" : "to-top-btn blur"} onClick={() => {window.scrollTo(0, 0)}}>
                  <BsChevronUp size={40} className="post-mobile"/>
              </Button>
          </OverlayTrigger>
          <Router>
              <NavBarComponent toggleToolBar={handleToolBarToggle} handleLandingNavigate={handleLandingNavigate}/>
              <ToolBarComponent expanded={toolBarActive}></ToolBarComponent>
              <div className={(toolBarActive && !isMobile) ? "viewport compressed" : "viewport"}>
                  <Routes>
                      <Route path='/:section' element={<LandingPage landingSection={landingSection}/>}/>
                      <Route path="/project/:id" element={<ProjectPage/>}/>
                      <Route path="/" element={<Navigate to="/landing-title"/>}/>
                  </Routes>
              </div>
          </Router>
      </div>
    );
}

export default App;
