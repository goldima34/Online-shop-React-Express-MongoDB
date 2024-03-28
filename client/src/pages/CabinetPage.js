import React, { useContext, useEffect, useState } from "react";
import { Context } from "../index";
import { Link, useNavigate } from "react-router-dom";

const CabinetPage = () => {
  const { userStore } = useContext(Context);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await userStore.checkAuth();
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [userStore]);
  
  if (loading) {
    return <div>loading</div>;
  }

  return (
    <div>
      <h1>Пользователь авторизован {userStore.user.email}</h1>
      {userStore.user.isAdmin && <Link to="/admin">ADMIN</Link>}
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
