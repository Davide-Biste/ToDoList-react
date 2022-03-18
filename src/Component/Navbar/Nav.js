import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import '../../style/navbar.css';
import Home from "./Home";
import About from "./About";
import Login from "../Access/Login";
import { Button, Navbar, Container } from "react-bootstrap";

const Nav = () => {
    return (
<div>
        <Router>
        <Navbar>
            <Container>
                <Link to="/">
                <Navbar.Brand>Navbar with text</Navbar.Brand>
                </Link>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>

        <Button>
            Ciao
        </Button>

</div>
    );
};

export default Nav;