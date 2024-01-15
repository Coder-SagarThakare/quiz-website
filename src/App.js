import "./App.css";
import SignInForm from "./auth/forms/SignInForm";
import SignUpForm from "./auth/forms/SignUpForm";

import { Navbar, Sidebar } from "./components";
import { About, Dashboard, Homepage, SubjectAreas, Interview} from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import '../src/styles/global.css'  

function App() {
  return (
    <BrowserRouter>
      {/* {public routes here we can use for authentication} */}
      <Routes>
          <Route path="/signin" element={<SignInForm />} />
          <Route path="/signup" element={<SignUpForm />} />
      </Routes>

      {/* {private routes here we can use for authentication} */}

      {/* <Navbar /> */}
      <Sidebar>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/subjects" element={<SubjectAreas />} />
          <Route path="/interview" element={<Interview />} />

        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
