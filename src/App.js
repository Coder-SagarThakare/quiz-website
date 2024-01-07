import "./App.css";
import { Navbar, Sidebar } from "./components";
import { About, Dashboard, Homepage, SubjectAreas} from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import '../src//styles/global.css'  

function App() {
  return (
    <BrowserRouter>
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
