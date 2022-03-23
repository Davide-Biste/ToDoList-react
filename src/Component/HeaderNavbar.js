import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link, NavLink, useLocation } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange, deepPurple } from "@mui/material/colors";
import _ from "lodash";

const HeaderNavbar = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  if (localStorage.getItem("token")) {
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
            <Navbar.Brand>
              <NavLink className="nav-link" exact to="/user">
                <Stack direction="row" spacing={2}>
                  <Avatar sx={{ backgroundColor: deepPurple[500] }}>
                    {_.upperCase(
                      _.split(localStorage.getItem("username"), "")[0]
                    )}
                  </Avatar>
                </Stack>
              </NavLink>
            </Navbar.Brand>
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
            <Navbar.Brand>
              <NavLink className="nav-link" exact to="/login">
                Login
              </NavLink>
            </Navbar.Brand>
            <Navbar.Brand>
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
