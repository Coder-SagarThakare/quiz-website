import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import { Navbar, Sidebar } from "./components";
import { About, Dashboard, Homepage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
