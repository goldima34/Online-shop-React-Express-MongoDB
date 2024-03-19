import React, { useContext, useEffect, useState } from "react";
import style from "../styles/BilingDetails.module.css";
import {
  NewPostGetCity,
  NewPostGetRegion,
  NewPostGetWarehouses,
} from "../api/NewPostApi";
import { Select, Radio } from "antd";
import { NovaPoshta } from "../components/micro/NovaPoshta";
import { Context } from "..";
import { getBasket } from "../api/BasketApi";
import { BilingDetailItem } from "../components/micro/BilingDetailItem";
export const BilingDetails = () => {
  const { userStore } = useContext(Context);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(1);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedWarehouse, setSelectedWarehouse] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      if (userStore.isAuth) {
        getBasket(userStore.user.id).then((data) => {
          setItems(data.basket.basketItem);
        });
      }
      setLoading(false);
    }, 500);
  }, []);

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  const handleWarehouseChange = (warehouse) => {
    setSelectedWarehouse(warehouse);
  };

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
              <input placeholder="Ваше імя" />
            </div>
            <div>
              <input placeholder="Ваше прізвище" />
            </div>
            <div>
              <input placeholder="Ваш номер телефону" />
            </div>
          </div>
          <Radio.Group onChange={(e) => setValue(e.target.value)} value={value}>
            <Radio value={1}>Доставка по м.Житомир</Radio>
            <Radio value={2}>Самовивіз</Radio>
            <div>
              <Radio value={3}>Доставка в відділення Нова пошта</Radio>
            </div>
          </Radio.Group>
          {value == 3 && (
            <NovaPoshta
              loading={loading}
              onCityChange={handleCityChange}
              onWarehouseChange={handleWarehouseChange}
            />
          )}
          {value == 2 && (
            <h4>Самовивіз із магазину за адресою вул. Малинська 4</h4>
          )}
          {value == 1 && (
            <div>
              <input placeholder="Введіть адрессу доставки" />{" "}
            </div>
          )}
        </div>
        <div className={style.BilingSuccessContainer}>
          <div className={style.BilingitemsContainer}>
            {items.map((item) => (
              <BilingDetailItem item={item} />
            ))}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "300px",
              borderBottom: "1px solid",
            }}
          >
            <p>Всього:</p>
            <p>
              {items.reduce(
                (acc, item) => acc + item.count * item.item.price,
                0
              )}{" "}
              грн
            </p>
          </div>
          <div>
            <button className={style.BilingitemsBtnAccept}>
              Підтвердити замовлення
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
