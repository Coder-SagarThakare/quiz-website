import "./App.css";

import { Sidebar, SignIn, SignUp } from "./components";
import { About, Dashboard, Homepage, Interview, SubjectAreas } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/styles/global.css";

function App() {
  return (
    <BrowserRouter>
      {/* {public routes here we can use for authentication} */}
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
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

          <Route path="/*" element={<h1>not found </h1>} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
