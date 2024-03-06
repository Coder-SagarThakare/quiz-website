import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { manageToken } from "../services";

function AuthGuard() {
  return manageToken("get", "token") ? <Navigate to="/" /> : <Outlet />;
}

export default AuthGuard;
