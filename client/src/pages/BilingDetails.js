import React from "react";
import style from "../styles/BilingDetails.module.css";
export const BilingDetails = () => {
  return (
    <div className={style.BilingWrapper}>
      <div className={style.BilingContainer}>
        <div className={style.BilingDetailsContainer}>
          <p>Деталі замовлення</p>
          <div>
            <div>
              <label>Ваше імя</label>
              <input />
            </div>
            <div>
              <label>Ваше прізвище</label>
              <input />
            </div>
            <div>
              <label>Ваше місто</label>
              <input />
            </div>
            <div>
              <label>Ваш номер телефону</label>
              <input />
            </div>
          </div>
        </div>
        <div className={style.BilingSuccessContainer}>sadfsadf</div>
      </div>
    </div>
  );
};
