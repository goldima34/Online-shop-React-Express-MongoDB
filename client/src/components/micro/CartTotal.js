import React, { useContext, useEffect, useState } from "react";
import { Context } from "../..";
import { getBasket } from "../../api/BasketApi";
import style from "../../styles/CartTotal.module.css";
import { Link, useNavigate } from "react-router-dom";
import { getSumNotAuthBasket } from "../../api/NotAuthBasketApi";

export const CartTotal = () => {
  const { userStore } = useContext(Context);
  const [items, setItems] = useState([]); // Set initial value to an empty array
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setInterval(() => {
      if (userStore.isAuth) {
        getBasket(userStore.user.id).then((data) => {
          setItems(data.basket.basketItem);
          setTotal(
            items.reduce((acc, item) => acc + item.count * item.item.price, 0)
          );
          setLoading(false);
        });
      } else {
        setTotal(getSumNotAuthBasket());
        setLoading(false);
      }
    }, 500);
  }, [userStore.isAuth]);

  useEffect(() => {
    setTotal(
      items.reduce((acc, item) => acc + item.count * item.item.price, 0)
    );
  }, [items]);

  return (
    <div className={style.CartTotalWrapper}>
      <div className={style.CartTotalContet}>
        <div className={style.CartTotalTextWrapper}>
          {loading ? (
            <p>loading</p>
          ) : (
            <p>
              Всього: {total}
              грн
            </p>
          )}
          <hr />
          <button
            className={style.CartTotalBtn}
            onClick={() => navigate("/biling")}
          >
            Зробити замовлення
          </button>
        </div>
      </div>
    </div>
  );
};
