import React, { useEffect, useState } from "react";
import styles from "../styles/BasketItem.module.css";
import { Counter } from "./micro/Counter";
import { DeleteIcon } from "./micro/Arrows";
import {
  decreaseCount,
  deleteFromBasket,
  increaseCount,
} from "../api/BasketApi";
import {
  decreaseNotAuthBasket,
  deleteNotAuthBasket,
  increaseNotAuthBasket,
} from "../api/NotAuthBasketApi";
import { observer } from "mobx-react-lite";

const BasketItem = ({ element, count, userId , onDelete}) => {
  const [countState, setCountState] = useState(count);
  const [total, setTotal] = useState(element.item.price * count);

  const increase = () => {
    //user auth
    if (userId) {
      setCountState(countState + 1);
      setTotal(element.item.price * (countState + 1));
      increaseCount(userId, element._id);
    } else {
      // user not auth
      setCountState(countState + 1);
      setTotal(element.item.price * (countState + 1));
      increaseNotAuthBasket(element.item._id);
    }
  };

  const decrease = () => {
    //user auth
    if (userId) {
      if (countState > 1) {
        setCountState((countState) => countState - 1);
        setTotal(element.item.price * (countState - 1));
        decreaseCount(userId, element._id);
      } else {
        // user not auth
        setCountState(1);
        setTotal(element.item.price);
      }
    } else {
      if (countState > 1) {
        setCountState((countState) => countState - 1);
        setTotal(element.item.price * (countState - 1));
        decreaseNotAuthBasket(element.item._id);
      } else {
        setCountState(1);
        setTotal(element.item.price);
      }
    }
  };

  const onClick = () => {
    if (userId) {
      deleteFromBasket(userId, element.item._id);
    } else {
      deleteNotAuthBasket(element.item._id);
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
        <div className={styles.deleteIconWrapper} onClick={onClick}>
          <DeleteIcon />
        </div>
      </div>
      <div className={styles.totalWrapper}>{total} грн.</div>
    </div>
  );
};

export default observer(BasketItem);
