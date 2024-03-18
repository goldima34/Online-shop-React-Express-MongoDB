import React, { useEffect, useState } from "react";
import style from "../styles/BilingDetails.module.css";
import { NewPostGetRegion } from "../api/NewPostApi";
export const BilingDetails = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    NewPostGetRegion().then((data) => setData(data));
    setTimeout(() => {
      setLoading(false);
    }, 500);
  });

  if (loading) {
    return <div></div>;
  }

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
        <div className={style.BilingSuccessContainer}>
          <select id="billingOptions">
            <option>
              Виберіть область:
            </option>
            {data.map((item) => (
              <option key={item.id} value={item.value}>
                {item.Description}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
