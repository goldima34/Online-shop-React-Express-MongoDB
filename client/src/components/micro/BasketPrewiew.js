import React, { useContext, useEffect, useState } from "react";
import styles from "../../styles/BasketPrewiew.module.css";
import { BasketPrewiewItem } from "./BasketPrewiewItem";
import { Context } from "../..";
import { getBasket } from "../../api/BasketApi";
import { useNavigate } from "react-router-dom";
import { getNotAuthBasket } from "../../api/NotAuthBasketApi";

export const BasketPrewiew = ({ active, setActive }) => {
  const { userStore } = useContext(Context);
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setInterval(() => {
      try {
        if (userStore.isAuth) {
          getBasket(userStore.user.id).then((data) => {
            setItems(data.basket.basketItem);
          });
        } else {
          setItems(getNotAuthBasket());
        }
      } catch {
        console.log("user not auth");
      }
    }, 500);
  }, [userStore.user.id, userStore.isAuth]);

  return (
    <div
      className={
        active
          ? `${styles.BasketPrewiewWrapper} ${styles.active}`
          : styles.BasketPrewiewWrapper
      }
      onClick={() => setActive(false)}
    >
      <div
        className={styles.BasketPrewiewContent}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.BasketPrewiewHeader}>
          <h4>Ваша корзина</h4>
        </div>
        {items.length > 0 &&
          items.map((item) =>
            userStore.user.id ? (
              <BasketPrewiewItem item={item} userId={userStore.user.id} />
            ) : (
              <BasketPrewiewItem item={item} />
            )
          )}
        {items.length > 0 && (
          <div className={styles.btnOrderWrapper}>
            <button
              onClick={() => navigate("/basket")}
              className={styles.btnOrder}
            >
              <h2>Зробити замовлення</h2>
            </button>
          </div>
        )}
        {items.length === 0 && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "200px",
            }}
          >
            В корзині 0 товарів :(
          </div>
        )}
      </div>
    </div>
  );
};
