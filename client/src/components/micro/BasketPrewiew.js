import React, { useContext, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import styles from "../../styles/BasketPrewiew.module.css";
import { BasketPrewiewItem } from "./BasketPrewiewItem";
import { Context } from "../..";
import { getBasket } from "../../api/BasketApi";
import { useNavigate } from "react-router-dom";

export const BasketPrewiew = ({ active, setActive }) => {
  const { userStore } = useContext(Context);
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setInterval(() => {
      if (userStore.isAuth) {
        getBasket(userStore.user.id).then((data) => {
          setItems(data.basket.basketItem);
        });
      }
    }, 500);
  }, [userStore.isAuth]);

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
          items.map((item) => (
            <BasketPrewiewItem item={item} userId={userStore.user.id} />
          ))}
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
        {items.length == 0 && (
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
