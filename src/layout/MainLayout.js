import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "../components/Footer";
import MainNavbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <>
      <MainNavbar />
      <Outlet />
      <Footer />
    </>
  );
}
