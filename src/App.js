import "./App.css";
<<<<<<< HEAD
// import './styles/style.scss'

import { Footer, Navbar, Sidebar } from "./components";
import { About, Dashboard, Homepage, SubjectAreas} from "./pages";
=======
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, Sidebar } from "./components";
import { About, Dashboard, Homepage } from "./pages";
>>>>>>> e8cd3bb05d3a32a3f558270299272a4f4a46cdcc

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/About" element={<About />} />
          <Route path="/SubjectAreas" element={<SubjectAreas />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
