import React, { useContext, useEffect, useState } from "react";
import { Context } from "../index";
import { getBasket } from "../api/BasketApi";
import { BasketItem } from "./BasketItem";
import style from '../styles/Basket.module.css'

export const Basket = () => {
  const { userStore } = useContext(Context);
  const [items, setItems] = useState(null); // Set initial value to an empty array
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0)
  useEffect(() => {
    setInterval(() => {
      getBasket(userStore.user.id).then((data) => {
        setItems(data.basket.basketItem);
        setLoading(false);
      });
    }, 1000)
  }, [userStore.isAuth]); // Add userStore.isAuth as a dependency

  // console.log(userStore.isAuth, items);

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log()
  if (userStore.isAuth && items.length > 0) {
    // Check if user is authenticated and items exist
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
            item={element[0].item}
            count={element[0].count}
          />
        ))}
        <h4>Всього: {total}</h4>
      </>
    );
  }

  return null; // Return null when not authenticated or items haven't loaded
};
