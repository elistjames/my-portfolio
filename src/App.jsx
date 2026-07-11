import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import NavBarComponent from "./components/NavBarComponent";
import LandingPage from "./pages/LandingPage";
import ToolBarComponent from "./components/ToolBarComponent";
import React, {lazy, Suspense, useCallback, useState} from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import { BsChevronUp } from "react-icons/bs";
import {useScrollAtTop} from "./hooks/useScrollAtTop";

const ProjectPage = lazy(() => import("./pages/ProjectPage"));

// On GitHub Pages the site is served under /my-portfolio/, so the router has to
// scope its paths to that prefix. Vite exposes it as BASE_URL ('/' in dev), and
// react-router wants no trailing slash.
const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

function App() {
    const [toolBarActive, setToolBarActive] = useState(false);
    const [scrollTarget, setScrollTarget] = useState(null);
    const atTop = useScrollAtTop();

    const {scrollYProgress} = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -150]);

    // The nonce lets the landing page re-scroll to a section it is already
    // sitting on, which a bare section string could not express.
    const handleLandingNavigate = useCallback((section) => {
        setToolBarActive(false);
        setScrollTarget((prev) => ({section, nonce: (prev?.nonce ?? 0) + 1}));
    }, []);

    const handleToolBarToggle = () =>{
      setToolBarActive((active) => !active);
    }

    return (
      <div className="app-wrapper">
          <motion.div className="background-texture" style={{y}}/>
          <button id="to-top" className={atTop ? "to-top-btn blur hidden" : "to-top-btn blur"}
                  aria-label="Back to top" onClick={() => {window.scrollTo(0, 0)}}>
              <BsChevronUp size={40} className="post-mobile"/>
          </button>
          <Router basename={basename}>
              <NavBarComponent toggleToolBar={handleToolBarToggle} handleLandingNavigate={handleLandingNavigate}/>
              <ToolBarComponent expanded={toolBarActive} handleLandingNavigate={handleLandingNavigate}></ToolBarComponent>
              <div className="viewport">
                  <Suspense fallback={null}>
                      <Routes>
                          <Route path='/:section' element={<LandingPage scrollTarget={scrollTarget}/>}/>
                          <Route path="/project/:id" element={<ProjectPage/>}/>
                          <Route path="/" element={<Navigate to="/landing-title" replace/>}/>
                      </Routes>
                  </Suspense>
              </div>
          </Router>
      </div>
    );
}

export default App;
