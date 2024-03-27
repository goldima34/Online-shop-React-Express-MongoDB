import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/Search.module.css";
import { HeartIcon } from "./micro/Arrows";
import { useNavigate } from "react-router-dom";
import { getBasket } from "../api/BasketApi";
import { Context } from "..";
import { Basket } from "./Basket";
import { BasketPrewiew } from "./micro/BasketPrewiew";
import { getNotAuthBasket } from "../api/NotAuthBasketApi";

export const Search = () => {
  const navigate = useNavigate();
  const { userStore } = useContext(Context);
  const [items, setItems] = useState([]);
  const [prewiew, setPrewiew] = useState(false);

  useEffect(() => {
    setInterval(() => {
      if (userStore.isAuth) {
        getBasket(userStore.user.id).then((data) => {
          setItems(data.basket.basketItem);
        });
      } else {
        setItems(getNotAuthBasket());
      }
    }, 500);
  }, [userStore.isAuth]);

  return (
    <>
      <div className={styles.searchContainer}>
        <input
          className={styles.inputSearch}
          type="text"
          placeholder="What are you looking for?"
          name="search"
        />
      </div>
      <button className={styles.btnSearch} type="submit">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 20L16.2223 16.2156M18.3158 11.1579C18.3158 13.0563 17.5617 14.8769 16.2193 16.2193C14.8769 17.5617 13.0563 18.3158 11.1579 18.3158C9.2595 18.3158 7.43886 17.5617 6.0965 16.2193C4.75413 14.8769 4 13.0563 4 11.1579C4 9.2595 4.75413 7.43886 6.0965 6.0965C7.43886 4.75413 9.2595 4 11.1579 4C13.0563 4 14.8769 4.75413 16.2193 6.0965C17.5617 7.43886 18.3158 9.2595 18.3158 11.1579V11.1579Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </button>
      <button className={styles.btnWishList}>
        <HeartIcon />
      </button>
      {/* basket */}
      <button onClick={() => navigate('/basket')} className={styles.btnSearch}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3 5H7L10 22H26"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97371 27.8239 6.90678 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66661 27.39 6.66666H8"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      {items.length > 0 && (
        <div
          onClick={() => setPrewiew(true)}
          className={styles.basketItemsCount}
        >
          <p>{items.length}</p>
        </div>
      )}
      <BasketPrewiew active={prewiew} setActive={setPrewiew} />
    </>
  );
};
