import React from "react";
import { Route } from "react-router-dom";
import styles from "../styles/NavBar.module.css"

const NavBar = () => {
  return (
    <div className={styles.NavContainter}>
      <a href="/">NavBar</a>
      <a href="/auth">Auth</a>
    </div>
  );
};

export default NavBar;
