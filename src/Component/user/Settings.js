import React, { useEffect, useState } from "react";
import { Container, Box, Avatar, Button, TextField } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { putUser } from "../../api";
import _ from "lodash";
import "../../index.css";

const Settings = () => {
  const [currentUsername, setCurrentUsername] = useState(
    localStorage.getItem("username")
  );
  const [isDisabled, setIsDisabled] = useState(false);

  const parseJwt = (token) => {
    if (!token) {
      return;
    }
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));
  };

  const modifyUser = async () => {
    const { user: id } = await parseJwt(localStorage.getItem("token"));
    const put = await putUser(id.id, currentUsername);
    console.log({ put });
  };

  const changeCurrentUsername = (evt) => {
    setCurrentUsername(evt.target.value);
  };

  useEffect(() => {
    if (currentUsername === localStorage.getItem("username")) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [currentUsername]);

  return (
    <Container fixed>
      <Box
        sx={{
          height: "100vh",
        }}
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            borderRadius: "1rem",
            borderColor: "#53b885",
            borderStyle: "dashed",
            borderWidth: "0.3rem",
            width: "60vh",
            height: "20vh",
            marginTop: "2rem",
          }}
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{
              backgroundColor: deepPurple[500],
            }}
            style={{ width: "10vh", height: "10vh", fontSize: "8vh" }}
          >
            {_.upperCase(_.split(localStorage.getItem("username"), "")[0])}
          </Avatar>
          <TextField
            value={currentUsername}
            onChange={changeCurrentUsername}
            variant="standard"
            style={{
              marginLeft: "1rem",
              width: "30%",
              alignItems: "center",
              justifyContent: "center",
            }}
            InputProps={{ style: { fontSize: 40 } }}
          />
        </Box>
        <Box
          sx={{
            width: "60vh",
            height: "20vh",
            marginTop: "2rem",
          }}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-start",
          }}
        >
          <Button
            disabled={isDisabled}
            variant="contained"
            color="success"
            style={{
              width: "15%",
              height: "30%",
              fontSize: "1.6rem",
              margin: "2rem 2rem 2rem 2rem",
            }}
            onClick={modifyUser}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Settings;
