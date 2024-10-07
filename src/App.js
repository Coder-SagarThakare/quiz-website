
import "./App.css";
import { Questions, Sidebar, SignIn, SignUp, Topics } from "./components";
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from "react-router-dom";
import "../src/styles/global.css";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";
import { About, Dashboard, Homepage, Interview, PageNotFound, Profile } from "./pages";
import { AuthGuard, ProtectedRoutes } from "./utils";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import QuizHomepage from "./pages/QuizHomepage";
import TestResult from "./components/TestResult";

function AppLayout() {
  const checkDevice = () => {
    return window.innerWidth > 768;
  };

  const [isOpen, setIsOpen] = useState(checkDevice);

  return (
    <div className={`d-flex gap-4 vh-100 p-3 ${isOpen && "flex-column-custom"}`}>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {!isOpen && (
        <FaBars
          size={25}
          className="burger-menu cursor primary-white border p-2"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
      )}

      <div className="w-100 h-100 overflow-y-auto glass-effect">
        <Outlet />
      </div>
    </div>
  );
}

const router = createBrowserRouter([
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
              { path: "streams/subject/topic/questions", element: <Questions /> },
              { path: "result", element: <TestResult /> },
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

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster />
    </AuthProvider>
  );
}

export default App;




// CODE BEFORE CONVERTE APP.JS TO CREATEBROWSERROUTER ARRAY

// import "./App.css";

// import { Questions, Sidebar, SignIn, SignUp, Topics } from "./components";
// import {
//   BrowserRouter as Router,
//   Outlet,
//   Route,
//   Routes,
//   Navigate,
// } from "react-router-dom";
// import "../src/styles/global.css";
// import { Toaster } from "react-hot-toast";
// import { AuthProvider } from "./context/AuthContext";
// import { About, Dashboard, Homepage, Interview, PageNotFound, Profile } from "./pages";
// import { AuthGuard, ProtectedRoutes } from "./utils";
// import { useState } from "react";
// import { FaBars } from "react-icons/fa6";
// import QuizHomepage from "./pages/QuizHomepage";


// function AppLayout() {
//   const checkDevice = () => {
//     return window.innerWidth > 768 ? true : false;
//   };

//   const [isOpen, setIsOpen] = useState(checkDevice);

//   return (
//     <div className={`d-flex gap-4 vh-100 p-3 ${isOpen && "flex-column-custom"}`}>
//       <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

//       {!isOpen && (
//         <FaBars
//           size={25}
//           className="burger-menu cursor primary-white border p-2 "
//           onClick={() => {
//             setIsOpen(!isOpen);
//           }}
//         />
//       )}

//       <div className=" w-100 h-100 overflow-y-auto glass-effect">
//         <Outlet />
//       </div>
//     </div>
//   );
// }

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>
//           {/* {public routes } */}
//           <Route element={<AuthGuard />}>
//             <Route path="/signin" element={<SignIn />} />
//             <Route path="/signup" element={<SignUp />} />
//           </Route>

//           <Route element={<AppLayout />}>
//             {/*make it private route */}
//             {/* <Route path="/question" element={<Question />} /> */}
//             <Route path="/" element={<Homepage />} />

//             {/* {private routes goes here} */}
//             <Route
//               element={
//                 <ProtectedRoutes />
//               }
//             >
//               <Route path="dashboard" element={<Dashboard />} />
//               <Route path="quiz"> 
//                 <Route path="all-streams" element={<QuizHomepage />}/>
//                 <Route path="streams/all-subjects" element={<QuizHomepage />} />
//                 <Route path="streams/subject/all-topics" element={<Topics />} />
//                 <Route path="streams/subject/topic/questions" element={<Questions />} />
//               </Route>
//               <Route path="interview" element={<Interview />} />
//               <Route path="about" element={<About />} />{" "}
//               {/*user and teacher both have access */}
//               <Route path="profile" element={<Profile />} />{" "}
//               {/*user and teacher both have access */}
//             </Route>
//           </Route>
//           <Route
//             path="/page-not-found"
//             element={<PageNotFound />}
//           />
//           <Route path="*" element={<Navigate to="/page-not-found" />} />
//         </Routes>
//         <Toaster />
//       </Router>
//     </AuthProvider>
//   );
// }
// export default App;
