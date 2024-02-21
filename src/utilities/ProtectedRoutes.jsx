import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { LoginModal } from "../components";
import Swal from "sweetalert2";

function ProtectedRoutes() {
  const { user } = useAuth();
  console.log(user);
  return user ? <Outlet /> : <Alert />;
}

function Alert() {
  const navigate = useNavigate();
  Swal.fire({
    title: "Please Login to access this feature ?",
    // showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Login",
    // denyButtonText: `Register`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      navigate("/signin");
    } else if (result.isDenied) {
      navigate("/");
    }
  });
}

export default ProtectedRoutes;
