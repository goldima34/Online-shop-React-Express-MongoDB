import React, { useContext, useEffect, useState } from "react";
import { Context } from "../";
import styles from '../styles/LoginForm.module.css'
const LoginForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { userStore } = useContext(Context);

  useEffect(() => {
    const registerBtn = document.getElementById('register')
    const container = document.getElementById('container')
    const loginBtn = document.getElementById('login')

  }, [])

  const ClickLog = () => {
    userStore.registration(email, password)
    container.classList.remove("active")
  }

  const ClickReg = () => {
    userStore.registration(email, password)
    container.classList.add("active")
  }


  return (
    <>
      <div className={styles.LoginFormBody}>
        <div className={styles.container} id="container">
          <div className={`${styles.formContainer} ${styles.signUp}`}>
            <form>
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
              <button onClick={() => userStore.loginBtn(email, password)}>Логин</button>
            </form>
          </div>
          <div className={`${styles.formContainer} ${styles.signIn}`}>
            <form>
              <h1>Sign In</h1>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a href="#">Forget your password?</a>
              <button>Sign In</button>
            </form>
          </div>
          <div className={styles.toogleContainer}>
            <div className={styles.toogle}>
              <div className={`${styles.tooglePannel} ${styles.toogleLeft}`}>
                <h1>Welcome Back!</h1>
                <p>Enter your personal details to use all of site features</p>
                <button className={styles.hidden} id="login">Sign In</button>
              </div>
              <div className={`${styles.tooglePannel} ${styles.toogleRight}`}>
                <h1>Hello!</h1>
                <p>Register with your personal details to use all of site features</p>

                <button className={styles.hidden} id="register"
                  onClick={ClickReg()}>
                  Регистрация
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
