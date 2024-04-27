import logo from './logo.svg';
import './App.css';
import { useMediaQuery } from 'react-responsive';
import {Route, Router, Routes} from "react-router-dom";
import NavBarComponent from "./components/NavBarComponent";
import LandingPage from "./pages/LandingPage";

function App() {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)'
  });
  const isDesktop = useMediaQuery({
    query: '(min-width: 768px)'
  });


  return (
    <div className="app-wrapper">
        <Router>
            <NavBarComponent/>
            <div className="viewport">
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                </Routes>
            </div>
        </Router>
    </div>
  );
}

export default App;
