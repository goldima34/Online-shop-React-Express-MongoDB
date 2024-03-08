import React, { useContext, useEffect, useState } from "react";
import { Context } from "../index.js";
import UserService from "../services/UserService.js";
import LoginForm from "../components/LoginForm";
import { Navigate } from "react-router-dom";

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
  if (userStore.isAuth) {
    return <Navigate to="/cabinet" />;
  }

  if (!userStore.isAuth) {
    return (
      <div>
        <LoginForm />
      </div>
    );
  }
};

export default AuthPage;
