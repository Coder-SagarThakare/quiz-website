import { RiHomeHeartFill } from "react-icons/ri";
import { MdSubject } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { FaUserAlt } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { About, Dashboard, Homepage, Interview, SubjectAreas } from "../pages";
import { Outlet } from "react-router-dom";

// Object containing global constants used throughout the app.
export const CONSTANTS = {
  WEBAPP_TITLE: "QuizEasy",
  BASE_URL: process.env.REACT_APP_BASE_URL,
  TOKEN: "activeuser_token",
  FEATURES: [
    {
      ID: 1,
      IMG: "https://res.cloudinary.com/difupvzin/image/upload/v1709636941/feature_1_w1g3is.jpg",
      TITLE: "Covering Many Subjects",
      DESC_1:
        "Our platform offers a diverse range of subjects covering various disciplines from mathematics and science to history and literature. ",
      DESC_2:
        "Whether you're preparing for exams or simply eager to expand your knowledge, we've got you covered.",
    },
    {
      ID: 2,
      IMG: "https://res.cloudinary.com/difupvzin/image/upload/v1709636830/feature_2_hqzdmw.jpg",
      TITLE: "Detailed Analysis",
      DESC_1:
        "Gain valuable insights into your performance with our detailed test analysis feature. Track your progress over time, view your scores, and analyze your strengths and weaknesses. ",
      DESC_2:
        "Our intuitive dashboard provides comprehensive metrics, including time taken per question and accuracy rates, empowering you to make informed decisions about your study strategy.",
      ISREVERSE: true,
    },
    {
      ID: 3,
      IMG: "https://res.cloudinary.com/difupvzin/image/upload/v1709636654/feature_3_gthfrv.jpg",
      TITLE: "User-Friendly Interface",
      DESC_1:
        "We understand the importance of simplicity and ease of use. That`s why our platform features a user-friendly interface designed with students in mind. ",
      DESC_2:
        "Navigate effortlessly between subjects, quizzes, and analysis tools, enjoying a seamless learning experience from start to finish.",
    },
    {
      ID: 4,
      IMG: "https://res.cloudinary.com/difupvzin/image/upload/v1709636981/feature_4_bhouzm.jpg",
      TITLE: "Interactive Learning Experience",
      DESC_1:
        "Immerse yourself in an interactive learning experience that goes beyond traditional study methods. ",
      DESC_2:
        "Engage with dynamic quiz questions, multimedia content, and interactive exercises designed to enhance your understanding and retention of key concepts.",
      ISREVERSE: true,
    },
  ],
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

// api 
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
