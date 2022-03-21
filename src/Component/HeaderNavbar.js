import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link, NavLink, useLocation } from "react-router-dom";

const HeaderNavbar = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  if (localStorage.getItem("token")) {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">ToDoList</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">token id</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  } else {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <NavLink className="nav-link" exact to="/">
              ToDoList
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Brand
              className={splitLocation[1] === "login" ? "active" : ""}
            >
              <NavLink className="nav-link" exact to="/login">
                Login
              </NavLink>
            </Navbar.Brand>
            <Navbar.Brand
              className={splitLocation[1] === "register" ? "active" : ""}
            >
              <NavLink className="nav-link" exact to="/register">
                Register
              </NavLink>
            </Navbar.Brand>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
};

export default HeaderNavbar;
