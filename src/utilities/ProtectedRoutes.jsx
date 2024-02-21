import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Homepage } from "../pages";

function ProtectedRoutes() {
  const { user } = useAuth();
  return user ? <Outlet /> : <NavLink to={'/'}  />
}

export default ProtectedRoutes;
