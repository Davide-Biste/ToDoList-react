import "bootstrap/dist/css/bootstrap.min.css";
import HeaderNavbar from "./Component/HeaderNavbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Login from "./Component/user/Login";
import Register from "./Component/user/Register";
import Profile from "./Component/user/Profile";
import Settings from "./Component/user/Settings";
import "./index.css";

function App() {
  return (
    <div className="App">
      <HeaderNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<Profile />} />
        <Route path="/user/settings" element={<Settings />} />
        {/*
                  <Route exact path="/about" component={About} />
                  <Route exact path="/contact" component={Contact} />
                  <Route exact path="/users/add" component={AddUser} />
                  <Route exact path="/users/edit/:id" component={EditUser} />
                  <Route exact path="/users/:id" component={User} />
                  <Route component={NotFound} />
                  */}
      </Routes>
    </div>
  );
}

export default App;
