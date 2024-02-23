import "./App.css";

import { SagarSidebar, SignIn, SignUp } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/styles/global.css";
import { Toaster } from "react-hot-toast";
import Router from "./routes/Router";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        {/* {public routes here we can use for authentication} */}
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>

        {/* {private routes goes here} */}

        <SagarSidebar>
          <Routes>
            <Route path="/*" element={<Router />} />
          </Routes>
        </SagarSidebar>

        <Toaster />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
