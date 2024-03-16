import React, { useContext, useEffect, useState } from "react";
import { Context } from "../index";
import { getBasket } from "../api/BasketApi";
import { BasketItem } from "./BasketItem";
import style from "../styles/Basket.module.css";
import { useNavigate } from "react-router-dom";

export const Basket = () => {
  const navigate = useNavigate()
  const { userStore } = useContext(Context);
  const [items, setItems] = useState([]); // Set initial value to an empty array
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setInterval(() => {
      getBasket(userStore.user.id).then((data) => {
        setItems(data.basket.basketItem);
        setLoading(false);
      });
    }, 500);
  }, [userStore.isAuth]);

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
            item={element.item}
            count={element.count}
            userId={userStore.user.id}
          />
        ))}
        <h4>Всього: {total}</h4>
      </>
    );
  }

   if (userStore.isAuth && items.length <= 0) {
     return (
       <>
         <div>
           <h4>Ваша корзина порожня</h4>
           <button onClick={() => navigate('/')}>До магазину</button>
         </div>
       </>
     );
   }

};
