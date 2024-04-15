import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Swal from "sweetalert2";

function ProtectedRoutes() {
  const { user } = useAuth();
  return user ? <Outlet /> : <Alert />;
}

function Alert() {
  const navigate = useNavigate();

  Swal.fire({
    title: "Please Login to access this feature ?",
    showCancelButton: true,
    confirmButtonText: "Login",
  }).then((result) => {
    if (result.isConfirmed) {
      navigate("/signin");
    } else if (result.isDismissed) {
      navigate("/");
    }
  });
}

export default ProtectedRoutes;
