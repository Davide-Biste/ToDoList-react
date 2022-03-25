import React, { useEffect, useState, useMemo } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { TextField, Snackbar, Alert, CircularProgress } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
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
  const [openAlertAdd, setOpenAlertAdd] = useState(false);
  const [openAlertDelete, setOpenAlertDelete] = useState(false);
  const [modalDeleteShow, setModalDeleteShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const [currentIdTodo, setCurrentIdTodo] = useState("");
  const [currentDescriptionTodo, setCurrentDescriptionTodo] = useState("");

  const [todo, setTodo] = useState([]);

  const handleCloseModal = () => setModalDeleteShow(false);
  const handleOpenModal = () => setModalDeleteShow(true);

  useEffect(async () => {
    refreshTodo();
  }, []);

  const refreshTodo = async () => {
    setLoading(true);
    let append = await getTodo();
    setTodo(append);
    setLoading(false);
  };

  const enterKeyPress = async (evt) => {
    if (evt.key === "Enter" && evt.target.value !== "") {
      console.log(evt);
      await postToDo(descriptionToDo);
      evt.target.value = "";
      setOpenAlertAdd(true);
      await refreshTodo();
    } else {
      return;
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    if (openAlertAdd === true) {
      setOpenAlertAdd(false);
    } else if (openAlertDelete === true) {
      setOpenAlertDelete(false);
    }
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
    setOpenAlertDelete(true);
    await refreshTodo();
    handleCloseModal();
  };

  const wantToDeleteOpenModal = async (id, description) => {
    handleOpenModal();
    await setCurrentIdTodo(id);
    await setCurrentDescriptionTodo(description);
  };

  const checkCheckBoxToDo = (desc) => {
    console.log(desc);
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
            justifyContent: "flex-start",
            borderRadius: "2rem",
            alignItems: "top",
          }}
        >
          <Snackbar
            open={openAlertAdd}
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
          <Snackbar
            open={openAlertDelete}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="error"
              sx={{ width: "100%" }}
            >
              ToDo eliminata con successo!
            </Alert>
          </Snackbar>
          <Container maxWidth="sm">
            <Box
              sx={{
                height: "auto",
                display: "flex",
                flexDirection: "column",
                padding: "1rem 1rem 1rem 1rem",
                marginRight: "5rem",
                marginLeft: "5rem",
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
                height: "50vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: "1rem 1rem 1rem 1rem",
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
                      <div style={{ display: "flex" }}>
                        <Checkbox
                          inputProps={{ "aria-label": "controlled" }}
                          id={todo._id}
                          onChange={() => checkCheckBoxToDo(todo.description)}
                        />
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
                      </div>
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
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {loading && <CircularProgress />}
              </Box>
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
