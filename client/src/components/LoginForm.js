import React, { useContext, useEffect, useState } from "react";
import { Context } from "../";
import styles from "../styles/LoginForm.module.css";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [container, setContainer] = useState();
  const { userStore } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    setContainer(document.getElementById("container"));
  }, []);

  const loginFunc = (email, password) => {
    userStore.login(email, password);
    setTimeout(() => {
      if (userStore.isAuth) {
        navigate("/cabinet");
      }
    }, "500");
  };

  const registerFunc = (email, password) => {
    userStore.registration(email, password);
    setTimeout(() => {
      if (userStore.isAuth) {
        navigate("/cabinet");
      }
    }, "500");
  };

  const errorHandler = () => {
    console.log("error");
  };

  return (
    <>
      <div className={styles.LoginFormBody}>
        <div className={styles.container} id="container">
          <div className={`${styles.formContainer} ${styles.signUp}`}>
            <div className={styles.formLogin}>
              <h1>Create Account</h1>

              <input type="text" placeholder="Name" />
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Email"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"
              />
              <button onClick={() => registerFunc(email, password)}>
                Логин
              </button>
            </div>
          </div>
          <div className={`${styles.formContainer} ${styles.signIn}`}>
            <div className={styles.formLogin}>
              <h1>Sign In</h1>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Email"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"
              />
              <a href="#">Forget your password?</a>
              <button onClick={() => loginFunc(email, password)}>
                Sign In
              </button>
            </div>
          </div>
          <div className={styles.toogleContainer}>
            <div className={styles.toogle}>
              <div className={`${styles.tooglePannel} ${styles.toogleLeft}`}>
                <h1>Welcome Back!</h1>
                <p>Enter your personal details to use all of site features</p>
                <button
                  className={styles.hidden}
                  id="login"
                  onClick={() => container.classList.remove(`${styles.active}`)}
                >
                  Sign In
                </button>
              </div>
              <div className={`${styles.tooglePannel} ${styles.toogleRight}`}>
                <h1>Hello!</h1>
                <p>
                  Register with your personal details to use all of site
                  features
                </p>
                {container && (
                  <button
                    className={styles.hidden}
                    id="register"
                    onClick={() => container.classList.add(`${styles.active}`)}
                  >
                    Регистрация
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
