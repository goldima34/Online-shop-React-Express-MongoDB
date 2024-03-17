import React, { useContext, useEffect, useState } from "react";
import { Context } from "../index";
import { getBasket } from "../api/BasketApi";
import { BasketItem } from "./BasketItem";
import style from "../styles/Basket.module.css";
import { useNavigate } from "react-router-dom";
import { CartTotal } from "./micro/CartTotal";

export const Basket = () => {
  const navigate = useNavigate();
  const { userStore } = useContext(Context);
  const [items, setItems] = useState([]); // Set initial value to an empty array
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setInterval(() => {
      if (userStore.isAuth) {
        getBasket(userStore.user.id).then((data) => {
          setItems(data.basket.basketItem);
          setLoading(false);
        });
      }
    }, 500);
    items.map((item) => setTotal(item.count * item.item.price));
  }, [userStore.isAuth]);
  if (!userStore.isAuth) {
    return <div>user not auth...</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (userStore.isAuth && items.length > 0) {
    return (
      <>
        <div className={style.BasketHeader}>
          <h4>Продукт</h4>
          <h4>Ціна</h4>
          <h4>Кількість</h4>
          <h4 id={style.totalText}>Всього</h4>
        </div>
        {items.map((element) => (
          <BasketItem
            key={element._id}
            element={element}
            count={element.count}
            userId={userStore.user.id}
          />
        ))}
        <CartTotal/>
      </>
    );
  }

  if (userStore.isAuth && items.length <= 0) {
    return (
      <>
        <div className={style.ClearBasketWrapper}>
          <div className={style.ClearBasketBtnWrapper}>
            <h4>Ваша корзина порожня</h4>
            <button onClick={() => navigate("/")}>
              {" "}
              <p>До магазину</p>
            </button>
          </div>
        </div>
      </>
    );
  }
};
