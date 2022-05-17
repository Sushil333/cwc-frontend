import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import { logout } from "../redux/actions/authAction";

export const MyAccount = () => {
  return (
    <div className="d-inline-block">
      <img
        alt="user"
        src="https://osahan-eat.surge.sh/img/user/4.png"
        className="nav-osahan-pic rounded-pill"
      />
      My Account
    </div>
  );
};

export default function MainNavbar() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state) => state.authState.isAuthenticated
  );

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      className="osahan-nav shadow-sm"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            src="/logo.jpeg"
            alt="logo"
            width="48"
            height="48"
            className="rounded-circle mr-md-3"
          />
          <span className="d-none d-md-inline-block">Cooked With Care</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto align-items-center">
            {!isAuthenticated && (
              <>
                <Link to="/login" className="nav-link">
                  About Us
                </Link>
                <Link to="/login" className="nav-link">
                  Login
                </Link>
                <Link to="/signup" className="nav-link">
                  Signup
                </Link>
                <Link to="/create-store" className="nav-link">
                  <span className="btn btn-sm btn-primary">
                    Register As Brand
                  </span>
                </Link>
              </>
            )}
            {isAuthenticated && (
              <NavDropdown title={<MyAccount />} style={{ cursor: "pointer" }}>
                <NavDropdown.Item href="/my-profile">
                  My Profile
                </NavDropdown.Item>
                <NavDropdown.Item href="/order-history">
                  My Orders
                </NavDropdown.Item>
                <NavDropdown.Item onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
                {/* <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item> */}
                {/* <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item> */}
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
