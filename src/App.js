import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/home/dashboard/Dashboard.jsx";
import About from "./pages/home/about/About.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Home from "./pages/home/homepage/Home.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
