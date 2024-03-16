import React, { useEffect, useState } from "react";
import styles from "../styles/BasketItem.module.css";
import { Counter } from "./micro/Counter";
import { DeleteIcon } from "./micro/Arrows";
import {
  decreaseCount,
  deleteFromBasket,
  increaseCount,
} from "../api/BasketApi";

export const BasketItem = ({ element, count, userId }) => {
  const [countState, setCountState] = useState(count);
  const [total, setTotal] = useState(element.item.price * count);

  const increase = () => {
    setCountState(countState + 1);
    setTotal(element.item.price * (countState + 1));
    increaseCount(userId, element._id);
  };

  const decrease = () => {
    if (countState > 1) {
      setCountState((countState) => countState - 1);
      setTotal(element.item.price * (countState - 1));
      decreaseCount(userId, element._id);
    } else {
      setCountState(1);
      setTotal(element.item.price);
    }
  };
  return (
    <div className={styles.BasketItemWrapper}>
      <div className={styles.nameWrapper}>
        <img
          style={{ width: 80, height: 80 }}
          src={process.env.REACT_APP_API_URL + element.item.img[0]}
        />
        <p>{element.item.name}</p>
      </div>
      <div className={styles.PriceWrapper}>
        <p>{element.item.price} грн.</p>
      </div>
      <div className={styles.countWrapper}>
        <Counter
          count={countState}
          addCount={() => increase()}
          minusCount={() => decrease()}
        />
        <div
          className={styles.deleteIconWrapper}
          onClick={() => deleteFromBasket(userId, element.item._id)}
        >
          <DeleteIcon />
        </div>
      </div>
      <div className={styles.totalWrapper}>{total} грн.</div>
    </div>
  );
};
