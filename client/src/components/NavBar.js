import React, { useContext } from "react";
import { Route } from "react-router-dom";
import styles from "../styles/NavBar.module.css"
import { Context } from "../index";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
  const {userStore} = useContext(Context)
  return (
    <div className={styles.NavContainter}>
      <a href="/">NavBar</a>
      {userStore.isAuth ? <a href="/cabinet">Cabinet</a> : <a href="/auth">Auth</a>}
      {console.log(userStore.isAuth)}
    </div>
  );
});

export default NavBar;
