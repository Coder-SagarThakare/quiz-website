import "./App.css";

import { Sidebar, SignIn, SignUp } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/styles/global.css";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";
import { About, Dashboard, Homepage, Interview, SubjectAreas } from "./pages";
import { ProtectedRoutes } from "./utils";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        {/* {public routes here we can use for authentication} */}
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>

        <Sidebar>
          <Routes>
            <Route path="/" element={<Homepage />} />
            {/* {private routes goes here} */}
            <Route element={<ProtectedRoutes />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="subjects" element={<SubjectAreas />} />
              <Route path="interview" element={<Interview />} />
              <Route path="about" element={<About />} />
            </Route>
          </Routes>
        </Sidebar>

        <Toaster />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
