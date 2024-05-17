import "./App.css";

import { Question, Sidebar, SignIn, SignUp, Topics } from "./components";
import { BrowserRouter as Router, Outlet, Route, Routes } from "react-router-dom";
import "../src/styles/global.css";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";
import { About, Dashboard, Homepage, Interview, Profile } from "./pages";
import { AuthGuard, ProtectedRoutes } from "./utils";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import QuizHomepage from "./pages/QuizHomepage";

function AppLayout() {

  const checkDevice = () => {
    return window.innerWidth > 768 ? true : false;
  }
  
  const [isOpen, setIsOpen] = useState(checkDevice);

  return (
    <div className={`d-flex vh-100 pt-4 ${isOpen && "flex-column-custom"}`}>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {!isOpen && (
        <FaBars
          size={25}
          className="burger-menu cursor primary-white border p-2 "
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
      )}

      <div className="overflow-scroll w-100 vh-100 px-4 ">
        <Outlet />
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* {public routes } */}
          <Route element={<AuthGuard />}>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />


          </Route>

          <Route element={<AppLayout />}>
            {/*make it private route */}
            <Route path="/question" element={<Question />} />
            <Route path="/" element={<Homepage />} />

            {/* {private routes goes here} */}
            <Route element={<ProtectedRoutes />}>
              <Route path="dashboard" element={<Dashboard />} />

              <Route path="quiz/stream" >
                <Route path="" element={<QuizHomepage />} />
                <Route path=":streamId" element={<QuizHomepage />} />
                <Route path="subject/:subjectId" element={<Topics />} />
              </Route>

              <Route path="interview" element={<Interview />} />
              <Route path="about" element={<About />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Route>
        </Routes>
        <Toaster />
      </Router>
    </AuthProvider>
  );
}
export default App;
