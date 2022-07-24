import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PublicOutlet() {
  const { currentUser } = useAuth();

  return currentUser ? <Navigate to="/" /> : <Outlet />;
}
