import React, { useEffect, useState, useMemo } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { TextField, Snackbar, Alert } from "@mui/material";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { deleteTodo, postToDo } from "../../api";
import { getTodo } from "../../api";
import ClearIcon from "@mui/icons-material/Clear";
import { Modal, Button } from "react-bootstrap";
import "../../index.css";

const UserHome = () => {
  const [descriptionToDo, setDescriptionToDo] = useState("");
  const [openAlertSuccess, setOpenAlertSuccess] = useState(false);
  const [modalDeleteShow, setModalDeleteShow] = useState(false);

  const [currentIdTodo, setCurrentIdTodo] = useState("");
  const [currentDescriptionTodo, setCurrentDescriptionTodo] = useState("");

  const handleCloseModal = () => setModalDeleteShow(false);
  const handleOpenModal = () => setModalDeleteShow(true);

  const [todo, setTodo] = useState([]);

  useEffect(async () => {
    refreshTodo();
  }, []);

  const refreshTodo = async () => {
    let append = await getTodo();
    setTodo(append);
  };

  const enterKeyPress = async (evt) => {
    if (evt.key === "Enter") {
      setOpenAlertSuccess(true);
      await postToDo(descriptionToDo);
      await refreshTodo();
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlertSuccess(false);
  };

  const writeDescription = (evt) => {
    setDescriptionToDo(evt.target.value);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const wantToDeleteCloseModal = async () => {
    await deleteTodo(currentIdTodo);
    await refreshTodo();
    handleCloseModal();
  };

  const wantToDeleteOpenModal = async (id, description) => {
    handleOpenModal();
    await setCurrentIdTodo(id);
    await setCurrentDescriptionTodo(description);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box
          sx={{
            marginTop: "2rem",
            marginBottom: "10rem",
            paddingTop: "2rem",
            backgroundColor: "#FEFBF7",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderRadius: "2rem",
            alignItems: "top",
          }}
        >
          <Snackbar
            open={openAlertSuccess}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              ToDo aggiunta con successo!
            </Alert>
          </Snackbar>
          <Container maxWidth="sm">
            <Box
              sx={{
                bgcolor: "#cfe8fc",
                height: "auto",
                display: "flex",
                flexDirection: "column",
                padding: "1rem 1rem 1rem 1rem",
                margin: "1rem 1rem 1rem",
              }}
            >
              <TextField
                id="standard-basic"
                autoFocus={true}
                label="ToDo"
                variant="standard"
                onKeyPress={enterKeyPress}
                onChange={writeDescription}
              />
            </Box>
          </Container>
          <Container maxWidth="sm">
            <Box
              sx={{
                bgcolor: "#cfe8fc",
                height: "50vh",
                display: "flex",
                flexDirection: "column",
                padding: "1rem 1rem 1rem 1rem",
                margin: "1rem 1rem 1rem",
              }}
            >
              <Stack spacing={2}>
                {todo.map((todo) => {
                  return (
                    <Item
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                      key={todo._id}
                    >
                      <p
                        style={{
                          fontFamily:
                            "-apple-system, BlinkMacSystemFont, sans-serif",
                          fontStyle:
                            "-apple-system, BlinkMacSystemFont, sans-serif",
                          fontSize: "1.2rem",
                          marginLeft: "1rem",
                          marginTop: "1rem",
                        }}
                      >
                        {todo.description}
                      </p>
                      <ClearIcon
                        className="icon-x"
                        style={{ marginRight: "1rem" }}
                        onClick={() =>
                          wantToDeleteOpenModal(todo._id, todo.description)
                        }
                      />
                    </Item>
                  );
                })}
              </Stack>
            </Box>
          </Container>
        </Box>
      </Container>
      <Modal show={modalDeleteShow} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Elimina</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Sei sicuro di voler rimuovere il ToDo: {currentDescriptionTodo} ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="danger" onClick={wantToDeleteCloseModal}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default UserHome;
