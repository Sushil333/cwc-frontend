import React from "react";
import { useRoutes, Navigate } from "react-router-dom";

import Signin from "./pages/Signin";
import Home from "./pages/Home";
import NotFound from "./components/NotFound";
import MainLayout from "./layout/MainLayout";
import Signup from "./pages/Signup";
import CreateStore from "./pages/CreateStore";
import Explore from "./pages/Explore";
import Details from "./pages/Details";
import MyProfile from "./pages/MyProfile";
import OrderHistory from "./pages/OrderHistory";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/explore", element: <Explore /> },
        { path: "/explore/:id", element: <Details /> },
        { path: "404", element: <NotFound /> },
        { path: "/my-profile", element: <MyProfile /> },
        { path: "/order-history", element: <OrderHistory /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    { path: "/login", element: <Signin /> },
    { path: "/signup", element: <Signup /> },
    { path: "/create-store", element: <CreateStore /> },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
