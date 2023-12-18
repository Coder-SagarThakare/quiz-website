import "./App.css";
// import Sidebar1 from "./component/Sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./component/Layout/Layout";
// import Topic from "./component/Topic/Topic";

function App() {
  return (
    <div className=" App border border-dark">
        {/* <Topic /> */}
    <Router>
      <Routes>
        <Route path="/*" element={<Layout />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
