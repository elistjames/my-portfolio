import { BsPersonFill } from "react-icons/bs";
import {Link} from "react-router-dom";
import { FaLaptopCode } from "react-icons/fa";
import { FaAward } from "react-icons/fa";

const ToolBarComponent = ({expanded}) =>{

    return(
        <div className={expanded ? "toolbar active" : "toolbar"}>
            <div className="tool-bar-container">
                <ul className="tool-bar-list">
                    <li>
                        <BsPersonFill size={20}/>
                        <Link className="nav-text nav-header">About Me</Link>
                    </li>
                    <li>
                        <FaLaptopCode size={20}/>
                        <Link className="nav-text nav-header">Projects</Link>
                    </li>
                    <li>
                        <ul className="tool-bar-list">
                            <li><Link className="nav-text">ByteBooks</Link></li>
                            <li><Link className="nav-text">Pason Live</Link></li>
                        </ul>
                    </li>
                    <li>
                        <FaAward size={20}/>
                        <Link className="nav-text nav-header">Accomplishments</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ToolBarComponent;