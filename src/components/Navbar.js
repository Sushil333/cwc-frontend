import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import { userActions } from '../_actions';

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
  const user = useSelector((state) => state.authentication.user);

  const logout = () => {
    dispatch(userActions.logout()); 
  }
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      className="osahan-nav shadow-sm"
      variant="light"
    >
      <Container>
        <Navbar.Brand href="/">
          Cooked With Care
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {!user && (
              <>
                <Link to="/login" className="nav-link">
                  Login
                </Link>
                <Link to="/signup" className="nav-link">
                  Signup
                </Link>
              </>
            )}
            {user && (
              <NavDropdown title={<MyAccount />} style={{ cursor: "pointer" }}>

                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
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