import React, { useState } from "react";
import { Container, Form, FormGroup, FormInput } from "shards-react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { postRegister } from "../../api";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const changeUsername = (evt) => {
    setUsername(evt.target.value);
  };
  const changePassword = (evt) => {
    setPassword(evt.target.value);
  };

  return (
    <div>
      <Container className="container-login">
        <h1
          style={{
            marginTop: "2rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Register
        </h1>
        <Form className="container-login form">
          <FormGroup>
            <label htmlFor="#username">Username</label>
            <FormInput
              id="username"
              placeholder="Username"
              onChange={changeUsername}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="#password">Password</label>
            <FormInput
              type="password"
              id="password"
              placeholder="Password"
              onChange={changePassword}
            />
          </FormGroup>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Link to="/register">
              <Button
                variant="contained"
                style={{ marginTop: "1rem" }}
                onClick={() => postRegister(username, password)}
              >
                Register
              </Button>
            </Link>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default Register;
