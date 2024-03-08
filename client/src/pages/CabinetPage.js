import React, { useContext } from "react";
import { Context } from "../index";
import { useNavigate } from "react-router-dom";

const CabinetPage = () => {
  const { userStore } = useContext(Context);
  const navigate = useNavigate();
  return (
    <div>
      <h1>
        {userStore.isAuth
          ? `Пользователь авторизован ${userStore.user.email}`
          : "АВТОРИЗУЙТЕСЬ"}
      </h1>
      <h1>
        {userStore.isActivated
          ? "Аккаунт подтвержден по почте"
          : "ПОДТВЕРДИТЕ АККАУНТ!!!!"}
      </h1>
      <button
        onClick={() => {
          userStore.logout();
          navigate("/");
        }}
      >
        Выйти
      </button>
    </div>
  );
};

export default CabinetPage;
