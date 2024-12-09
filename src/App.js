
import "./App.css";
import { Sidebar } from "./components";
import { RouterProvider, Outlet } from "react-router-dom";
import "../src/styles/global.css";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { router } from "./routes/Router";

export function AppLayout() {
  const checkDevice = () => {
    return window.innerWidth > 768;
  };

  const [isOpen, setIsOpen] = useState(checkDevice);

  return (
    <div className={`d-flex gap-4 vh-100 p-3 ${isOpen && "flex-column-custom"}`}>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {!isOpen && (
        <FaBars
          size={25}
          className="burger-menu cursor primary-white border p-2"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
      )}

      <div className="w-100 h-100 overflow-y-auto glass-effect">
        <Outlet />
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster />
    </AuthProvider>
  );
}

export default App;
