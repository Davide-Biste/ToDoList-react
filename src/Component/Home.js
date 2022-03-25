import React, { useEffect } from "react";
import UserHome from "./home/UserHome";
import DefaultHome from "./home/DefaultHome";

const Home = () => {
  if (localStorage.getItem("token")) {
    return <UserHome />;
  } else {
    return <DefaultHome />;
  }
};

export default Home;
