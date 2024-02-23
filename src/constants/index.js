import { RiHomeHeartFill } from "react-icons/ri";
import { MdSubject } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { FaUserAlt } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { About, Dashboard, Homepage, Interview, SubjectAreas } from "../pages";
import { Outlet } from "react-router-dom";

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

// routes   
export const routes = [
    {
        path: "/",
        element: <Outlet />,
        children: [
            { path: "", element: <Homepage /> },
            { path: "dashboard", element: <Dashboard /> },
            { path: "interview", element: <Interview /> },
            { path: "subjects", element: <SubjectAreas /> },
            { path: "about", element: <About /> },
        ],
    },
    {
        path: "/admin",
        element: <Outlet />,
        children: [
            { path: "", element: <h1>Working on Admin Routes</h1> },
            { path: "dashboard", element: <h1>Working on Admin Dashboard</h1> },
        ],
    },
    {
        path: "*",
        element: <h1>URL chukliy bhava</h1>,
    },
]
