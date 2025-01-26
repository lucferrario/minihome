import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { auth } from "../firebase";
import { Outlet } from "react-router-dom";
import Login from "./screens/Login";

function PrivateRoute() {
  let currentUser = useAuth();

  return auth.currentUser ? <Outlet /> : <Login />;
}

export default PrivateRoute;
