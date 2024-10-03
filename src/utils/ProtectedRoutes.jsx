import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Swal from "sweetalert2";
import { CLIENT_PATHS, CONSTANTS } from "../constants";

function ProtectedRoutes() {
  const { user } = useAuth();

  const isAuthenticated =
    localStorage.getItem(CONSTANTS.TOKEN) || user !== null;

  return isAuthenticated  ? <Outlet /> : <LoginAlert />;
}

function LoginAlert() {
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

// function AccessForbiddenAlert() {
//   // const navigate = useNavigate();
//   // window.history.back()

//   Swal.fire({
//     icon: "error",
//     title: "Oops...! ",
//     text: "Access Forbidden!",
//     // footer: '<a href="#">Why do I have this issue?</a>'
//   });
// }

export default ProtectedRoutes;
