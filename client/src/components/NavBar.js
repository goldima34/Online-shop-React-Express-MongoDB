import React, { useContext } from "react";
import { Link, Route } from "react-router-dom";
import styles from "../styles/NavBar.module.css";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import { Search } from "./Search";

const NavBar = observer(() => {
  const { userStore } = useContext(Context);
  return (
    <div className={styles.NavContainter}>
      <div className={styles.NavHeader}>
        <h1>StoreName</h1>
      </div>

      <div className={styles.navbarMenu}>
        <ul className={styles.navbarNav}>
          <li>
            <Link to="/">NavBar</Link>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            {userStore.isAuth ? (
              <Link to="/cabinet">Cabinet</Link>
            ) : (
              <Link to="/auth">Auth</Link>
            )}
          </li>
        </ul>
      </div>

      <div className={styles.navSearch}>
        <Search/>
      </div>
    </div>
  );
});

export default NavBar;
