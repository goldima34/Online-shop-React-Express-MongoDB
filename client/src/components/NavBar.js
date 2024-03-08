import React, { useContext } from "react";
import { Link, Route } from "react-router-dom";
import styles from "../styles/NavBar.module.css";
import { Context } from "../index";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
  const { userStore } = useContext(Context);
  return (
    <div className={styles.NavContainter}>
      <Link to="/">NavBar</Link>
      {userStore.isAuth ? (
        <Link to="/cabinet">Cabinet</Link>
      ) : (
        <Link to="/auth">Auth</Link>
      )}
    </div>
  );
});

export default NavBar;
