import {BsPersonFill} from "react-icons/bs";
import { BsFillHouseFill } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { BsPersonRaisedHand } from "react-icons/bs";

export const NavData = [
    {
        label: "Home",
        link: "landing-title",
        icon: <BsFillHouseFill size={30}/>,
    },
    {
        label: "About Me",
        link: "about-me",
        icon: <BsPersonFill size={30}/>,
    },
    {
        label: "Projects",
        link: "landing-projects",
        icon: <FaLaptopCode size={30}/>,
    },
    {
        label: "Lets Connect",
        link: "lets-connect",
        icon: <BsPersonRaisedHand size={30}/>,
    },
]