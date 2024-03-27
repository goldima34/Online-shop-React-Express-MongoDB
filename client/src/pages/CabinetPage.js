import React, { useContext, useState } from "react";
import { Context } from "../index";
import { Link, useNavigate } from "react-router-dom";

const CabinetPage = () => {
  const { userStore } = useContext(Context);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  if (loading) {
    {
      if (userStore) {
        setLoading(false);
        console.log(userStore.user.isAdmin);
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
      {userStore.user.isAdmin && <Link to="/admin" >ADMIN</Link>}
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
