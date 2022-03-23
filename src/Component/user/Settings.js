import React from "react";
import { Container, Box, Avatar, Typography } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import _ from "lodash";
import "../../index.css";

const Settings = () => {
  return (
    <Container fixed>
      <Box
        sx={{
          backgroundColor: "#cfe8fc",
          height: "100vh",
        }}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Box
          sx={{
            backgroundColor: "red",
            width: "60vh",
            height: "20vh",
            marginTop: "2rem",
          }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ backgroundColor: deepPurple[500] }}>
              {_.upperCase(_.split(localStorage.getItem("username"), "")[0])}
            </Avatar>
            <Typography
              variant="h5"
              component="h1"
              style={{ marginLeft: "1vh" }}
              className="font"
            >
              {_.upperFirst(localStorage.getItem("username"))}
            </Typography>
          </div>
        </Box>
      </Box>
    </Container>
  );
};

export default Settings;
