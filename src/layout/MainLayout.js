import React from "react";
import Footer from "../components/Footer";
import MainNavbar from "../components/Navbar/Navbar";

export default function MainLayout({ children }) {
  return (
    <>
      <MainNavbar />
      {children}
      <Footer />
    </>
  );
}
