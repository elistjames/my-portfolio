import logo from './logo.svg';
import './App.css';
import { useMediaQuery } from 'react-responsive';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBarComponent from "./components/NavBarComponent";
import LandingPage from "./pages/LandingPage";
import ToolBarComponent from "./components/ToolBarComponent";
import {useRef, useState} from "react";
import ProjectsPage from "./pages/ProjectsPage";
import AccomplishmentsPage from "./pages/Accomplishments";
import {Image} from "react-bootstrap";

function App() {

    const isMobile = useMediaQuery({
        query: '(max-width: 700px)'
    });

    const isSmallMobile = useMediaQuery({
        query: '(max-width: 450px)'
    });

  const handleToolBarToggle = () =>{
      setToolBarActive(!toolBarActive);
  }

  const [toolBarActive, setToolBarActive] = useState(false);
  return (
    <div className="app-wrapper">
        <Router>
            <NavBarComponent toggleToolBar={handleToolBarToggle}/>
            <ToolBarComponent expanded={toolBarActive}></ToolBarComponent>
            <div className={(toolBarActive &&  !isMobile) ? "viewport compressed" : "viewport"}>
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="/projects" element={<ProjectsPage/>}/>
                    <Route path="/accomplishments" element={<AccomplishmentsPage/>}/>
                </Routes>
            </div>
        </Router>
    </div>
  );
}

export default App;
