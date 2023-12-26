import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./component/pages/Dashboard";
import About from "./component/pages/About";
import Sidebar from "./component/sidebar/Sidebar";
import Home from "./component/home/Home.jsx";
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Sidebar>
        <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="/Dashboard" element={<Dashboard/>} />
          <Route path="/About" element={<About/>} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
