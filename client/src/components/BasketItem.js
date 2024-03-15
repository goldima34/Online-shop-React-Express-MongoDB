import React, { useState } from "react";
import styles from "../styles/BasketItem.module.css";
import { Counter } from "./micro/Counter";
import { DeleteIcon } from "./micro/Arrows";

export const BasketItem = ({ item, count }) => {
  const [countState, setCountState] = useState(count);
  const [total, setTotal] = useState(item.price * countState);
  return (
    <div className={styles.BasketItemWrapper}>
      <div className={styles.nameWrapper}>
        <img
          style={{ width: 80, height: 80 }}
          src={process.env.REACT_APP_API_URL + item.img[0]}
        />
        <p>{item.name}</p>
      </div>
      <div className={styles.PriceWrapper}>
        <p>{item.price} грн.</p>
      </div>
      <div className={styles.countWrapper}>
        <Counter
          count={countState}
          addCount={() => {
            setCountState(countState + 1);
            setTotal(item.price * (countState + 1));
          }}
          minusCount={() => {
            if (countState > 1) {
              setCountState((countState) => countState - 1);
              setTotal(item.price * (countState - 1));
            } else {
              setCountState(1);
              setTotal(item.price);
            }
          }}
        />
        <div className={styles.deleteIconWrapper}>
          <DeleteIcon />
        </div>
      </div>
      <div className={styles.totalWrapper}>{total} грн.</div>
    </div>
  );
};
