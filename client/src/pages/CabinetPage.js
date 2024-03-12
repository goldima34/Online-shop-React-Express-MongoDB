import React, { useContext, useState } from "react";
import { Context } from "../index";
import { useNavigate } from "react-router-dom";

const CabinetPage = () => {
  const { userStore } = useContext(Context);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  if (loading) {
    {
      if (userStore) {
        setLoading(false);
      }
    }
    return <div>loading</div>;
  }

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
