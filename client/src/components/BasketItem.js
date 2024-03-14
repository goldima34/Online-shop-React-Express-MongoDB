import React from "react";
import styles from "../styles/BasketItem.module.css";

export const BasketItem = ({ item, count }) => {
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
        <input type="number"className={styles.customInput} id="quantity" name="quantity" min="1" value={count}/>
      </div>
    </div>
  );
};
