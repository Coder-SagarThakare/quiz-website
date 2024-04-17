import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Swal from "sweetalert2";
import { CLIENT_PATHS } from "../constants";

function ProtectedRoutes() {
  const { user } = useAuth();
  const isAuthenticated =
    localStorage.getItem("activeuser_token") || user !== null;
  console.log("USER :", user);
  return isAuthenticated ? <Outlet /> : <Alert />;
}

function Alert({ user }) {
  const navigate = useNavigate();

  Swal.fire({
    title: "Please Login to access this feature ?",
    showCancelButton: true,
    confirmButtonText: "Login",
  }).then((result) => {
    if (result.isConfirmed) {
      navigate(CLIENT_PATHS.SIGNIN);
    } else if (result.isDismissed) {
      navigate(CLIENT_PATHS.HOME);
    }
  });
}

export default ProtectedRoutes;
