import axios from "axios";

export const postLogin = async (username, password) => {
  try {
    const user = await axios.post(
      "/auth/login",
      {},
      {
        auth: {
          username: username,
          password: password,
        },
      }
    );
    localStorage.setItem("token", user.data.token);
    localStorage.setItem("username", user.config.auth.username);
    window.location.reload();
    return user.data.token;
  } catch (e) {
    console.log({ errorPostLogin: e });
    return [];
  }
};

export const postRegister = async (username, password) => {
  try {
    let params = new URLSearchParams();
    params.append("username", username);
    params.append("password", password);

    const user = await axios.post("/users", params);
    console.log({ user });
    return user;
  } catch (e) {
    console.log({ errorPostRegister: e });
    return [];
  }
};

export const postToDo = async (desc) => {
  try {
    let params = new URLSearchParams();
    params.append("description", desc);

    const todo = await axios.post("/to-do", params, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    console.log(todo);
    return todo;
  } catch (e) {
    console.log({ errorPostLogin: e });
    return [];
  }
};

export const getTodo = async () => {
  try {
    const { data: todo } = await axios.get("/to-do", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return todo;
  } catch (e) {
    console.log({ errorGetToDo: e });
    return [];
  }
};

export const deleteTodo = async (id) => {
  try {
    const deleted = await axios.delete("/to-do/" + id, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return deleted;
  } catch (e) {
    console.log({ errorDeleteTodo: e });
    return [];
  }
};
