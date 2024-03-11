import "./App.css";

import { Sidebar, SignIn, SignUp } from "./components";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "../src/styles/global.css";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";
import { About, Dashboard, Homepage, Interview, SubjectAreas } from "./pages";
import { AuthGuard, ProtectedRoutes } from "./utils";


function AppLayout() {
  console.log("in app layout");
  return (
    <div className="d-flex vh-100 pt-4 ">
      <Sidebar />
      <div className="overflow-scroll w-100 vh-100 px-4 ">
        <Outlet />
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>

        <Routes>

          {/* {public routes } */}
          <Route element={<AuthGuard />}>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>

          <Route element={<AppLayout />}>
            <Route path="/" element={<Homepage />} />

            {/* {private routes goes here} */}
            <Route element={<ProtectedRoutes />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="subjects" element={<SubjectAreas />} />
              <Route path="interview" element={<Interview />} />
              <Route path="about" element={<About />} />
            </Route>
          </Route>

        </Routes>
        <Toaster />
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;
