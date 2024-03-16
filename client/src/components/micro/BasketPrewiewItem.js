import React from "react";
import style from "../../styles/BasketPrewiewItem.module.css";
import { deleteFromBasket } from "../../api/BasketApi";
import { DeleteIcon } from "./Arrows";

export const BasketPrewiewItem = ({ item, userId }) => {

  return (
    <>
      <div className={style.BasketPrewiewItemWrapper}>
        <div className={style.BasketPrewiewImgWrapper}>
          <img src={process.env.REACT_APP_API_URL + item.item.img[0]} />
        </div>
        <div className={style.BasketPrewiewTextWrapper}>
          <h4>{item.item.name}</h4>
          <h4>{item.count} шт.</h4>
          <h4>Всього: {item.count * item.item.price}</h4>
          <div
            className={style.deleteIconWrapper}
            onClick={() => deleteFromBasket(userId, item.item._id)}
          >
            <DeleteIcon />
          </div>
        </div>
      </div>
    </>
  );
};
