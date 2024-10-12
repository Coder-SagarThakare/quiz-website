import { createBrowserRouter, Navigate } from "react-router-dom";
import { AnswersContext } from "../context/AnswersContext";
import { About, Dashboard, Homepage, Interview, PageNotFound, Profile, QuizHomepage } from "../pages";
import { AuthGuard,ProtectedRoutes } from "../utils";
import { Questions, Sidebar, SignIn, SignUp, Topics } from "../components";
import { AppLayout } from "../App";
import { TestResult } from "../components";


export const router = createBrowserRouter([
    {
        element: <AuthGuard />,
        children: [
            { path: "/signin", element: <SignIn /> },
            { path: "/signup", element: <SignUp /> },
        ],
    },
    {
        element: <AppLayout />,
        children: [
            { path: "/", element: <Homepage /> },
            {
                element: <ProtectedRoutes />,
                children: [
                    { path: "dashboard", element: <Dashboard /> },
                    {
                        path: "quiz",
                        children: [
                            { path: "all-streams", element: <QuizHomepage /> },
                            { path: "streams/all-subjects", element: <QuizHomepage /> },
                            { path: "streams/subject/all-topics", element: <Topics /> },
                            {
                                element: <AnswersContext />,
                                children: [
                                    { path: "streams/subject/topic/questions", element: <Questions /> },
                                    { path: "result", element: <TestResult /> },
                                ]
                            }
                        ],
                    },
                    { path: "interview", element: <Interview /> },
                    { path: "about", element: <About /> },
                    { path: "profile", element: <Profile /> },
                ],
            },
        ],
    },
    { path: "/page-not-found", element: <PageNotFound /> },
    { path: "*", element: <Navigate to="/page-not-found" /> },
]);

