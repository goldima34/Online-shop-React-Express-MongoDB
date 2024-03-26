import React, { useContext, useEffect, useState } from "react";
import style from "../styles/BilingDetails.module.css";
import { Radio } from "antd";
import { NovaPoshta } from "../components/micro/NovaPoshta";
import { Context } from "..";
import { clearBasket, getBasket } from "../api/BasketApi";
import { BilingDetailItem } from "../components/micro/BilingDetailItem";
import { useForm } from "react-hook-form";
import "react-hook-form";
import { sendOrderToTelegram } from "../api/TelegramApi";
import { PopUpInvoice } from "../components/micro/PopUpInvoice";
import { getNotAuthBasket } from "../api/NotAuthBasketApi";

export const BilingDetails = () => {
  const { userStore } = useContext(Context);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(1);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedWarehouse, setSelectedWarehouse] = useState(null);
  const [deliveryError, setDeliveryError] = useState(null);
  const [popUp, setPopUp] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (value === 3) {
      if (!selectedCity || !selectedWarehouse) {
        setDeliveryError(true);
      } else {
        setDeliveryError(false);
        const newData = {
          ...data,
          city: selectedCity,
          warehouse: selectedWarehouse,
        };
        sendOrderToTelegram(newData, items, 3);
      }
    } else if (value === 2) {
      sendOrderToTelegram(data, items, 2);
    } else if (value === 1) {
      sendOrderToTelegram(data, items, 1);
    }
    setPopUp(true)
    clearBasket(userStore.user.id);
  };

  useEffect(() => {
    setTimeout(() => {
      if (userStore.isAuth) {
        getBasket(userStore.user.id).then((data) => {
          setItems(data.basket.basketItem);
        });
      } else {
        setItems(getNotAuthBasket())
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
      <form onSubmit={handleSubmit(onSubmit)} className={style.BilingContainer}>
        <div className={style.BilingDetailsContainer}>
          <span className={style.BilingHeaderText}>Деталі замовлення</span>
          <div>
            <div>
              <input
                {...register("firstName", { required: true })}
                placeholder="Ваше імя"
              />
              {errors.firstName && (
                <p className={style.errorText}>Введіть імя</p>
              )}
            </div>
            <div>
              <input
                {...register("Email", { required: true })}
                placeholder="Ваш Email"
              />
              {errors.Email && <p className={style.errorText}>Введіть Email</p>}
            </div>
            <div>
              <input
                {...register("number", { required: true })}
                placeholder="Ваш номер телефону"
              />
              {errors.number && (
                <p className={style.errorText}>Введіть номер телефону</p>
              )}
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
          {deliveryError && (
            <p className={style.errorText}>Введіть коректні данні</p>
          )}
          {value == 2 && (
            <h4>Самовивіз із магазину за адресою вул. Малинська 4</h4>
          )}
          {value == 1 && (
            <div>
              <input
                {...register("adressToDelivery", { required: true })}
                placeholder="Введіть адрессу доставки"
              />
              {errors.adressToDelivery && (
                <p className={style.errorText}>Введіть адрессу</p>
              )}
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
            <button type="submit" className={style.BilingitemsBtnAccept}>
              Підтвердити замовлення
            </button>
          </div>
          {popUp && <PopUpInvoice />}
        </div>
      </form>
    </div>
  );
};
