import React from "react";
import styles from "../../styles/ItemPage.module.css";
import { DeliveryCar, ReturnDelivery } from "./Arrows";

export const DeliveryCard = () => {
  return (
    <>
      <div className={styles.DeliveryCardWrapper}>
        <div className={styles.DeliveryCardFirst}>
          <div className={styles.deliveryIconWrapper}>
            <DeliveryCar />
          </div>
          <div className={styles.DeliveryCardFirstTextWrapper}>
            <p>Швидка доставка</p>
            <span>Доставка по м.Житомир в день замовлення</span>
          </div>
        </div>
        <div className={styles.DeliveryCardSecond}>
          <div className={styles.deliveryIconWrapper}>
            <ReturnDelivery />
          </div>
          <div className={styles.DeliveryCardFirstTextWrapper}>
            <p>Повернення</p>
            <span>Повернення товару протягом 7 днів</span>
          </div>
        </div>
      </div>
    </>
  );
};
