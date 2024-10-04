import { RiHomeHeartFill } from "react-icons/ri";
import { MdSubject } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { FaUserAlt, FaUserCircle } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";

// Object containing global constants used throughout the app.
export const CONSTANTS = {
  WEBAPP_TITLE: "QuizEasy",
  BASE_URL: process.env.REACT_APP_BASE_URL,
  TOKEN: "activeuser_token",
  HOMEPAGE: "Homepage",
  DASHBOARD: "Dashboard",
  QUIZES: "Quizes",
  INTERVIEW: "Interview",
  PROFILE: "Profile",
  ABOUT: "About",
  CARD_TYPE: {
    SUBJECT: "subject",
  },
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
  ROLE: {
    STUDENT: "student",
    TEACHER: "teacher",
    ADMIN: "admin",
  },
  GENDER: {
    MALE: "male",
    FEMALE: "female",
  },
  QUESTION_LEVEL: [
    {
      TITLE: "Easy",
      CLASS: "bg-success border-dark text-white",
    },
    {
      TITLE: "Medium",
      CLASS: "bg-warning border-dark text-dark",
    },
    {
      TITLE: "Hard",
      CLASS: "bg-danger border-dark text-white",
    },
  ],
  TEST_TIME_IN_MINUTES : 1.00,
};

// client side all routes
const QUIZ = "/quiz";

export const CLIENT_PATHS = {
  HOME: "/",
  DASHBOARD: "/dashboard",
  INTERVIEW: "/interview",
  PROFILE: "/profile",
  ABOUT: "/about",
  SIGNIN: "/signin",
  SIGNUP: "/signup",

  STREAM: `${QUIZ}/all-streams`,
  SUBJECT: `${QUIZ}/streams/all-subjects`,
  TOPIC: `${QUIZ}/streams/subject/all-topics`,
  QUESTIONS: `${QUIZ}/streams/subject/topic/questions`,
};

// sidebar menu items routes
export const MenuItem = [
  {
    name: CONSTANTS.HOMEPAGE,
    icon: <RiHomeHeartFill />,
    path: `${CLIENT_PATHS.HOME}`,
    access: [
      CONSTANTS.ROLE.STUDENT,
      CONSTANTS.ROLE.ADMIN,
      CONSTANTS.ROLE.TEACHER,
    ],
  },
  {
    name: CONSTANTS.DASHBOARD,
    icon: <RxDashboard />,
    path: CLIENT_PATHS.DASHBOARD,
    access: [
      CONSTANTS.ROLE.STUDENT,
      CONSTANTS.ROLE.ADMIN,
      CONSTANTS.ROLE.TEACHER,
    ],
  },
  {
    name: CONSTANTS.QUIZES,
    icon: <MdSubject />,
    path: CLIENT_PATHS.STREAM,
    access: [
      CONSTANTS.ROLE.STUDENT,
      CONSTANTS.ROLE.ADMIN,
      CONSTANTS.ROLE.TEACHER,
    ],
  },
  {
    name: CONSTANTS.INTERVIEW,
    icon: <PiStudentFill />,
    path: CLIENT_PATHS.INTERVIEW,
    access: [
      CONSTANTS.ROLE.STUDENT,
      CONSTANTS.ROLE.ADMIN,
      CONSTANTS.ROLE.TEACHER,
    ],
  },
  {
    name: CONSTANTS.PROFILE,
    icon: <FaUserCircle />,
    path: CLIENT_PATHS.PROFILE,
    access: [
      CONSTANTS.ROLE.STUDENT,
      CONSTANTS.ROLE.ADMIN,
      CONSTANTS.ROLE.TEACHER,
    ],
  },
  {
    name: CONSTANTS.ABOUT,
    icon: <FaUserAlt />,
    path: CLIENT_PATHS.ABOUT,
    access: [
      CONSTANTS.ROLE.STUDENT,
      CONSTANTS.ROLE.ADMIN,
      CONSTANTS.ROLE.TEACHER,
    ],
  },
  {
    name: "Only for Teacher ",
    // icon: <MdSubject />,
    path: CLIENT_PATHS.STREAM,
    access: [CONSTANTS.ROLE.ADMIN, CONSTANTS.ROLE.TEACHER],
  },
];

// // frontend routes of sidebar menu
// export const routes = [
//   {
//     path: "/",
//     element: <Outlet />,
//     children: [
//       { path: "", element: <Homepage /> },
//       { path: "dashboard", element: <Dashboard /> },
//       { path: "interview", element: <Interview /> },
//       { path: "quiz/stream", element: <SubjectAreas /> },
//       { path: "about", element: <About /> },
//       { path: "profile", element: <Profile /> },
//     ],
//   },
//   {
//     path: "/admin",
//     element: <Outlet />,
//     children: [
//       { path: "", element: <h1>Working on Admin Routes</h1> },
//       { path: "dashboard", element: <h1>Working on Admin Dashboard</h1> },
//     ],
//   },
//   {
//     path: "*",
//     element: <h1>URL chukliy bhava</h1>,
//   },
// ];

// api
const API_V1 = "/api/v1";
const STUDENT = `${API_V1}/user`;

export const apiPaths = {
  STUDENT: {
    AUTH: {
      LOGIN: `${API_V1}/auth/student/login`,
      REGISTER: `${API_V1}/auth/student/register`,
    },
    SELF: `${STUDENT}/self`,
    TOPIC: {
      FROM_SUBJECT: `${STUDENT}/stream/subject/subjectId/topics`,
    },
    SUBJECT: {
      FROM_STREAM: `${STUDENT}/stream/streamId`,
    },
    STREAM: {
      ALL: `${STUDENT}/all-streams`,
    },
    QUESTIONS_BY_TOPIC: `${STUDENT}/stream/subject/topics/topicId?level={level}`,
  },

  TEACHER: {
    AUTH: {
      LOGIN: `${API_V1}/auth/teacher/login`,
    },
    SELF: `${API_V1}/teacher/self`,
    ADD_SUBJECT: "/teacher/add-subject",
  },
  ADMIN: "/admin",
};
