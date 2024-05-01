import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import NavBarComponent from "./components/NavBarComponent";
import LandingPage from "./pages/LandingPage";
import ToolBarComponent from "./components/ToolBarComponent";
import React, {useEffect, useRef, useState} from "react";
import ProjectPage from "./pages/ProjectPage";
import {useScroll, useTransform} from "framer-motion";
import { motion } from "framer-motion";
import { BsChevronUp } from "react-icons/bs";


function useParallax(value, distance1, distance2) {
    return useTransform(value, [0, 1], [distance1, distance2]);
}

function App() {
    const [toolBarActive, setToolBarActive] = useState(false);
    const [landingSection, setLandingSection] = useState("landing-title");
    const [tempLandingSection, setTempLandingSection] = useState("landing-title");
    const [atTop, setAtTop] = useState(true);
    const background = useRef();

    const {scrollYProgress} = useScroll();
    const y = useParallax(scrollYProgress, 0, -150);

    React.useEffect(() => {
        window.onscroll = () => {
            setAtTop(window.scrollY <= 10);
        }


        return () => (window.onscroll = null);
    });

    useEffect(() => {
        setLandingSection(tempLandingSection);
        setTempLandingSection(tempLandingSection);
    }, [landingSection]);

    const handleLandingNavigate = (section) =>{
        setToolBarActive(false);
        setTempLandingSection(section);
        setLandingSection("sup");
    }

    const handleToolBarToggle = () =>{
      setToolBarActive(!toolBarActive);
    }

    return (
      <div className="app-wrapper">
          <motion.div ref={background} className="background-texture" style={{translateY: y}}>

          </motion.div>
          <button id="to-top" className={atTop ? "to-top-btn blur hidden" : "to-top-btn blur"} onClick={() => {window.scrollTo(0, 0)}}>
              <BsChevronUp size={40} className="post-mobile"/>
          </button>
          <Router>
              <NavBarComponent toggleToolBar={handleToolBarToggle} handleLandingNavigate={handleLandingNavigate}/>
              <ToolBarComponent expanded={toolBarActive} handleLandingNavigate={handleLandingNavigate}></ToolBarComponent>
              <div className="viewport">
                  <Routes>
                      <Route path='/:section' element={<LandingPage landingSection={landingSection} handleLandingNavigate={handleLandingNavigate}/>}/>
                      <Route path="/project/:id" element={<ProjectPage/>}/>
                      <Route path="/" element={<Navigate to="/landing-title"/>}/>
                  </Routes>
              </div>
          </Router>
      </div>
    );
}

export default App;
