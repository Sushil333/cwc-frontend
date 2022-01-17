import React from "react";
import { useRoutes, Navigate } from "react-router-dom";

import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import NotFound from "./components/NotFound";
import MainLayout from "./layout/MainLayout";


export default function Router() {
  return useRoutes([
    { path: "login", element: <Login /> },
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '404', element: <NotFound /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
