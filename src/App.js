import "./App.css";
import SignInForm from "./auth/forms/SignInForm";
import SignUpForm from "./auth/forms/SignUpForm";

import { Navbar, Sidebar } from "./components";
import { About, Dashboard, Homepage, SubjectAreas } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* {public routes here we can use for authentication} */}
      <Routes>
          <Route path="/SignIn" element={<SignInForm />} />
          <Route path="/SignUp" element={<SignUpForm />} />
      </Routes>

      {/* {private routes here we can use for authentication} */}

      <Navbar />
      <Sidebar>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/subjects" element={<SubjectAreas />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
