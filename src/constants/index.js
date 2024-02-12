import { RiHomeHeartFill } from "react-icons/ri";
import { MdSubject } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { FaUserAlt } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";

//process.env data
export const BASE_URL = process.env.REACT_APP_BASE_URL

// static data to add in component
export const signinImg = 'https://static.vecteezy.com/system/resources/thumbnails/011/654/703/small/cute-boy-going-to-school-and-bring-a-books-cartoon-3d-icon-illustration-people-education-icon-concept-png.png'

// sidebar menu items
export const MenuItem = [
    {
        name: "Homepage",
        icon: <RiHomeHeartFill />,
        path: "/",
    },
    {
        name: "Dashboard",
        icon: <RxDashboard />,
        path: "/dashboard",
    },
    {
        name: "Subjects",
        icon: <MdSubject />,
        path: "/subjects",
    },
    {
        name: "Interview",
        icon: <PiStudentFill />,
        path: "/interview",
    },
    {
        name: "About",
        icon: <FaUserAlt />,
        path: "/about",
    },
];