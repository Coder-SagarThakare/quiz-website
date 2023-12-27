import "./App.css";
// import './styles/style.scss'

import { Navbar, Sidebar } from "./components";
import { About, Dashboard, Homepage, SubjectAreas} from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";


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
