import { RiHomeHeartFill } from "react-icons/ri";
import { MdSubject } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { FaUserAlt } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { About, Dashboard, Homepage, Interview, SubjectAreas } from "../pages";
import { Outlet } from "react-router-dom";

//process.env data

// static data to add in component

// Object containing global constants used throughout the app.
export const constants = {
  WEBAPP_TITLE: "QuizEasy",
  BASE_URL: process.env.REACT_APP_BASE_URL,
};

// sidebar menu items routes
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

// frontend routes
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
];

// url path
export const apiPaths = {
  STUDENT: {
    SELF: "/student/self",
  },
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
  },
  TEACHER: {
    SELF: "/self", // dummy
    ADD_SUBJECT: "/teacher/add-subject",
  },
  ADMIN: "/admin",
};
