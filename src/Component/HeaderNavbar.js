import React, { useEffect, useState } from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import {
  Avatar,
  Stack,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
  IconButton,
  Tooltip,
  CircularProgress,
} from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { Settings, Logout } from "@mui/icons-material";
import _ from "lodash";

const HeaderNavbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [awaitCircular, setAwaitCircular] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    console.log({ awaitCircular });
  }, [awaitCircular]);

  const onCLickLogOut = () => {
    setAwaitCircular(true);
    localStorage.clear();
    window.location.href = "/";
    setAwaitCircular(false);
  };

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
              <Stack direction="row" spacing={2}>
                <div>
                  <Tooltip title="Account settings">
                    <IconButton
                      onClick={handleClick}
                      size="small"
                      sx={{ ml: 2 }}
                      aria-controls={open ? "account-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                    >
                      <Avatar sx={{ backgroundColor: deepPurple[500] }}>
                        {_.upperCase(
                          _.split(localStorage.getItem("username"), "")[0]
                        )}
                      </Avatar>
                    </IconButton>
                  </Tooltip>
                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        "&:before": {
                          content: '""',
                          display: "block",
                          position: "absolute",
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: "background.paper",
                          transform: "translateY(-50%) rotate(45deg)",
                          zIndex: 0,
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <MenuItem>
                      <Avatar sx={{ backgroundColor: deepPurple[500] }}>
                        {_.upperCase(
                          _.split(localStorage.getItem("username"), "")[0]
                        )}
                      </Avatar>
                      {_.upperFirst(localStorage.getItem("username"))}
                    </MenuItem>
                    <Divider />
                    <MenuItem component={Link} to="/user/settings">
                      <ListItemIcon>
                        <Settings fontSize="small" />
                      </ListItemIcon>
                      Settings
                    </MenuItem>
                    <MenuItem onClick={onCLickLogOut}>
                      <ListItemIcon>
                        <Logout fontSize="small" />
                      </ListItemIcon>
                      Logout
                      {awaitCircular && <CircularProgress />}
                    </MenuItem>
                  </Menu>
                </div>
              </Stack>
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
