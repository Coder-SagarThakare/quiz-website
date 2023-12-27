import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import './styles/style.scss'

import { Footer, Navbar, Sidebar } from "./components";
import { About, Dashboard, Homepage, SubjectAreas} from "./pages";

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
        <Footer />
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
