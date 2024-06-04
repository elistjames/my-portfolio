import {useLocation} from "react-router-dom";
import {NavData} from "./NavData";
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
                            <button className="nav-text nav-header" onClick={() => handleNavigate(nav.link)}>{nav.label}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ToolBarComponent;