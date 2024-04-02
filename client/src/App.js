import React, { useContext, useEffect, useState } from "react";
import { Context } from "./index.js";
import { observer } from "mobx-react-lite";
import NavBar from "./components/NavBar.js";
import { AppRouter } from "./components/AppRouter.js";
import "./styles/index.module.css";
//import { Footer } from "./components/Footer";

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
    <>
      <NavBar />
      <AppRouter />
      {/* <Footer /> */}
    </>
  );
};

export default observer(App);
