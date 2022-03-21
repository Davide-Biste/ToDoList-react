import React, { useState } from "react";
import { Form, FormGroup, FormInput, Container, Row, Col } from "shards-react";

const Login = () => {
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
          Login
        </h1>
        <Form className="container-login form">
          <FormGroup>
            <label htmlFor="#username">Username</label>
            <FormInput id="#username" placeholder="Username" />
          </FormGroup>
          <FormGroup>
            <label htmlFor="#password">Password</label>
            <FormInput type="password" id="#password" placeholder="Password" />
          </FormGroup>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
