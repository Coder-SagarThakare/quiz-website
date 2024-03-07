import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function AuthGuard() {

  const {user} = useAuth();
  return user ? <Navigate to="/" /> : <Outlet />;
}

export default AuthGuard;
