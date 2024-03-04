import React, { useContext, useEffect, useState } from "react";
import { Context } from "../index.js";
import UserService from "./services/UserService";
import { LoginForm } from "./components/LoginForm";

const AuthPage = () => {
  const [users, setUsers] = useState([]);
  const { userStore } = useContext(Context);

  async function getUsers() {
    try {
      const response = await UserService.fetchUsers();
      setUsers(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  if (!userStore.isAuth) {
    return (
      <div>
        <LoginForm />
        <button onClick={getUsers}>Получить пользователей</button>
      </div>
    );
  }

  return (
    <div>
      <h1>
        {userStore.isAuth
          ? `Пользователь авторизован ${userStore.user.email}`
          : "АВТОРИЗУЙТЕСЬ"}
      </h1>
      <h1>
        {userStore.user.isActivated
          ? "Аккаунт подтвержден по почте"
          : "ПОДТВЕРДИТЕ АККАУНТ!!!!"}
      </h1>
      <button onClick={() => userStore.logout()}>Выйти</button>
      <div>
        <button onClick={getUsers}>Получить пользователей</button>
      </div>
      {users.map((user) => (
        <div key={user.email}>{user.email}</div>
      ))}
    </div>
  );
};

export default AuthPage;
