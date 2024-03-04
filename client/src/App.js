import React, { useContext, useEffect, useState } from "react";
import { Context } from "./index";
import { observer } from "mobx-react-lite";
import NavBar from "./components/NavBar";
import { Routes, Route, Link } from "react-router-dom";
import { AuthPage } from "./pages/AuthPage";

const App = () => {
  const { userStore } = useContext(Context);

  useEffect(() => {
    async function fetchData() {
      if (localStorage.getItem("token")) {
        await userStore.checkAuth();
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <NavBar />
    </div>
  );
};

export default observer(App);
