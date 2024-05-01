import { BsPersonFill } from "react-icons/bs";
import {Link, useLocation} from "react-router-dom";
import { FaAward } from "react-icons/fa";
import {NavData} from "../data/NavData";
import {useMediaQuery} from "react-responsive";

const ToolBarComponent = ({expanded, handleLandingNavigate}) =>{

    const currentRoute = useLocation();

    const isMobile = useMediaQuery({
        query: '(max-width: 640px)'
    });

    const handleNavigate = async (section) => {

        if (currentRoute.pathname !== "/" && currentRoute.pathname !== "/landing-title" && currentRoute.pathname !== "/about-me" && currentRoute.pathname !== "/landing-projects") {
            window.location.assign(`/${section}`);
        }
        else{
            handleLandingNavigate(section);
        }
    }

    return(
        <div className={(expanded && isMobile) ? "toolbar active" : "toolbar"}>
            <div className="tool-bar-container">
                <ul className="tool-bar-list">
                    {NavData.map((nav, index) => (
                        <li key={index}>
                            {nav.icon}
                            <Link className="nav-text nav-header" onClick={() => handleNavigate(nav.link)}>{nav.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ToolBarComponent;